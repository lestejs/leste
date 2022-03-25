import { dipprox } from '../init/dipprox'

export default class Mediator {
  constructor(options) {
    this.proxies = options.proxies
    this.methods = options.methods
    this.props = {}
    this.name = options.name
    const evt = document.createEvent('Event')
    evt.initEvent(options.name, true, true)
    this.proxy = dipprox({ ...options.proxies }, {
      set(target, path, value) {
        evt.detail = { path, value }
        document.dispatchEvent(evt)
      },
      deleteProperty(target, path) {
        console.log('delete', path.join('_'))
      }
    })
  }
}

