export default {
  template: `
      <div class="l-image">
        <img class="image">
        <div class="l-preload"></div>
      </div>`,
  proxies() {
    return {
      preload: true
    }
  },
  props: {
    proxies: {
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
        src: () => this.proxy.url,
        alt: () => this.proxy.alt || '',
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