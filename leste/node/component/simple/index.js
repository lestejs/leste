export default function simple() {
  const component = new this.Component(this.node.component, this.context, this.keyNode, this.nodeElement, this.refs)
  const proxies = {}
  if (this.node.component.proxies) {
    for (const [pr, v] of Object.entries(this.node.component.proxies)) {
      if (typeof v === 'function' && v.name) {
        this.refs.length = 0
        Object.assign(proxies, { [pr]: v() })
        this.nodeElement.reactive(this.refs, 'component', () => {
          const value = v()
          this.nodeElement.power(pr, value)
        })
      } else Object.assign(proxies, { [pr]: v })
    }
  }
  return { component, proxies }
}