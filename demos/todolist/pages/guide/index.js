import './index.pcss'
import common from '../../layouts/common'
import navigation from '../../components/forms/navigation'
import { iconGenerate } from '~/ui/icon'
import sidebar from '~/ui/sidebar'
import api from 'bundle-text:./api.md'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default {
  fragments: {
    wrapper: `
    <div class="sidebar"></div>
    <div class="l-side-content">
        <div class="content"></div>
    </div>`
  },
  layout: common,
  params:{
      headers: null,
      test: [0]
  },
  proxies: {
    index: null
  },
  nodes() {
    return {
      sidebar: {
        component: {
          // type: 'integrate',
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
      content: {}
    }
  },
  methods: {
    check() {
      for (let index = 0;index < this.param.headers.length;index++) {
        const header = this.param.headers[index]
        if (header.tagName === "H2" || header.tagName === "H3") {
          const rect = header.getBoundingClientRect()
          if (rect.top > 0 || rect.bottom > 0) {
            this.proxy.index = index
            break
          }
        }
      }
    }
  },
  leave() {
    $root.removeEventListener('scroll', this.method.check)
  },
  mounted() {
    this.param.test.push(0)
    console.log(this.param.test)
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
    this.param.headers = this.node.content.querySelectorAll('h1,h2,h3')
    $root.addEventListener('scroll', this.method.check)
    this.node.sidebar.integrate({
      src: navigation,
      params: {
        headers: this.param.headers
      },
      proxies: {
        index: () => this.proxy.index || 0
      },
      methods: {
        active: (index) => {
          this.proxy.index = index
          $root.removeEventListener('scroll', this.method.check)
          this.delay(() => $root.addEventListener('scroll', this.method.check), 1000)
          $root.scrollTo({
            top: this.param.headers[index].offsetTop,
            behavior: 'smooth'
          })
        }
      }
    })
  }
}