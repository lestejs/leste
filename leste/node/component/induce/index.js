export default async function induce() {
  this.refs.length = 0
  this.common.fl = true
  const induce = this.node.component.induce()
  this.nodeElement.reactive(this.refs, 'induce', async() => {
    if (this.node.component.induce()) {
      this.nodeElement.unmount && this.nodeElement.unmount()
      const { component, proxies } = this.simple()
      await component.create(this.node.component.src, proxies)
    } else {
      this.nodeElement.unmount && this.nodeElement.unmount()
    }
  })
  if (induce) {
    const { component, proxies } = this.simple()
    await component.create(this.node.component.src, proxies)
  }
}