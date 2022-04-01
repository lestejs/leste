import { Iterator } from './Iterator'

export default async function iterate() {
  const propProxies = (data, index) => {
    const proxies = {}
    if (this.node.component.proxies) {
      for (const [pr, v] of Object.entries(this.node.component.proxies)) {
        if (typeof v === 'function' && v.name) {
          this.refs.length = 0
          if (v.length) {
            Object.assign(proxies, { [pr]: v(data[index], index) })
          } else Object.assign(proxies, { [pr]: v() })
          this.nodeElement.reactive(this.refs, 'component', (t, p) => {
            const index = p[1] // убедится в имени массива
            if (index) {
              this.nodeElement.power(pr, v(data[index], index), index)
            } else {
              for (let index = 0;index < this.nodeElement.children.length;index++) {
                this.nodeElement.power(pr, v(data[index], index), index)
              }
            }
          })
        }
      }
    }
    return proxies
  }
  this.refs.length = 0
  let data = this.node.component.data
  const length = data.length
  const lengthPath = this.refs[0]
  const arrPath = lengthPath.split('_')[0]
  const component = new this.Component(this.node.component, this.context, this.keyNode, this.nodeElement, this.refs)
  if (typeof data === 'number') {
    // dfhdfhdf
  } else if (Object.getPrototypeOf(this.node.component.data).instance === 'Proxy') {
    const create = async(index) => {
      await component.create(this.node.component.src, propProxies(this.node.component.data, index), this.node.component.data[index], index)
    }
    const iterator = new Iterator(this.nodeElement, this.node.component.proxies, this.node.component.data, create)
    this.nodeElement.reactive([arrPath], 'component', (t, p, v) => {
      this.node.component.data = v
      iterator.set.bind(iterator)(v)
    })
    this.nodeElement.reactive([lengthPath], 'component', (t, p, v) => iterator.length.bind(iterator)(v))
    if (length) {
      for await (const [index] of data.entries()) {
        await create(index)
      }
    }
  } else {
    for await (const [index, val] of data.entries()) {
      const proxies = propProxies(data, index)
      await component.create(this.node.component.src, proxies, val, index)
    }
  }
}