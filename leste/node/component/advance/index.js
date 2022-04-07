export default function advance() {
  this.nodeElement.create = async(options) => {
    const component = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.common)
    await component.create(options.src, options.proxies)
  }
}