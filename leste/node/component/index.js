import simple from './simple'
import iterate from './iterate/index'
import induce from './induce'
import { Component } from './component'

async function component() {
  this.nodeElement.advance = async(options) => {
    const component = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.common)
    await component.create(options.src, options.proxies, null, true)
  }
  this.nodeElement.integrate = async (options) => {
    const { component, proxies } = this.simple(options)
    await component.create(options.src, proxies)
  }
  if (this.node.component.data) {
    await this.iterate()
  } else if (this.node.component.precept) {
    await this.induce()
  } else {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}

export default { Component, component, simple, iterate, induce }