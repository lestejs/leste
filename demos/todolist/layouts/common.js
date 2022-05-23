import logo from 'url:./leste.svg'
import btn from '~/ui/button'
import dropdown from '~/ui/dropdown'
import { iconGenerate } from '~/ui/icon'
import menu from './menu.js'

export default {
  template: `
    <header class="header">
      <a href="/" link><img src="" class="logo"></a>
      <div class="sideNav"></div>
      <nav class="nav"></nav>
      <div class="wr-menu">
        <div class="menuNav"></div>
        <div class="menu-dropdown"></div>
      </div>
      <div class="wr-lang">
        <div class="lang"></div>
        <div class="lang-dropdown"></div>
      </div>
    </header>
    <div class="wrapper"></div>
    <footer></footer>`,
  nodes() {
    return {
      header: {},
      logo: {
        src: logo // return new URL('./leste-logo-mini.png', import.meta.url) as any as string
      },
      nav: {
        innerHTML: menu.reduce((html, a) => a.nav ? html + `<a href="${a.url}" link>${a.name}</a>` : html, '')
      },
      'menu-dropdown': {
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
      'lang-dropdown': {
        component: {
          src: dropdown,
          proxies: {
            toggle: true,
          },
          params: {
            triggerSelector: '.wr-lang',
            content: ['English', 'Русский', 'Français'].reduce((html, ln) => html + `
            <div>
            <h3>${ln}</h3>
            <span><a>Contribute</a></span>
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
              document.body.classList.add('open')
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
              this.node['menu-dropdown'].proxy.toggle = true
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
            label: 'Languages'
          },
          methods: {
            action: () => {
              this.node['lang-dropdown'].proxy.toggle = true
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