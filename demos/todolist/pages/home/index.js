import './index.pcss'
import common from '../../layouts/common'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'
import CodeMirror from 'codemirror'
import './codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import { mount } from '~/leste'
import tunerEx from 'bundle-text:../../examples/tuner/index.txt'
import tesla from 'url:./sponsors/Tesla-Logo-PNG-Images-HD.png'

export default {
  fragments: {
    wrapper: `
    <div class="main container">
      <h2>Light & Simple</h2>
      <h1>Javascript Framework</h1>
      <h3><a href="http://kosyak.com" target="_blank">Эстетика</a> разработки</h3>
      <div class="buttons fx">
        <div class="first dark-btn"></div>
        <div class="second dark-btn"></div>
      </div>
    </div>
    <div class="columns container">
      <div class="column">
        <div class="icon">${iconGenerate('0000000111111111110000000')}</div>
        <h2>Скорость</h2>
        <p>Простая лаконичная архитектура. Крайне малый вес ядра фреймворка. Точечный рендеринг. Все это дает максимальную скорость работы вашего приложения.</p>
      </div>
      <div class="column">
        <div class="icon">${iconGenerate('0000011110111101000000000')}</div>
        <h2>Независимость</h2>
        <p>Минимум зависимостей от других библиотек. Преимущественно нативные свойства javaScript. Фреймворк мотивирует изучать javaScript а не сам фреймворк.</p>
      </div>
      <div class="column">
        <div class="icon">${iconGenerate('0000011000111111100000000')}</div>
        <h2>Надежность</h2>
        <p>Строгие принципы фреймворка позволяют минимизировать количество ошибок и накопление проектных знаний.</p>
      </div>
    </div>
    <div class="examples container fx">
      <div class="desc">
      <h2>Принцип реактивности</h2>
      <p><a href="">Реактивные</a> данные задаются в <span>proxies</span>, в коде доступны как <span>this.proxy</span>.</p>
      <p>Для любых нативных JavaScript свойств, описанных в объектах <span>nodes()</span>, например как <a href="https://developer.mozilla.org/ru/docs/Web/API/Node/textContent">textContent</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled">disabled</a> могут быть установлены функции.</p>
      <p>При изменение <span>this.proxy</span>, результат выполнения таких функций изменяет соответствующие свойство.</p>
      <p><a class="more" href="/examples/component" link>Больше примеров</a></p>
      </div>
      <div class="example fx">
        <div class="codeMenu"></div>
        <iframe class="iframe" srcdoc sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" frameborder="0"></iframe>
      </div>
    </div>
    
    <div class="footer container">
        <h2>Спонсоры</h2>
        <div class="titles">
          <a href="https://www.tesla.com/" class="title">
            <img src="${tesla}" alt="tesla">
          </a>
          <a class="title">Your logo</a>
          <a class="title">Your logo</a>
          <a class="title">Your logo</a>
        </div>
    </div>
    <div class="license">Leste © ${new Date().getFullYear()} Released under the <a href="#">MIT License.</a></div>`
  },
  layout: common,
  nodes() {
    return {
      first: {
        component: {
          src: btn,
          params: {
            label: 'Quick Start',
            icon: iconGenerate('0000000111111111111100000'),
          },
          methods: {
            action: () => this.router.push('/api')
          }
        }
      },
      second: {
        component: {
          src: btn,
          params: {
            label: 'GitHub',
            icon: iconGenerate('0100101111011111111000110')
          },
          methods: {
            action: () => window.open('https://github.com/lestejs')
          }
        }
      },
      codeMenu: {},
      iframe: {}
    }
  },
  mounted() {
      this.node.iframe.onload = () => {
        this._editor = CodeMirror(this.node.codeMenu, {
          lineNumbers: true,
          lineWrapping: true,
          indentWithTabs: false,
          tabSize: 2,
          value: tunerEx,
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