import logo from 'url:./leste.svg'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'

export default {
  template: `
    <header class="header fx">
      <img src="" class="logo">
      <div class="sideNav"></div>
      <nav class="fx">
        <a href="/docs">Guide</a>
        <a href="/docs">Tutorial</a>
        <a href="/docs">Projects</a>
        <a href="/docs">Stories</a>
        <a href="/docs">About</a>
        <a href="/docs">Shop</a>
        <div>English</div>
      </nav>
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
      logo: {
        src: logo // return new URL('./leste-logo-mini.png', import.meta.url) as any as string
      },
      sideNav: {
        component: {
          src: btn,
          params: {
            icon: iconGenerate('1111100000111110000011100')
          },
          methods: {
            action: () => {
              this.node.root.classList.add('open')
            }
          }
        }
      }
    }
  }
}