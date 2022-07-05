import { classes } from './classes'
import native from './nativeProperty'
import component from './component'

class Node {
  constructor(node, keyNode, context, nodeElement, common) {
    this.node = node
    this.keyNode = keyNode
    this.context = context
    this.common = common
    this.refs = common.refs
    this.nodeElement = nodeElement
    this.nodeElement.reactive = (refs, name, active) => {
      if (refs.length) {
        refs.forEach(ref => {
          if (!(name in this.nodeElement.reactivity)) this.nodeElement.reactivity[name] = {}
          if (!(ref in this.nodeElement.reactivity[name])) { this.nodeElement.reactivity[name][ref] = [] }
          this.nodeElement.reactivity[name][ref].push(active)
        })
        this.common.fl = false
        refs.length = 0
      }
    }
  }
}
Object.assign(Node.prototype, { classes })
Object.assign(Node.prototype, native)
Object.assign(Node.prototype, component)
export default Node