import release from '../../utils/release'

class Component {
  constructor(component, context, keyNode, nodeElement, common) {
    this.common = common
    this.component = component
    this.context = context
    this.keyNode = keyNode
    this.nodeElement = nodeElement
    this.props = { methods: {}, proxies: {}, params: {}}
  }
  get options() {
    return this.component
  }
  propsMethods() {
    const methods = this.component.methods
    if (methods) {
      for (const [pr, v] of Object.entries(methods)) {
        if (typeof v === 'function') {
          Object.assign(this.props.methods, { [pr]: (...args) => v.bind(this.context)(...release(args)) })
        }
      }
    }
  }
  propsParams(val, index) {
    const params = this.component.params
    if (params) {
      for (const [pr, v] of Object.entries(params)) {
        if (typeof v === 'function' && v.name) {
          Object.assign(this.props.params, { [pr]: v(val, index) })
        } else Object.assign(this.props.params, { [pr]: release(v) || v })
      }
    }
  }
  // propsProxy(val, index) {
  //   const proxy = this.init.proxy
  //   if (proxy) {
  //     for (const [pr, v] of Object.entries(proxy)) {
  //       if (typeof v === 'function' && v.name) {
  //         Object.assign(this.props.proxy, { [pr]: v(val, index) })
  //       }
  //     }
  //   }
  // }
  async load(src) {
    if (src instanceof Promise) {
      const res = await src
      return res?.default
    } else {
      return await src
    }
  }
  async create(src, proxies, val, index) {
    try {
      this.propsMethods()
      this.propsParams(val, index)
      if (proxies) this.props.proxies = proxies
      // this.propsProxy(val, index)
      if (src) {
        const component = await this.load(src)
        await this.common.mount(this.nodeElement, component, {...this.props})
      }
    } catch (e) {
      console.error(e)
    }
  }
}
export { Component }