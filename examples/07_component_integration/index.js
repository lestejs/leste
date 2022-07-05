import modal from './component/modal/index.js'

export default {
  template: `
    <div class="modalFirst"></div>
    <div class="modalSecond"></div>
    <button class="first">modal first</button>
    <button class="second">modal second</button>`,
  proxies: {
    count: 0
  },
  params: {
    intervalId: null
  },
  sources: {
    first: () => import("./component/first/index.js"),
    second: () => import("./component/second/index.js")
  },
  nodes() {
    return {
      modalFirst: {
        component: {
          src: modal,
          proxies: {
            hide: true
          }
        }
      },
      modalSecond: {
        component: {
          src: modal,
          proxies: {
            hide: true
          },
          methods: {
            close: () => {
              this.proxy.count = 0
              clearInterval(this.param.intervalId)
            }
          }
        }
      },
      first: {
        onclick: () => {
          this.node.modalFirst.proxy.hide = false
          this.node.modalFirst.integrate({
            src: this.source.first(),
          })
        }
      },
      second: {
        onclick: () => {
          if (this.node.modalSecond.proxy.hide) {
            this.node.modalSecond.proxy.hide = false
            this.node.modalSecond.integrate({
              src: this.source.second(),
              proxies: {
                timer: () => this.proxy.count
              }
            })
            this.param.intervalId = setInterval(() => this.proxy.count++, 1000)
          }
        }
      }
    }
  }
}