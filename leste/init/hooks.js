export default {
  async created() {
    this.component.created && await this.component.created.bind(this.context)()
  },
  async loaded() {
    this.component.loaded && await this.component.loaded.bind(this.context)()
  },
  async mounted() {
    this.component.mounted && await this.component.mounted.bind(this.context)()
  },
  async unmounted() {
    // document.removeEventListenerr
    this.component.unmounted && await this.component.unmounted.bind(this.context)()
  }
}