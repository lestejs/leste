import { Creator } from './Creator'
import { Iterator } from './Iterator'

async function iterate() {
  const propProxies = (data, index) => {
    const proxies = {}
    if (this.node.component.proxies) {
      for (const [pr, v] of Object.entries(this.node.component.proxies)) {
        if (typeof v === 'function' && v.name) {
          this.refs.length = 0
          if (v.length) {
            Object.assign(proxies, { [pr]: v(data[index], index) })
          } else Object.assign(proxies, { [pr]: v() })
          this.nodeElement.reactiveInNode(this.refs, 'component', (t, p) => {
            const index = p[1] // убедится в имени массива
            if (index) {
              this.nodeElement.powerComponent(pr, v(data[index], index), index)
            } else {
              for (let index = 0;index < this.nodeElement.children.length;index++) {
                this.nodeElement.powerComponent(pr, v(data[index], index), index)
              }
            }
          })
        }
      }
    }
    return proxies
  }
  const data = this.node.component.data
  const component = new Creator(this.node.component, this.context, this.keyNode, this.nodeElement, this.refs)
  this.refs.length = 0
  const length = typeof data === 'number' ? data : data.length
  if (length && this.refs.length) {
    const iterator = new Iterator(this.nodeElement, this.node.component.proxies, data, async() => {
      await component.create(this.node.component.src, propProxies(data, data.length - 1, iterator), data[data.length - 1], data.length - 1)
    })
    length && this.nodeElement.reactiveInNode([this.refs[0]], 'component', (t, p, v) => iterator.length.bind(iterator)(v))
  }
  for await (const [index, val] of data.entries()) {
    const proxies = propProxies(data, index)
    await component.create(this.node.component.src, proxies, val, index)
  }
}

function advance() {
  this.nodeElement.createComponent = async(options) => {
    const component = new Creator(options, this.context, this.keyNode, this.nodeElement, this.refs)
    await component.create(options.src, options.proxies)
  }
}

async function inure() {
  const action = async() => {
    if (this.node.component.precept()) {
      this.nodeElement.unmountComponent()
      const { component, proxies } = this.simple()
      await component.create(this.node.component.src, proxies)
    } else {
      this.nodeElement.unmountComponent()
    }
  }
  this.refs.length = 0
  const precept = this.node.component.precept()
  this.nodeElement.reactiveInNode(this.refs, 'precept', action)
  if (precept) {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}

async function integrate() {
  const { component, proxies } = this.simple()
  await component.create(this.node.component.src, proxies)
  this.nodeElement.integrateComponent = async (options) => {
    const component = new Creator(options, this.context, this.keyNode, this.nodeElement, this.refs)
    await component.create(options.src, options.proxies)
  }
}

function simple() {
  const component = new Creator(this.node.component, this.context, this.keyNode, this.nodeElement, this.refs)
  const proxies = {}
  if (this.node.component.proxies) {
    for (const [pr, v] of Object.entries(this.node.component.proxies)) {
      if (typeof v === 'function' && v.name) {
        this.refs.length = 0
        Object.assign(proxies, { [pr]: v() })
        this.nodeElement.reactiveInNode(this.refs, 'component', () => {
          const value = v()
          this.nodeElement.powerComponent(pr, value)
        })
      }
    }
  }
  return { component, proxies }
}

async function component() {
  if (this.node.component.type in this) {
    this[this.node.component.type]()
  } else {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}
export { iterate, simple, advance, inure, integrate, component }