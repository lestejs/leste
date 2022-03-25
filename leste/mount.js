import { Init } from './init'
function contain(entry, nodeElement, getElement) {
  if (entry.template) {
    const container = document.createElement('component') // this.init.tag ||
    nodeElement.appendChild(container)
    container.innerHTML = entry.template
    return container
  } else if (entry.fragments) {
    const container = getElement()
    for (const [key, fr] of Object.entries(entry.fragments)) {
      const place = container.querySelector(`.${key}`)
      place.innerHTML = fr
    }
    return container
  }
}
let getElement = null
async function mount(nodeElement, entry, props = {}) {
  if (entry) {
    if (entry.layout && !getElement) {
      getElement = () => nodeElement
      await mount(nodeElement, entry.layout)
    }
    const component = new Init(entry)
    await component.created()
    component.stores()
    component.setters()
    component.handlers()
    component.params()
    component.methods()
    const container = contain(entry, nodeElement, getElement)
    if (container.power) {
      Object.assign(container.power, component.props(props))
    } else {
      container.power = component.props(props)
    }
    component.proxies()
    await component.loaded()
    await component.nodes(container)
    await component.mounted()
  }
}
export { mount }
