const li = {
  template: `
      <li class="li">
        <span class="name"></span>
        <button class="remove">X</button>
      </li>`,
  props: {
    params: {
      index: {}
    },
    proxies: {
      name: {}
    },
    methods: {
      remove: {}
    }
  },
  nodes() {
    return {
      name: {
        textContent: () => this.proxy.name
      },
      remove: {
        onclick: () => this.method.remove(this.param.index)
      }
    }
  }
}

const component = {
  template: `
      <input class="input"/>
      <button class="add">add</button>
      <ul class="list"></ul>
      <div>Total: <span class="count"></span></div>`,
  proxies: {
    list: ['red', 'green', 'blue']
  },
  nodes() {
    return {
      list: {
        component: {
          src: li,
          iterate: this.proxy.list,
          params: {
            index: (el, index) => index
          },
          proxies: {
            name: (el) => el
          },
          methods: {
            remove: (index) => this.proxy.list.splice(index, 1)
          }
        }
      },
      input: {
        onkeyup: (event) => event.code === 'Enter' && this.method.add()
      },
      add: {
        onclick: () => this.method.add()
      },
      count: {
        textContent: () => this.proxy.list.length
      }
    }
  },
  methods: {
    add() {
      if (this.node.input.value) {
        this.proxy.list.unshift(this.node.input.value)
        this.node.input.value = ''
      }
    }
  }
}