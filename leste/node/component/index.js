import simple from './simple'
import iterate from './iterate/index'
import induce from './induce'
import integrate from './integrate'
import { Component } from './component'

async function component() {
  this.nodeElement.advance = async(options) => {
    const component = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.common)
    await component.create(options.src, options.proxies, null, true)
  }
  if (this.node.component.type in this) {
    this[this.node.component.type]()
  } else {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}

export default { Component, component, simple, iterate, induce, integrate }