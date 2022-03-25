export default async function inure() {
  const action = async() => {
    if (this.node.component.precept()) {
      this.nodeElement.unmount()
      const { component, proxies } = this.simple()
      await component.create(this.node.component.src, proxies)
    } else {
      this.nodeElement.unmount()
    }
  }
  this.refs.length = 0
  const precept = this.node.component.precept()
  this.nodeElement.reactive(this.refs, 'precept', action)
  if (precept) {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}