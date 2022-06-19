import { dipprox } from '../leste/utils/dipprox'
import replica from '../leste/utils/release'

export default class Store {
  constructor(options) {
    this.proxies = options.proxies
    this.methods = options.methods
    this.name = options.name
    this.release = replica
    const evt = document.createEvent('Event')
    evt.initEvent(options.name, true, true)
    this.proxy = dipprox(replica(options.proxies), {
      set(target, path, value) {
        evt.detail = { path, value: replica(value) }
        document.dispatchEvent(evt)
      },
      deleteProperty(target, path) {
        console.log('delete', path.join('_'))
      }
    })
  }
}

