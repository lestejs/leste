export default {
  template: `
      <div class="l-image">
        <img class="image">
        <div class="l-preload"></div>
      </div>`,
  proxies: {
    preload: true
  },
  props: {
    params: {
      url: {},
      alt: {}
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      'l-preload': {
      },
      image: {
        src: () => this.param.url,
        alt: () => this.param.alt || '',
        onload: () => {
          this.node['l-preload'].classList.add('hide')
        },
        onerror: (event) => {
          event.target.classList.add('error-image')
        }
      }
    }
  },
}