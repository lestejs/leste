// import './index.pcss'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import withSidebar from '../../layouts/withSidebar'

export default {
  fragments: {
    content: `<div class="md">none</div>`
  },
  layout: withSidebar,
  sources: {
    component: () => import('bundle-text:./files/base/component.md')
  },
  nodes() {
    return {
      md: {}
    }
  },
  async mounted() {
    console.log(this.router.param.id)
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
      langPrefix: 'hljs language-',
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    if (this.router.param.id in this.source) {
      const data = await this.source[this.router.param.id]()
      this.node.md.innerHTML = marked.parse(data, 'js')
    }
  }
}