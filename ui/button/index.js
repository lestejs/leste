export default {
  template: `
  <button class="l-button fx-b br0">
    <span class="icon"></span>
    <span class="l-preload"></span>
    <span class="label"></span>
  </button>`,
  props: {
    proxies: {
      color: {},
      label: {},
      active: {},
      hide: {},
      loading: {}
    },
    params: {
      name: {},
      label: {},
      icon: {
        default: ''
      }
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      'l-button': {
        classes: {
          hide: () => this.proxy.hide,
          active: () => this.proxy.active
        },
        style: () => {
          return {
            background: this.proxy.color
          }
        },
        onclick: () => {
          this.method.action(this.param.name)
        }
      },
      'l-preload': {
        classes: {
          'hide': () => !this.proxy.loading
        },
      },
      'icon': {
        classes: {
          'hide': () => this.proxy.loading
        },
        innerHTML: () => this.param.icon
      },
      'label': {
        textContent: () => this.param.label || this.proxy.label
      }
    }
  },
  methods: {
  }
}