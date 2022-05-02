export default {
  template: `
    <table class="l-mesh">
      <tbody class="tbody"></tbody>
    </table>`,
  props: {
    proxies: {
      type: {
        default: 'default'
      }
    },
    params: {
      w: {
        default: 5
      },
      h: {
        default: 5
      }
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      'tbody': {
        onclick: (event) => {
          event.target.closest('td') && event.target.classList.toggle(this.proxy.type)
        },
        innerHTML: () => {
          let tbody = ''
          for (let y = 0; y < this.param.h; y++) {
            tbody += '<tr>'
            for (let x  =0; x < this.param.w; x++) {
              tbody += '<td></td>'
            }
            tbody += '</tr>'
          }
          return tbody
        }
      }
    }
  },
  methods: {
    tiles(y, x) {
      return this.node.tbody.children[y].children[x]
    },
    inf(y, x) {
      return this.node.tbody.children[y].children[x].className
    },
    add(y, x, type) {
      this.method.tiles(y, x).classList.add(type)
    },
    remove(y, x, type) {
      this.method.tiles(y, x).classList.remove(type)
    },
    contains(y, x, type) {
      this.method.tiles(y, x).classList.contains(type)
    }
  }
}