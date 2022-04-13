import './index.pcss'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'

export default {
  template: `
    <div class="l-sidebar w-side">
      <div class="close"></div>
      <div class="group-first shift">
      </div>
      <div class="group-second shift">
      </div>
    </div>`,
  params: {
    btnClose: {
      type: 'close',
      label: '',
      icon: '1000101010001000101010001'
    }
  },
  props: {
    proxies: {
      open: {
        default: false
      },
      start: {
      },
      mini: {}
    },
    methods: {
      close: {}
    }
  },
  handlers:{
    open(v) {
      v ? this.node.root.classList.add('open') : this.node.root.classList.remove('open')
    }
  },
  nodes() {
    return {
      close: {
        component: {
          src: btn,
          params: {
            name: () => this.param.btnClose.type,
            icon: () => iconGenerate(this.param.btnClose.icon)
          },
          methods: {
            action: this.method.close
          }
        }
      },
      'l-sidebar': {
        classes: {
          mini: () => this.proxy.mini,
        }
      },
      'group-first': {
        classes: {
          hide: () => !this.proxy.start,
          'shift-next': () => this.proxy.start
        },
      },
      'group-second': {
        classes: {
          hide: () => this.proxy.start,
          'shift-back': () => !this.proxy.start
        }
      }
    }
  },
  mounted() {
  }
}