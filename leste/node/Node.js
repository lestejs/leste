class Node {
  constructor(node, keyNode, context, nodeElement, refs) {
    this.node = node
    this.keyNode = keyNode
    this.context = context
    this.refs = refs
    this.nodeElement = nodeElement
    this.nodeElement.reactiveInNode = (refs, name, active) => {
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
export { Node }