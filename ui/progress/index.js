export default {
  template: `
    <div class="l-progress">
        <div class="track">
          <div class="line"></div>
        </div>
        <div class="label"></div>
    </div>`,
  props: {
    proxies: {
      value: {
        default: 0
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
    value(v) {
      this.delay(() => {
        this.node.line.style.width = v + '%'
      }, 1000)
    }
  },
  nodes() {
    return {
      label: {
        textContent: () => this.param.label || this.proxy.label
      },
      line: {
        style: () => {
          return { width: '0%' }
        }
      }
    }
  }
}