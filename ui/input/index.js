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
  handlers: {
    value() {
      const el = this.node.field
      if (typeof window.getSelection != "undefined"
        && typeof document.createRange != "undefined") {
        const range = document.createRange()
        range.selectNodeContents(el)
        range.collapse(false)
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      } else if (typeof document.body.createTextRange != "undefined") {
        const textRange = document.body.createTextRange()
        textRange.moveToElementText(el)
        textRange.collapse(false)
        textRange.select()
      }
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