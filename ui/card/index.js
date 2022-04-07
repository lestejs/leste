import btn from '~/ui/button'
import image from '~/ui/image'

export default {
  template: `
    <a class="l-card" href="/product/1" link>
        <div class="l-card-btn fx">
          <div class="btn-first"></div>
          <div class="btn-second"></div>
        </div>
        <div class="l-card-image"></div>
        <div class="wr-label">
          <div class="background"> 
          </div>
          <div class="label fx"><div>
            <h4 class="title"></h4>
            <p class="desc"></p>
            </div>
              <p><span class="price"></span></p>
            </div>
        </div>
    </a>`,
  props: {
    params: {
      buttons: {},
    },
    proxies: {
      card: {}
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      'l-card': {
        classes: {
          selected: () => this.proxy.card.selected
        }
      },
      'wr-label': {
        onclick: () => {
          event.preventDefault()
          event.stopPropagation()
          this.method.actionCard('select')
        }
      },
      'btn-first': {
        onclick: (event) => {
          event.preventDefault()
          event.stopPropagation()
        },
        component: {
          src: btn,
          params: {
            name: this.param.buttons.first.name,
            icon: this.param.buttons.first.icon,
          },
          methods: {
            action: this.method.actionCard
          }
        }
      },
      'btn-second': {
        onclick: (event) => {
          event.preventDefault()
          event.stopPropagation()
        },
        component: {
          src: btn,
          params: {
            name: this.param.buttons.second.name,
            icon: this.param.buttons.second.icon,
          },
          methods: {
            action: this.method.actionCard
          }
        }
      },
      background: {
        style: () => {
          return {
            'background-image': `url(${this.proxy.card.url})`
          }
        }
      },
      title: {
        textContent: () => this.proxy.card.title,
      },
      desc: {
        textContent: () => this.proxy.card.desc,
      },
      'l-card-image': {
        component: {
          src: image,
          proxies: {
            url: () => this.proxy.card.url,
            alt: () => this.proxy.card.title
          }
        }
      }
    }
  },
  methods: {
    actionCard(name) {
      this.method.action(name, this.proxy.card)
    }
  }
}