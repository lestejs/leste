import { Iterator } from './Iterator'

export default async function iterate() {
  if (this.nodeElement.innerHTML === '') {
    const propProxies = (data, index) => {
      const proxies = {}
      if (this.node.component.proxies) {
        for (const [pr, v] of Object.entries(this.node.component.proxies)) {
          if (typeof v === 'function' && v.name) {
            this.refs.length = 0
            this.common.fl = true
            if (v.length) {
              Object.assign(proxies, {[pr]: v(data[index], index)})
            } else Object.assign(proxies, {[pr]: v()})
            this.nodeElement.reactive(this.refs, 'component', (t, p) => {
              const index = p[1] // убедится в имени массива
              if (index) {
                console.log(this.nodeElement, this.refs)
                this.nodeElement.children[index].proxy[pr] = v(data[index], index)
              } else {
                for (let index = 0; index < this.nodeElement.children.length; index++) {
                  this.nodeElement.children[index].proxy[pr] = v(data[index], index)
                }
              }
            })
          }
        }
      }
      return proxies
    }
    this.refs.length = 0
    this.common.fl = true
    let data = this.node.component.iterate
    this.nodeElement.setAttribute('iterate', '')
    const component = new this.Component(this.node.component, this.context, this.keyNode, this.nodeElement, this.common)
    if (typeof data === 'number') {
      // dfhdfhdf
    } else if (Object.getPrototypeOf(this.node.component.iterate).instance === 'Proxy') {
      const length = data.length
      const lengthPath = this.refs[0]
      const arrPath = lengthPath.split('_')[0]
      const create = async (index) => {
        await component.create(this.node.component.src, propProxies(this.node.component.iterate, index), this.node.component.iterate[index], index)
      }
      const iterator = new Iterator(this.nodeElement, this.node.component.proxies, this.node.component.iterate, create)
      this.nodeElement.reactive([arrPath], 'component', (t, p, v) => {
        this.node.component.iterate = v
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
  } else {
    this.nodeElement.textContent = this.common.errors[1]
    console.error(this.common.errors[1])
  }
}