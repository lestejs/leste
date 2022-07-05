export default {
  template: `
      <button class="prev">prev</button>
      <span class="index"></span>
      <button class="next">next</button>`,
  proxies: { index: 0 },
  params: { max: 5 },
  nodes() {
    return {
      index: {
        textContent: () => this.proxy.index
      },
      prev: {
        onclick: () =>  this.proxy.index--,
        disabled: () => this.proxy.index === 0
      },
      next: {
        onclick: () => this.proxy.index++,
        disabled: () => this.proxy.index === this.param.max
      }
    }
  }
}