export default {
  template: `
    <div class="tabs">
      <button name="first">first</button>
      <button name="second">second</button>
    </div>
    <div class="first"></div>
    <div class="second"></div>`,
  sources: {
    first: () => import("./component/first/index.js"),
    second: () => import("./component/second/index.js")
  },
  proxies: {
    tab: null
  },
  setters: {
    tab(v) {
      if (this.proxy.tab === v || v === null) return // undefined
      return v
    }
  },
  nodes() {
    return {
      tabs: {
        onclick: (event) => this.proxy.tab = event.target.getAttribute('name')
      },
      first: {
        component: {
          src: this.source.first(),
          induce: () => this.proxy.tab === 'first'
        }
      },
      second: {
        component: {
          src: this.source.second(),
          induce: () => this.proxy.tab === 'second'
        }
      }
    }
  }
}