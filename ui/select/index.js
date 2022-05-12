export default {
  template: `
    <select class="l-select">
    </select>`,
  props: {
    proxies: {
      selected: {},
    },
    params: {
      options: {}
    }
  },
  handlers: {
    selected() {

    }
  },
  nodes() {
    return {
      'l-select': {
        innerHTML: this.param.options.reduce((html, option, index) => html + `<option value="${index}">${option}</option>`, '')
      }
    }
  },
}