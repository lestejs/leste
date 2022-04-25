export default function simple(options) {
  const component = new this.Component(options || this.node.component, this.context, this.keyNode, this.nodeElement, this.common)
  const proxies = {}
  const props = options?.proxies || this.node.component.proxies
  if (props) {
    for (const [pr, v] of Object.entries(props)) {
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