import './index.pcss'
import common from '../../layouts/common'
import btn from '~/ui/button'
import mesh from '~/ui/mesh'
import { iconGenerate } from '~/ui/icon'

export default {
  fragments: {
    wrapper: `
    <div class="main">
      <h1>Light & simple javascript framework</h1>
      <h3>Libraries change, javascript is eternal</h3>
      <div class="add"></div>
      <div class="map"></div>
    </div>`
  },
  layout: common,
  nodes() {
    return {
      add: {
        component: {
          src: btn,
          params: {
            label: 'Get Started',
            icon: iconGenerate('0000000111111111111100000')
          }
        }
      },
      map: {
        component: {
          src: mesh,
          params: {
            w: 10,
            h: 10,
          }
        }
      }
    }
  },
  mounted() {
    document.onkeydown = (event) => {
      // table.children[user.y].children[user.x].classList.remove('user');
      this.method.keyboard(event.key)
    }
  },
  methods: {
    tiles(y, x) {
      return this.node.map.method.tiles(y, x)
    },
    inf(y, x) {
      return this.node.map.method.inf(y, x)
    },
    add(y, x, type) {
      this.node.map.method.add(y, x, type)
    },
    remove(y, x, type) {
      this.node.map.method.remove(y, x, type)
    },
    contains(y, x, type) {
      this.node.map.method.contains(y, x, type)
    },
    keyboard(code) {
      switch (code) {
        case 'ArrowUp':
          console.log(this.method.inf(1,1))
          break
        case 'ArrowDown':
          console.log('down')
          break
        default:
          console.log('other')
      }
    }
  }
}