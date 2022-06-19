import './index.pcss'
import common from '../../layouts/common'
import card from '~/ui/card'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'
import c1 from 'url:./products/c1.png'
import c2 from 'url:./products/c2.png'
import replicate from '~/leste/utils/replicate'

export default {
  fragments: {
    wrapper: `
    <div class="content">
      <div class="filters fx"></div>
      <div class="l-cards"></div>
    </div>`
  },
  layout: common,
  params: {
    recipes: []
  },
  proxies: {
    isFilter: '',
    cards: [{
        id: 'fgr64t43',
        url: c1,
        color: "#ffc428",
        title: 'Rancher',
        desc: 'Big Shoes',
        price: '$100',
        category: 'constructor',
        favorite: false
      },
      {
        id: 'fgr64t45',
        url: c2,
        color: "#ffc428",
        title: 'Patrol',
        desc: 'Big Shoes',
        price: '$100',
        category: 'constructor',
        favorite: true
      },
      {
        id: 'fgr64t47',
        url: 'https://worldclassmag.com/files/nodus_items/0004/2216/attaches/fuji.jpg',
        title: 'links2',
        desc: 'Big Shoes',
        price: '$100',
        category: 'T-shirt',
        favorite: false
      }],
  },
  nodes() {
    return {
      filters: {
        component: {
          src: btn,
          data: [{
            name: 'favorites',
            label: 'favorites'
          },{
            name: 'constructor',
            label: 'Наборы'
          },{
            name: 'T-shirt',
            label: 'Футоболки'
          }, {
              name: 'cup',
              label: 'Кружки'
          }],
          params: {
            name: (el) => el.name,
            label: (el) => el.label
          },
          proxies: {
            active: (el) => el.name === this.proxy.isFilter
          },
          methods: {
            action: this.method.action
          }
        }
      },
      'l-cards': {
        component: {
          data: this.proxy.cards,
          src: card,
          params: {
            buttons: {
                first: {
                  name: 'favorite',
                  label: 'favorite',
                  icon: iconGenerate('1010101110001000101001010')
                }
              }
          },
          proxies: {
            card: (element) => {
              return element
            },
            active: (element) => element.favorite
          },
          methods: {
            action: (name, card) => {
              const index = this.proxy.cards.findIndex(c => c.id === card.id)
              if (index !== -1) {
                card.favorite = !card.favorite
                this.proxy.cards[index] = card
                this.proxy.replica[index] = card
              }
            }
          }
        }
      }
    }
  },
  mounted() {
    this.param.replica = replicate(this.proxy.cards)
    console.log(this.reactiveMap)
  },
  methods: {
    action(name) {
      if (this.proxy.isFilter === name) {
        this.proxy.isFilter = ''
        this.proxy.cards = this.param.replica
        console.log(this.reactiveMap)
      } else {
        this.proxy.isFilter = name
        // if (name === 'favorites') {
        //   this.proxy.cards = this.proxy.replica.filter(el => el.favorite)
        // } else {
        //   this.proxy.cards = this.proxy.replica.filter(el => el.category === name)
        // }
      }
    }
  }
}