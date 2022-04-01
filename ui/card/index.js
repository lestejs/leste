import btn from '~/ui/button'
import image from '~/ui/image'

export default {
  template: `
    <div class="l-card">
        <div class="l-card-btn"></div>
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
    </div>`,
  props: {
    params: {
      card: {},
      button: {},
      icon: {}
    },
    proxies: {
      card: {}
    },
    methods: {
      actionCard: {}
    }
  },
  nodes() {
    return {
      'l-card-btn': {
        component: {
          src: btn,
          params: {
            name: this.param.button,
            icon: () => this.param.icon,
          },
          methods: {
            action: this.method.action
          }
        }
      },
      background: {
        style: () => {
          return {
            'background-image': `url(${this.param.card.url})`
          }
        }
      },
      title: {
        textContent: () => this.proxy.card.title || this.param.card.title,
      },
      desc: {
        textContent: () => this.param.card.desc,
      },
      'l-card-image': {
        component: {
          src: image,
          params: {
            url: this.param.card.url,
            alt: this.param.card.title,
          }
        }
      }
    }
  },
  methods: {
    action(name) {
      this.method.actionCard(name, this.param.card)
    }
  }
}