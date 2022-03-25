export default async function integrate() {
  const { component, proxies } = this.simple()
  await component.create(this.node.component.src, proxies)
  this.nodeElement.integrateComponent = async (options) => {
    const component = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.refs)
    await component.create(options.src, options.proxies)
  }
}