export default {
  template: `
    <style>
        .panel {
            transition: height 1s;
            overflow: hidden;
        }
        .hide {
            height: 0 !important;
        }
    </style>
    <div class="block">
        <h3 class="header">header</h3>
        <div class="panel">
            <p class="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ipsum quas doloribus ipsa pariatur rem quidem accusamus animi natus unde.
            </p>
        </div>
    </div>`,
  proxies: {
    hide: true
  },
  nodes() {
    return {
      header: {
        onclick: () => this.proxy.hide = !this.proxy.hide
      },
      content: {},
      panel: {
        classes: {
          hide: () => this.proxy.hide
        },
        style: () => {
          return { height: this.node.content.clientHeight + 'px' }
        }
      }
    }
  }
}
