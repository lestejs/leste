import './index.pcss'
import common from '../../layouts/common'
import navigation from '../../components/forms/navigation'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'
import sidebar from '~/ui/sidebar'
import api from 'bundle-text:./api.md'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

function scrollTo(offset, callback) {
  const fixedOffset = offset.toFixed();
  const onScroll = function () {
    if (window.pageYOffset.toFixed() === fixedOffset) {
      window.removeEventListener('scroll', onScroll)
      callback()
    }
  }

  window.addEventListener('scroll', onScroll)
  onScroll()
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  })
}


export default {
  fragments: {
    wrapper: `
    <div class="sidebar"></div>
    <div class="l-side-content">
        <div class="content"></div>
    </div>`
  },
  layout: common,
  proxies: {
    index: null
  },
  nodes() {
    return {
      sidebar: {
        component: {
          type: 'integrate',
          src: sidebar,
          params: {
            close: iconGenerate('0000100010001000001000001'),
            width: '16rem'
          },
          proxies: {
            open: true,
            start: true
          },
          methods: {
            close: this.method.close
          }
        }
      },
      content: {
        innerHTML:() => {
         // return marked.parse(api)
        }
      }
    }
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
      langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    this.node.content.innerHTML = marked.parse(api, 'js') // marked.parse(api, 'javascript')
    const headers = this.node.content.querySelectorAll('h1,h2,h3')
    const check = (event) => {
      const top = window.scrollY
      const redLine = this.node.root.clientHeight
      const lineTop = redLine
      const lineBottom = redLine
      for (let index = 0;index < headers.length;index++) {
        const header = headers[index]
        if (header.tagName === "H2" || header.tagName === "H3") {
          const rect = header.getBoundingClientRect()
          if (rect.top > 100 || rect.bottom > 100) {
            console.log(redLine, rect.top, rect.bottom)
            this.proxy.index = index
            break
          }
        }
      }
    }
    window.addEventListener('scroll', check)
    this.node.sidebar.integrate({
      src: navigation,
      params: {
        headers
      },
      proxies: {
        index: () => this.proxy.index
      },
      methods: {
        active: (index) => {
          this.proxy.index = index
          // window.scrollTo({ top: headers[index].offsetTop, behavior: 'smooth'})
          window.removeEventListener('scroll', check)

          scrollTo(headers[index].offsetTop, () => window.addEventListener('scroll', check))
        }
      }
    })
  }
}