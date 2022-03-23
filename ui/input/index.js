export default {
  template: `
    <div class="l-input">
        <div class="label"></div>
        <div class="field" contenteditable="true"></div>
    </div>`,
  props: {
    proxies: {
      hide: {},
      value: {
        default: ''
      }
    },
    params: {
      name: {},
      label: {}
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      'l-input': {
        classes: {
          hide: () => this.proxy.hide,
          error: () => this.proxy.value === ''
        }
      },
      label: {
        textContent: () => this.param.label
      },
      field: {
        // innerText: this.$param.element.options.value,
        textContent: () => this.proxy.value,
        oninput: (event) => {
          // const keycode = event.charCode || event.keyCode
          // if (keycode === 13) event.preventDefault()
          const value = event.target.textContent
          this.method.action(this.param.name, value)
          this.proxy.value = value
        }
      }
    }
  },
  methods: {
    clear() {
      this.proxy.value = ''
    }
  }
}