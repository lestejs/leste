export default {
  fragments: {
    'group-first': `
      <div class="elements"></div>`
  },
  params: {
    index: 0,
    nav: []
  },
  props: {
    params: {
      headers: {
      }
    },
    proxies: {
      index: {},
    },
    methods: {
      active: {},
      close: {}
    }
  },
  handlers: {
    index(index){
      this.param.index && this.param.nav[this.param.index].classList.remove('active')
      this.param.index = index
      this.param.nav[this.param.index].classList.add('active')
    }
  },
  nodes() {
    return {
      elements: {}
    }
  },
  mounted() {
    const headers = this.param.headers
    const has = window.location.hash
    for (let index = 0;index < headers.length;index++) {
      const nav = document.createElement('a')
      nav.textContent = headers[index].textContent
      nav.classList.add(headers[index].tagName)
      nav.href = '#' + headers[index].id
      nav.setAttribute('link', '')
      this.param.nav.push(nav)
      this.node.elements.appendChild(nav)
      if (has === '#' + headers[index].id) this.method.active(index)
      nav.onclick = () => this.method.active(index)
    }
  }
}