export default {
  template: `<div class="colors"></div>
              <input class="input">
              <button class="add">Add</button>`,
  proxies: {
    colors: ['red','green','blue']
  },
  nodes() {
    return {
      colors: {
        // innerHTML: () => {
        //     let accum = ''
        //     for (let i = 0; i<this.proxy.colors.length; i++) {
        //         accum += `<p>${this.proxy.colors[i]}</p>`
        //     }
        //     return accum
        // }
        innerHTML: () => this.proxy.colors.reduce((accum, el) => accum + `<p>${el}</p> `, '')
      },
      input: {},
      add: {
        onclick: () => {
          this.proxy.colors.push(this.node.input.value)
          this.node.input.value = ''
        }
      }
    }
  }
}
