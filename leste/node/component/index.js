import simple from './simple'
import iterate from './iterate/index'
import advance from './advance'
import inure from './inure'
import integrate from './integrate'
import { Component } from './component'

async function component() {
  if (this.node.component.type in this) {
    this[this.node.component.type]()
  } else {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}

export default { Component, component, simple, iterate, advance, inure, integrate }