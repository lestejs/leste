import './index.pcss'

export default {
  fragments: {
    'group-first': `
      <div class="nav"></div>`
  },
  props: {
    params: {
      nav: []
    }
  },
  nodes() {
    return {
      nav: {
        onclick: (event) => {
          if (event.target.closest('a')) {
            this.param.active && this.param.active.classList.remove('active')
            this.param.active = event.target.closest('a')
            this.param.active.classList.add('active')
          }
        },
        innerHTML: this.param.nav.reduce((html, el) => this.method.elements(el.elements, html + `<div><h3>${el.header}</h3>`) + '</div>', '')
      }
    }
  },
  methods: {
    elements(elements, ac) {
      return elements.reduce((html, a) => html + `<a href="${a.url}" link><span>${a.name}</span></a>`, ac)
    }
  }
}