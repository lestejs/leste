import { createDeepProxy } from '../component/proxied'

export default class Mediator {
  constructor(options) {
    this.proxies = options.proxies
    this.methods = options.methods
    this.props = {}
    this.name = options.name
    this.evt = document.createEvent('Event')
    this.evt.initEvent(options.name, true, true)
    const self = this
    this.proxy = createDeepProxy({ ...options.proxies }, {
      set(target, path, value) {
        self.evt.detail = { path, value }
        document.dispatchEvent(self.evt)
      },
      get(target, path) {
        console.log('get', path.join('_'))
      },
      deleteProperty(target, path) {
        console.log('delete', path.join('_'))
      }
    })
  }
}

