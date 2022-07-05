import CodeMirror from 'codemirror'
import './codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import { mount } from '~/leste'
import html from 'bundle-text:./iframe.txt'

export default {
  template: `
      <div class="example fx">
        <div class="code"></div>
        <iframe class="iframe" srcdoc sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" frameborder="0">
       </iframe>
      </div>`,
  props: {
    params: {
      file: {
        default: 'console.log(leste)'
      }
    }
  },
  nodes() {
    return {
      code: {},
      iframe: {
        srcdoc: html
      }
    }
  },
  mounted() {
    this.node.iframe.onload = () => {
      this._editor = CodeMirror(this.node.code, {
        lineNumbers: true,
        lineWrapping: true,
        indentWithTabs: false,
        tabSize: 2,
        value: this.param.file,
        mode: {
          name: "javascript",
          json: true,
          statementIndent: 2
        }
      })
      this.node.iframe.contentWindow.mount = mount
      this.method.updFrame()
      this._editor.on('changes', () => this.method.updFrame())
    }
  },
  methods: {
    updFrame() {
      this.node.iframe.contentWindow.document.body.innerHTML = '<div id="root"></div>'
      this.node.iframe.contentWindow.eval(this._editor.getValue())
    }
  }
}