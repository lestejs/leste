export default {
  template: `
  <div class="l-dropdown">
    <div class="l-window"></div>
  </div>`,
  props: {
    proxies: {
      toggle: {},
      hide: {
        default: true
      },
    },
    params: {
      triggerSelector: {
        required: true
      },
      content: {}
    }
  },
  handlers: {
    toggle() {
      this.proxy.hide = !this.proxy.hide
    },
    hide(v) {
      v ? document.body.classList.remove('l-no-scroll') : document.body.classList.add('l-no-scroll')
    }
  },
  nodes() {
    return {
      'l-dropdown': {
        classes: {
          hide: () => this.proxy.hide
        }
      },
      'l-window': {
        innerHTML: this.param.content
      }
    }
  },
  methods: {
  },
  mounted() {
    const trigger = document.body.querySelector(this.param.triggerSelector)
    trigger.classList.add('l-relative')
    document.body.addEventListener('click', (event) => {
      if (!event.target.closest('.l-dropdown') && !event.target.closest(this.param.triggerSelector)) this.proxy.hide = true
    }, true)
  }
}