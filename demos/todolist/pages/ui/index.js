// import './index.pcss'
import withSidebar from '../../layouts/withSidebar'


export default {
  fragments: {
    content: `<div class="test">ui</div>`
  },
  layout: withSidebar,
  mounted() {
    console.log(this.router.param)
  }
}