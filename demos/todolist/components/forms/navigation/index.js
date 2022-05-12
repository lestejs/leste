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
    for (let index = 0;index < headers.length;index++) {
      const nav = document.createElement('div')
      nav.textContent = headers[index].textContent
      nav.classList.add(headers[index].tagName)
      this.param.nav.push(nav)
      this.node.elements.appendChild(nav)
      nav.onclick = () => {
        if (headers[index].tagName === "H2" || headers[index].tagName === "H3") {
          this.method.active(index)
        }
      }
    }
  }
}