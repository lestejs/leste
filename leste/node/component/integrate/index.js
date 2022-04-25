export default async function integrate() {
  this.nodeElement.integrate = async (options) => {
    // const component = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.common)
    const { component, proxies } = this.simple(options)
    await component.create(options.src, proxies)
  }
  const { component, proxies } = this.simple()
  await component.create(this.node.component.src, proxies)
}