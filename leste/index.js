import { Init } from './init'

function contain(entry, nodeElement) {
  if (entry.template) {
    nodeElement.insertAdjacentHTML("beforeEnd", entry.template)
    return nodeElement.getAttribute('iterate') ? nodeElement.lastChild : nodeElement
  } else if (entry.fragments) {
    for (const [key, fr] of Object.entries(entry.fragments)) {
      const place = nodeElement.querySelector(`.${key}`)
      place.innerHTML = fr
    }
    return nodeElement
  }
}
async function mount(nodeElement, options, props = {}) {
  if (options) {
    let component = new Init(options)
    await component.created()
    component.stores()
    component.setters()
    component.handlers()
    component.params()
    const container = contain(options, nodeElement)
    container.unmount = async () => {
      container.remove()
      await component.unmounted()
    }
    component.props(props, container)
    component.methods(container)
    component.proxies()
    await component.nodes(container)
    await component.mounted()
    return { options, context: component.context}
  }
}
export default mount