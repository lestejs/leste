export default {
  template: `
    <div class="l-upload">
        <input class="upload" type="file" accept="image/*"/>
        <div class="label"></div>
    </div>`,
  props: {
    proxies: {
      hide: {},
      value: {
        default: 0
      }
    },
    params: {
      name: {},
      label: {}
    },
    methods: {
      action: {}
    }
  },
  nodes() {
    return {
      'l-upload': {
        classes: {
          hide: () => this.proxy.hide
        }
      },
      upload: {
        onchange: () => {
          const input = event.target
          if (input.files && input.files[0]) {
            const reader = new FileReader()
            reader.onload = (e) => {
              this.method.action(this.$param.name, e.target.result)
            }
            reader.readAsDataURL(input.files[0])
          }
        }
      }
    }
  }
}