import { Init } from './init'
import replicate from './utils/replicate'

function contain(options, nodeElement, component) {
  const slot = nodeElement.querySelector('[slot]')
  if (slot) {
    slot.innerHTML = options.template
  } else {
    nodeElement.insertAdjacentHTML("beforeEnd", options.template)
    if (nodeElement.hasAttribute('iterate')) {
      nodeElement.lastChild.unmount = async () => {
        await component.unmount(nodeElement.lastChild)
        nodeElement.children[nodeElement.children.length - 1].remove()
      }
      return nodeElement.lastChild
    }
  }
  if (!nodeElement.unmount) nodeElement.unmount = async () => {
    await component.unmount(nodeElement)
    nodeElement.innerHTML = ''
  }
  return nodeElement
}
async function mount(nodeElement, options, props = {}) {
  if (options) {
    let component = new Init(options)
    const container = contain(options, nodeElement, component)
    await component.created(container)
    component.stores()
    component.setters()
    component.handlers()
    component.params()
    component.props(props, container)
    component.methods(container)
    component.proxies()
    await component.nodes(container)
    await component.mounted()
    return { options, context: component.context}
  }
}
export {mount, replicate}