import errors from './errors'
import { Init } from './init'

class Leste {
  constructor(root) {
    this.root = root
    this.getElement = null
  }
  contain(entry, nodeElement, iterate) {
    if (entry.template) {
      nodeElement.insertAdjacentHTML("beforeEnd", entry.template)
      return iterate ? nodeElement.lastChild : nodeElement
    } else if (entry.fragments) {
      const container = entry.layout ? this.getElement() : nodeElement
      for (const [key, fr] of Object.entries(entry.fragments)) {
        const place = container.querySelector(`.${key}`)
        place.innerHTML = fr
      }
      return container
    }
  }
  async mount(nodeElement, entry, props = {}, iterate) {
    let instance = {}
    if (entry) {
      if (entry.layout && !this.getElement) {
        this.getElement = () => nodeElement
        await this.mount(nodeElement, entry.layout)
      }
      instance.component = new Init(entry, this.mount.bind(this), this.root, errors)
      const component = instance.component
      props.unmount = async () => {
        instance = null
        nodeElement.innerHTML = ""
        this.getElement = null
        await component.unmounted()
      }
      props.routeUpdate = entry.routeUpdate?.bind(component.context)
      component.context.navigate = props?.navigate
      await component.created()
      component.stores()
      component.setters()
      component.handlers()
      component.params()
      const container = this.contain(entry, nodeElement, iterate)
      container.unmount = async () => {
        container.remove()
        await component.unmounted()
      }
      component.props(props, container)
      component.methods(container)
      component.proxies()
      await component.loaded()
      await component.nodes(container)
      await component.mounted()
    }
  }
}


export default Leste