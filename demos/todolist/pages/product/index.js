import common from '../../layouts/common'
import mesh from '~/ui/mesh'

export default {
  template: `
    <div class="content">
      <a class="back" href="/home" link>product!!!!</a>
      <a class="next" href="/product/8" link>product!!!!</a>
      <div class="map"></div>
    </div>`,
  layout: common,
  nodes() {
    return {
      back: {
        textContent: () => {
          return JSON.stringify(this.navigate)
        }
      },
      map: {
        component: {
          src: mesh
        }
      }
    }
  },
  routeUpdate(from, to) {
    console.log(from, to)
    debugger
    // this.navigate.push('/dhdfdfhdfhdf')
  },
  mounted() {
    console.log(this.node.map.cmp(0).method.cell(1, 2))
  }
}