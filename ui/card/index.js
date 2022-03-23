export default {
  template: `
    <div class="l-card">
        <img class="image">
        <div class="label"></div>
    </div>`,
  props: {
    params: {
      card: {}
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      label: {
        textContent: () => this.param.card.label
      },
      image: {
        src: () => this.param.card.url
      }
    }
  }
}