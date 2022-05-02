import logo from 'url:./leste.svg'
import btn from '~/ui/button'
import dropdown from '~/ui/dropdown'
import { iconGenerate } from '~/ui/icon'
import menu from './menu.js'

export default {
  template: `
    <header class="header">
      <img src="" class="logo">
      <div class="sideNav"></div>
      <nav class="nav"></nav>
      <div class="wr-menu">
        <div class="menuNav"></div>
        <div class="dropdown"></div>
      </div>
      <div class="lang"></div>
    </header>
    <div class="wrapper"></div>
    <footer></footer>`,
  setters: {
  },
  params: {
  },
  proxies: {
  },
  sources: {
  },
  nodes() {
    return {
      header: {},
      logo: {
        src: logo // return new URL('./leste-logo-mini.png', import.meta.url) as any as string
      },
      nav: {
        innerHTML: menu.reduce((html, a) => a.nav ? html + `<a href="${a.url}">${a.name}</a>` : html, '')
      },
      dropdown: {
        component: {
          src: dropdown,
          proxies: {
            toggle: true,
          },
          params: {
            triggerSelector: '.wr-menu',
            content: menu.reduce((html, a) => html + `
            <div>
            <h3><a href="${a.url}">${a.name}</a></h3>
            <span>${a.desc}</span>
            </div>
            `, '')
          }
        }
      },
      sideNav: {
        component: {
          src: btn,
          params: {
            icon: iconGenerate('1111100000111110000011111')
          },
          methods: {
            action: () => {
              this.node.root.classList.add('open')
            }
          }
        }
      },
      menuNav: {
        component: {
          src: btn,
          params: {
            icon: iconGenerate('0000000000101010000000000')
          },
          methods: {
            action: () => {
              // const y = this.node.menuNav.getBoundingClientRect().bottom
              // const x = document.body.clientWidth - this.node.menuNav.getBoundingClientRect().right
              // this.node.dropdown.power('cord', { x, y })
              this.node.dropdown.proxy.toggle = true
            }
          }
        }
      },
      lang: {
        component: {
          src: btn,
          params: {
            icon: iconGenerate('0100011111001010011100101')
          },
          proxies: {
            label: 'English'
          },
          methods: {
            action: () => {
              // this.node.root.classList.add('open')
            }
          }
        }
      }
    }
  },
  methods: {
  },
  mounted() {
  }
}