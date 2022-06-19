export default async function induce() {
  this.refs.length = 0
  const precept = this.node.component.precept()
  this.nodeElement.reactive(this.refs, 'precept', async() => {
    if (this.node.component.precept()) {
      const { component, proxies } = this.simple()
      await component.create(this.node.component.src, proxies)
    } else {
      this.nodeElement.unmount()
    }
  })
  if (precept) {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}