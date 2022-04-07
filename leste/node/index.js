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
        if (!(this.keyNode in this.context.reactiveMap)) this.context.reactiveMap[this.keyNode] = {}
        refs.forEach(ref => {
          if (!(name in this.context.reactiveMap[this.keyNode])) this.context.reactiveMap[this.keyNode][name] = {}
          if (!(ref in this.context.reactiveMap[this.keyNode][name])) { this.context.reactiveMap[this.keyNode][name][ref] = [] }
          this.context.reactiveMap[this.keyNode][name][ref].push(active)
        })
      }
    }
  }
}
Object.assign(Node.prototype, { classes })
Object.assign(Node.prototype, native)
Object.assign(Node.prototype, component)
export default Node