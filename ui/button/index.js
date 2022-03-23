export default {
  template: `
  <button class="l-button fx fx-b br0">
    <span class="icon"></span>
    <span class="label"></span>
  </button>`,
  props: {
    proxies: {
      color: {},
      label: {},
      active: {},
      hide: {}
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
      'icon': {
        innerHTML: () => this.param.icon
      },
      'label': {
        textContent: () => this.param.label || this.proxy.label
      }
    }
  },
  methods: {
  },
}