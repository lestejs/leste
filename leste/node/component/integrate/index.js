export default async function integrate() {
  const { component, proxies } = this.simple()
  await component.create(this.node.component.src, proxies)
  this.nodeElement.integrate = async (options) => {
    const component = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.common)
    await component.create(options.src, options.proxies)
  }
}