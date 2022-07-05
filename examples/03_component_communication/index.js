import input from './input/index.js'

export default {
  template: `<div class="input"></div>
    <div class="title"></div>
    <button class="clear">clear</button>
    <button class="toggle">toggle</button>`,
  proxies: {
    text: ''
  },
  nodes() {
    return {
      input: {
        component: {
          src: input,
          params: {
            placeholder: 'Enter'
          },
          proxies: {
            value: () => this.proxy.text,
            disabled: true
          },
          methods: {
            change: (v) => this.proxy.text = v
          }
        }
      },
      title: {
        textContent: () => this.proxy.text.toUpperCase()
      },
      clear: {
        onclick: () => this.proxy.text = ''
      },
      toggle: {
        onclick: () => this.node.input.method.toggle()
      }
    }
  }
}
