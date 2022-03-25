import common from '../../layouts/common'
import card from '~/ui/card'
import cards from '../../store/cards'
import sidebar from '~/ui/sidebar'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'

export default {
  fragments: {
    wrapper: `
    <div class="sidebar"></div>
    <div class="content">
      <div class="add fill-btn"></div>
      <div class="l-cards"></div>
    </div>`
  },
  layout: common,
  sources: {
    // add: import(`../../components/forms/add`),
    edit: import(`../../components/forms/edit`)
  },
  params: {
    btnAdd: {
      type: 'add',
      label: 'add',
      icon: '0010000100111110010000100'
    }
  },
  proxies: {
    open: false
  },
  stores: {
    cards
  },
  props: {
    proxies: {
      cards: {},
    },
    methods: {
      setCards: {},
      saveCards: {},
      remove: {}
    }
  },
  nodes() {
    return {
      add: {
        component: {
          src: btn,
          params: {
            name: this.param.btnAdd.type,
            label: this.param.btnAdd.label,
            icon: () => iconGenerate(this.param.btnAdd.icon)
          },
          methods: {
            action: this.method.add
          }
        }
      },
      'l-cards': {
        component: {
          type: 'iterate',
          data: this.proxy.cards,
          src: card,
          params: {
            card: (element) => element
          }
        }
      },
      sidebar: {
        component: {
          type: 'integrate',
          src: sidebar,
          proxies: {
            open: false,
            start: true
          },
          methods: {
            close: this.method.close
          }
        }
      }
    }
  },
  methods: {
    ready() {
      this.node.sidebar.power('open', true)
    },
    change(v) {
      this.node.sidebar.power('start', v)
    },
    add() {
      this.node.sidebar.integrate({
        src: this.source.edit,
        params: {
          type: 'add'
        },
        methods: {
          ready: this.method.ready,
          change: this.method.change
        }
      })
    },
    close() {
      this.node.sidebar.power('open', false)
      this.method.change(true)
    },
  },
  mounted() {
  }
}