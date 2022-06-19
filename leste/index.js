import { Init } from './init'

function contain(options, nodeElement, component) {
  if (options.template) {
    nodeElement.insertAdjacentHTML("beforeEnd", options.template)
    if (nodeElement.hasAttribute('iterate')) {
      nodeElement.lastChild.unmount = async () => {
        await component.unmount()
        nodeElement.children[nodeElement.children.length - 1].remove()
      }
      return nodeElement.lastChild
    } else {
      nodeElement.unmount = async () => {
        await component.unmount()
        nodeElement.innerHTML = ''
      }
      return nodeElement
    }
  } else if (options.fragments) {
    for (const [key, fr] of Object.entries(options.fragments)) {
      const place = nodeElement.querySelector(`.${key}`)
      if (place.hasAttribute('slot')) {
        place.unmount = async () => {
          await component.unmount()
          place.innerHTML = ''
        }
        place.innerHTML = fr
      }
    }
    return nodeElement
  }
}
export async function mount(nodeElement, options, props = {}) {
  if (options) {
    let component = new Init(options)
    await component.created()
    component.stores()
    component.setters()
    component.handlers()
    component.params()
    const container = contain(options, nodeElement, component)
    await component.prepared(container)
    component.props(props, container)
    component.methods(container)
    component.proxies()
    await component.nodes(container)
    await component.mounted()
    return { options, context: component.context}
  }
}