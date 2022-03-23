import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'

export default {
  template: `
    <div class="settings container fx">
      <div class="navigation w-side">
      </div>
      <div class="content">
      </div>
    </div>`,
  props: {
    params: {
      navigation: {}
    },
    proxies: {
      nav: {}
    },
    methods: {
      select: {}
    }
  },
  nodes() {
    return {
      navigation: {
        component: {
          src: btn,
          type: 'iterate',
          data: this.param.navigation,
          params: {
            label: (element) => element.label,
            name: (element) => element.type,
            icon: (element) => iconGenerate(element.icon)
          },
          proxies: {
            active: (element) => this.proxy.nav === element.type
          },
          methods: {
            action: this.method.action
          }
        }
      },
      content: {
      }
    }
  },
  methods: {
    action(type) {
      this.proxy.nav = type
      this.method.select(type)
    },
  },
  mounted() {
  }
}