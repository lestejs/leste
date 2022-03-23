import { Node } from '../node/Node'
import { property } from '../node/property'
import { createDeepProxy } from './proxied'

class Component {
  constructor(component) {
    this.component = component
    if (!this.component.proxies) this.component.proxies = {}
    this.refs = []
    this.context = {
      node: {},
      param: {},
      reactiveMap: {},
      method: {},
      proxy: {},
      setter: {},
      source: component.sources
    }
  }
  mediator() {
    if (this.component.mediator) {
      if (this.component.mediator.proxies) {
        for (const [key, pr] of Object.entries(this.component.mediator.proxies)) {
          this.component.proxies[key] = this.component.mediator.store.proxies[key] || pr.default
        }
      }
      if (this.component.mediator.methods) {
        for (const [key] of Object.entries(this.component.mediator.methods)) {
          this.context.method[key] = this.component.mediator.store.methods[key].bind(this.component.mediator.store)
        }
      }
      const name = this.component.mediator.store.name
      document.addEventListener(name, (e) => {
        const { path, value } = e.detail
        if (this.component.mediator.proxies && (path[0] in this.component.mediator.proxies)) {
          let target = this.context.proxy
          if (path.length > 0) {
            for (let i = 0;i < path.length - 1;i++) {
              target = target[path[i]]
            }
            target[path[path.length - 1]] = value
          } else target[path[0]] = value
        }
      }, false)
    }
  }
  methods() {
    if (this.component.methods) {
      for (const [key, method] of Object.entries(this.component.methods)) {
        this.context.method[key] = method.bind(this.context)
      }
    }
  }
  setters() {
    if (this.component.setters) {
      for (const key in this.component.setters) {
        this.context.setter[key] = (v) => this.component.setters[key].bind(this.context)(v)
      }
    }
  }
  params() {
    if (this.component.params) {
      for (const [key, param] of Object.entries(this.component.params)) {
        this.context.param[key] = param
      }
    }
  }
  props(props) {
    const power = {}
    if (this.component.props) {
      if (this.component.props.proxies) {
        for (const [key, pr] of Object.entries(this.component.props.proxies)) {
          const v = props.proxies[key]
          this.component.proxies[key] = (typeof v === 'undefined' || v === null || v === '') ? pr.default : v
          power[key] = (v) => {
            this.context.proxy[key] = JSON.parse(JSON.stringify(v))
          }
        }
      }
      if (this.component.props.methods) {
        for (const [key] of Object.entries(this.component.props.methods)) {
          this.context.method[key] = props.methods[key]
        }
      }
      if (this.component.props.params) {
        for (const [key, pr] of Object.entries(this.component.props.params)) {
          const v = props.params[key]
          this.context.param[key] = (typeof v === 'undefined' || v === null || v === '') ? pr.default : v
        }
      }
    }
    return power
  }
  proxies() {
    const self = this
    this.context.proxy = createDeepProxy({ ...this.component.proxies }, {
      beforeSet(target, path, value, ref) {
        return self.context.setter[ref]?.bind(self.context)(value)
      },
      async set(target, path, value, ref) {
        if (self.context.reactiveMap) {
          for (const keyNode in self.context.reactiveMap) {
            for (const name in self.context.reactiveMap[keyNode]) {
              const actives = self.context.reactiveMap[keyNode][name][ref]
              if (actives?.length) {
                for (const active of actives) {
                  console.log('set', ref, '=', JSON.stringify(value))
                  await active(target, path, value)
                }
              }
            }
          }
        }
      },
      get(target, path) {
        console.log('get', path.join('_'))
        self.refs.push(path.join('_'))
      },
      deleteProperty(target, path) {
        console.log('delete', path.join('_'))
      }
    })
  }
  async created() {
    this.component.created && await this.component.created.bind(this.context)()
  }
  async loaded() {
    this.component.loaded && await this.component.loaded.bind(this.context)()
  }
  async mounted() {
    this.component.mounted && await this.component.mounted.bind(this.context)()
  }
  async unmounted() {
    // document.removeEventListenerr
    this.component.unmounted && await this.component.unmounted.bind(this.context)()
  }
  async nodes(container) {
    if (this.component.nodes) {
      const nodes = this.component.nodes.bind(this.context)()
      for await (const [keyNode, node] of Object.entries(nodes)) {
        const nodeElement = container.querySelector(`.${keyNode}`)
        Object.assign(this.context.node, { [keyNode]: nodeElement })
        nodeElement.getContainer = (index) => nodeElement.children[index || 0]
        nodeElement.unmountComponent = async (index) => {
          nodeElement.getContainer(index || 0).remove()
          await this.unmounted()
        }
        nodeElement.powerComponent = (proxy, value, index) => {
          nodeElement.getContainer(index).power[proxy](value)
        }
        Object.assign(Node.prototype, property)
        const controller = new Node(node, keyNode, this.context, nodeElement, this.refs)
        for await (const [key, callback] of Object.entries(node)) {
          controller.native(key, callback)
          if (key in controller) {
            await controller[key](keyNode, callback)
          }
        }
      }
    }
  }
}
export { Component }