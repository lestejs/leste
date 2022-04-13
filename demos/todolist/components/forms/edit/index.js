import cards from '../../../store/cards'
import btn from '~/ui/button'
import progress from '~/ui/progress'
import { iconGenerate } from '~/ui/icon'
import elements from './elements'

export default {
  fragments: {
    'group-first': `
      <div class="desc">Список полей для заполнения</div>
      <div class="elements"></div>
      <div class="progress"></div>
      <div class="save dark-btn late"></div>`,
    'group-second': `
      <div class="element"></div>
      <div class="bar-list"></div>`
  },
  params: {
    elements,
  },
  sources: {
    upload: import('~/ui/upload'),
    input: import('~/ui/input')
  },
  stores: {
    cards
  },
  props: {
    proxies: {
      cards: {
        default: []
      },
    },
    params: {
      type: {},
      card: {
        default: {}
      }
    },
    methods: {
      ready: {},
      change: {},
      set: {},
      add: {},
      edit: {},
      remove: {},
      close: {}
    }
  },
  proxies: {
    index: null,
    progress: 0
  },
  nodes() {
    return {
      'progress': {
        component: {
          src: progress,
          type: 'inure',
          precept: () => this.param.type === 'add',
          params: {
            label: 'Заполнение формы'
          },
          proxies: {
            value: () => {
              return (this.proxy.progress * 100) / this.param.elements[this.param.type].length
            }
          }
        }
      },
      'bar-list': {
        component: {
          src: btn,
          params: {
            name: 'list',
            label: 'Вернуться к списку',
            icon: () => iconGenerate('1110100000111010000011101')
          },
          methods: {
            action: this.method.list
          }
        }
      },
      'elements': {
        component: {
          src: btn,
          type: 'iterate',
          data: this.param.elements[this.param.type],
          params: {
            label: (el) => el.label,
            name: (el, index) => index
          },
          proxies: {
            active: (el, index) => {
              return index === this.proxy.index
            }
          },
          methods: {
            action: this.method.element
          }
        }
      },
      'element': {
        component: {
          type: 'advance'
        }
      },
      'save': {
        component: {
          src: btn,
          params: {
            label: () => 'save',
            name: () => 'save',
            icon: () => iconGenerate('1111110001111111111111111')
          },
          methods: {
            action: this.method.save
          }
        }
      }
    }
  },
  methods: {
    action(name, value) {
      if (this.param.type === 'add') {
        if (this.param.card[name]) {
          !value && this.proxy.progress--
        } else {
          value && this.proxy.progress++
        }
      }
      this.param.card[name] = value
    },
    element(name) {
      this.proxy.index = name
      this.node.element.power('hide', false, this.proxy.index)
      this.method.change(false)
    },
    save() {
      this.method[this.param.type](this.param.card)
      this.method.close()
    },
    list() {
      this.proxy.index !== null && this.node.element.power('hide', true, this.proxy.index)
      this.method.change(true)
    }
  },
  async mounted() {
    if (this.param.type in this.param.elements) {
      for await (const element of this.param.elements[this.param.type]) {
        await this.node.element.create({
          src: this.source[element.type],
          name: element.name,
          params: {
            name: element.name,
            label: element.label
          },
          proxies: {
            hide: true,
            value: this.param.card[element.name],
          },
          methods: {
            action: this.method.action
          }
        })
      }
      await setTimeout(() => {
        this.method.ready()
      }, 500)
    }
  }
}