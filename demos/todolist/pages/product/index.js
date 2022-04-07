import common from '../../layouts/common'

export default {
  template: `
    <div class="content">
      <a class="back" href="/home" link>product!!!!</a>
      <a class="next" href="/product/8" link>product!!!!</a>
    </div>`,
  layout: common,
  nodes() {
    return {
      back: {
        textContent: () => {
          return JSON.stringify(this.navigate)
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
  }
}