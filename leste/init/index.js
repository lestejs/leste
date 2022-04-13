import { dipprox } from '../utils/dipprox'
import { delay } from '../utils/delay'
import release from '../utils/release'
import Node from '../node'

class Init {
  constructor(component, mount, root, errors) {
    this.component = component
    if (!this.component.proxies) this.component.proxies = {}
    this.common = {
      refs: [],
      mount,
      errors
    }
    this.context = {
      options: component,
      node: { root },
      param: {},
      reactiveMap: {},
      method: {},
      proxy: {},
      setter: {},
      handler: {},
      source: component.sources,
      delay
    }
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
  stores() {
    if (this.component.stores) {
      for (let store of Object.values(this.component.stores)) {
        if (store.params) {
          for (const key in store.params) {
            if (key in this.component.props.params) {
              this.context.param[key] = {...store.params[key]}
            }
          }
        }
        if (store.proxies) {
          for (const key in store.proxies) {
            if (key in this.component.props.proxies) {
              this.component.proxies[key] = release(store.proxies[key])
            }
          }
        }
        if (store.methods) {
          for (const key in store.methods) {
            if (key in this.component.props.methods) {
              this.context.method[key] = (...args) => store.methods[key].bind(store)(...release(args))
            }
          }
        }
        const name = store.name
        document.addEventListener(name, (e) => {
          const {path, value} = e.detail
          if (store.proxies && (path[0] in this.component.props.proxies)) {
            let target = this.context.proxy
            if (path.length > 0) {
              for (let i = 0; i < path.length - 1; i++) {
                target = target[path[i]]
              }
              target[path[path.length - 1]] = value
            } else {
              target[path[0]] = value
            }
          }
        }, false)
      }
    }
  }
  methods() {
    const methods = {}
    if (this.component.methods) {
      for (const [key, method] of Object.entries(this.component.methods)) {
        this.context.method[key] = method.bind(this.context)
        methods[key] = this.context.method[key]
      }
    }
    return methods
  }
  setters() {
    if (this.component.setters) {
      for (const key in this.component.setters) {
        this.context.setter[key] = (v) => this.component.setters[key].bind(this.context)(v)
      }
    }
  }
  handlers() {
    if (this.component.handlers) {
      for (const key in this.component.handlers) {
        this.context.handler[key] = (v) => this.component.handlers[key].bind(this.context)(v)
      }
    }
  }
  params() {
    if (this.component.params) {
      for (const key in this.component.params) {
        this.context.param[key] = {...this.component.params[key]}
      }
    }
  }
  props(props) {
    const power = {}
    if (this.component.props) {
      if (props.proxies && this.component.props.proxies) {
        for (const key in this.component.props.proxies) {
          if (key in props.proxies) {
            this.component.proxies[key] = props.proxies[key]
            power[key] = (v) => {
              this.context.proxy[key] = release(v)
            }
          } else this.component.proxies[key] = undefined
        }
      }
      if (props.methods && this.component.props.methods) {
        for (const key in props.methods) {
          if (key in this.component.props.methods) {
            this.context.method[key] = props.methods[key]
          }
        }
      }
      if (props.params && this.component.props.params) {
        for (const key in this.component.props.params) {
          if (key in props.params) {
            this.context.param[key] = release(props.params[key])
          } else this.context.param[key] = undefined
        }
      }

      this.validation()
    }
    return power
  }
  validation() {
    if (this.component.props.proxies) {
      for (const [key, pr] of Object.entries(this.component.props.proxies)) {
        if (this.component.proxies[key]=== undefined || this.component.proxies[key]===null) this.component.proxies[key] = pr.default
        if (this.component.props.proxies[key].type) {
          if (!typeof this.component.proxies[key] === this.component.props.proxies[key].type) {
            console.error('Error props type')
          }
        }
      }
    }
    if (this.component.props.methods) {
      for (const key in this.component.props.methods) {
        if (typeof this.component.props.methods !== 'object') {
          console.error('Error props type')
        } else if (this.component.props.methods[key].instance
          && this.context.method[key] instanceof this.component.props.methods[key].instance) {
          console.error('Error props instance')
        }
      }
    }
    if (this.component.props.params) {
      for (const [key, pr] of Object.entries(this.component.props.params)) {
        if (this.context.param[key] === undefined || this.context.param[key] === null) {
          this.context.param[key] = pr.default
        }
        if (this.component.props.params[key].type) {
          if (!typeof this.context.param[key] === this.component.props.params[key].type) {
            console.error('Error props type')
          }
        }
      }
    }
  }
  proxies() {
    const self = this
    this.context.proxy = dipprox(release(this.component.proxies), {
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
                  await active(target, path, value)
                }
              }
            }
          }
        }
        return self.context.handler[ref]?.bind(self.context)(value)
      },
      get(target, path) {
        self.common.refs.push(path.join('_'))
      },
      deleteProperty(target, path) {
        console.log('delete', path.join('_'))
      }
    })
  }
  async nodes(container) {
    if (this.component.nodes) {
      const nodes = this.component.nodes.bind(this.context)()
      for await (const [keyNode, options] of Object.entries(nodes)) {
        const nodeElement = container.querySelector(`.${keyNode}`)
        Object.assign(this.context.node, { [keyNode]: nodeElement })
        if (options) {
          nodeElement.cmp = (index) => nodeElement.children[index || 0]
          nodeElement.unmount = async (index) => {
            nodeElement.cmp(index).remove()
            await this.unmounted()
          }
          nodeElement.power = (proxy, value, index) => {
            nodeElement.cmp(index).power[proxy](value)
          }
          const node = new Node(options, keyNode, this.context, nodeElement, this.common)
          for await (const [key, callback] of Object.entries(options)) {
            node.native(key, callback)
            if (key in node) {
              await node[key](keyNode, callback)
            }
          }
        }
      }
    }
  }
}
export { Init }