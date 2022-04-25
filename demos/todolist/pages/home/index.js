import './index.pcss'
import common from '../../layouts/common'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'
import icon1 from 'url:./icons/icons1.svg'
import icon2 from 'url:./icons/icons2.svg'
import icon3 from 'url:./icons/icons3.svg'

export default {
  template: `
    <div class="main">
      <h1>Light & simple javascript framework</h1>
      <h3>Libraries change, javascript is eternal</h3>
      <div class="buttons fx gap">
        <div class="first dark-btn"></div>
        <div class="second dark-btn"></div>
      </div>
    </div>
    <div class="columns container">
      <div class="column">
        <img src="${icon1}" class="icon">
        <h2>Simple</h2>
        <p>A minimum of new syntax, especially native java script properties. Minimum weight, maximum performance.</p>
      </div>
      <div class="column">
        <img src="${icon2}" class="icon">
        <h2>Flexibility</h2>
        <p>The flexible architecture of the framework makes it easy to make changes.</p>
      </div>
      <div class="column">
        <img src="${icon3}" class="icon">
        <h2>Complexity</h2>
        <p>Optional installation, the ability to get everything right out of the box. Constant support and updating of modules.</p>
      </div>
    </div>
    <div class="info container fx">
      <div>
        <h2>For whom?</h2>
        <div class="bl">
          <h4>simple single page websites</h4>
          <p>the core weighs very little</p>
        </div>
        <div class="bl">
          <h4>medium projects</h4>
          <p>all the necessary functionality.</p>
        </div>
        <div class="bl">
          <h4>large projects</h4>
          <p>great flexibility and can be tailored to the needs of a particular business.</p>
        </div>
      </div>
      <div class="image"

      </div>
    </div>`,
  layout: common,
  nodes() {
    return {
      first: {
        component: {
          src: btn,
          params: {
            label: 'Get Started',
            icon: iconGenerate('0000000111111111111100000')
          }
        }
      },
      second: {
        component: {
          src: btn,
          params: {
            label: 'GitHub',
            icon: iconGenerate('0100101111011111111000110')
          }
        }
      }
    }
  },
  mounted() {
  }
}