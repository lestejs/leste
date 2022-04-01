import { dipprox } from '../utils/dipprox'
import extract from '../utils/extract'

export default class Store {
  constructor(options) {
    this.proxies = options.proxies
    this.methods = options.methods
    this.name = options.name
    this.extract = extract
    const evt = document.createEvent('Event')
    evt.initEvent(options.name, true, true)
    this.proxy = dipprox(extract(options.proxies), {
      set(target, path, value) {
        evt.detail = { path, value: extract(value) }
        document.dispatchEvent(evt)
      },
      deleteProperty(target, path) {
        console.log('delete', path.join('_'))
      }
    })
  }
}

