export default function advance() {
  this.nodeElement.createComponent = async(options) => {
    const component = new this.Component(options, this.context, this.keyNode, this.nodeElement, this.refs)
    await component.create(options.src, options.proxies)
  }
}