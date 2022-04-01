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
      <div class="add dark-btn"></div>
      <div class="l-cards"></div>
    </div>`
  },
  layout: common,
  sources: {
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
      set: {}
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
            icon: () => iconGenerate(this.param.btnAdd.icon),
          },
          proxies: {
            loading: false
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
            button: 'edit',
            icon: () => iconGenerate('1100110010101001000111111')
          },
          proxies: {
            card: (element) => element
          },
          methods: {
            actionCard: this.method.actionCard
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
      this.node.add.power('loading', false)
    },
    change(v) {
      this.node.sidebar.power('start', v)
    },
    open(card) {
      !card && this.node.add.power('loading', true)
      this.node.sidebar.integrate({
        src: this.source.edit,
        params: {
          type:() => card ? 'edit' : 'add',
          card: card
        },
        methods: {
          ready: this.method.ready,
          change: this.method.change,
          close: this.method.close
        }
      })
    },
    actionCard(name, card) {
      this.method.open(card)
    },
    close() {
      this.node.sidebar.power('open', false)
      this.method.change(true)
    },
  },
  mounted() {
    this.method.set()
  }
}