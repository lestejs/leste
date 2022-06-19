import common from './common'
import navigation from './components/navigation'
import sidebar from '~/ui/sidebar'

export default {
  ...common,
  sources: {
    examples: () => import('../pages/examples/nav.js'),
    ui: () => import('../pages/ui/nav.js')
  },
  params: {
    nav: []
  },
  nodes() {
    return {
      ...common.nodes(),
      sidebar: {
        component: {
          src: sidebar,
          params: {
            close: '<i>></i>',
            width: '16rem'
          },
          proxies: {
            open: true,
            start: true
          },
          methods: {
            close: this.method.close
          }
        }
      },
      content: {}
    }
  },
  async load(from, to) {
    const a = await this.sources[to.name]()
    this.params.nav = a.default
  },
  prepared() {
    this.container.querySelector('.wrapper').innerHTML = `
    <div class="sidebar"></div>
    <div class="l-side-content">
        <div class="content" slot></div>
    </div>`
  },
  mounted() {
    common.mounted && common.mounted()
    this.node.sidebar.integrate({ src: navigation, params: { nav: this.param.nav } })
  }
}