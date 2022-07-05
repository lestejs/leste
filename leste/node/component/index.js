import simple from './simple'
import iterate from './iterate/index'
import induce from './induce'
import { Component } from './component'

async function component() {
  this.nodeElement.integrate = async (options) => {
    if (this.nodeElement.unmount && !this.nodeElement.hasAttribute('integrate')) {
      this.nodeElement.setAttribute('integrate', '')
      const {component, proxies} = this.simple(options)
      await component.create(options.src, proxies)
    }
  }
  if (this.node.component.iterate) {
    await this.iterate()
  } else if (this.node.component.induce) {
    await this.induce()
  } else {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}

export default { Component, component, simple, iterate, induce }