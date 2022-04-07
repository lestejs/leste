import { dipprox } from '../utils/dipprox'
import release from '../utils/release'

export default class Store {
  constructor(options) {
    this.proxies = options.proxies
    this.methods = options.methods
    this.name = options.name
    this.release = release
    const evt = document.createEvent('Event')
    evt.initEvent(options.name, true, true)
    this.proxy = dipprox(release(options.proxies), {
      set(target, path, value) {
        evt.detail = { path, value: release(value) }
        document.dispatchEvent(evt)
      },
      deleteProperty(target, path) {
        console.log('delete', path.join('_'))
      }
    })
  }
}

