import './index.pcss'
import logo from 'url:./leste-mini.svg'
import common from '../../layouts/common'
import btn from '~/ui/button'
import { iconGenerate } from '~/ui/icon'

export default {
  fragments: {
    wrapper: `
    <div class="main container">
      <img src="" class="main-logo">
      <h2>Light & Simple</h2>
      <h1>Javascript Framework</h1>
      <h3>Leste это комплеес решений, написаный на чистом js. Libraries change, javascript is eternal!</h3>
      <div class="buttons fx">
        <div class="first dark-btn"></div>
        <div class="second dark-btn"></div>
      </div>
    </div>
    <div class="columns container">
      <div class="column">
        <div class="icon">${iconGenerate('0000000111111111110000000')}</div>
        <h2>Скорость</h2>
        <p>Простая лаконичная архитектура. Крайне малый вес ядра фреймворка. Точечный рендеринг. Все это дает максимальную скорость работы вашего приложения.</p>
      </div>
      <div class="column">
        <div class="icon">${iconGenerate('0000011110111101000000000')}</div>
        <h2>Независимость</h2>
        <p>Минимум зависимостей от других библиотек. Преимущественно нативные свойства javaScript. Фреймворк мотивирует изучать javaScript а не сам фреймворк.</p>
      </div>
      <div class="column">
        <div class="icon">${iconGenerate('0000011000111111100000000')}</div>
        <h2>Надежность</h2>
        <p>Строгие принципы фреймворка позволяют минимизировать количество ошибок и накопление проектных знаний.</p>
      </div>
      <div class="column">
        <div class="icon">${iconGenerate('0000000111001110000011100')}</div>
        <h2>Комплексность</h2>
        <p>Все необходимое сразу из коробки. Постоянное пополнение новыми продуктами, обеспечение актуальности для существующих.</p>
      </div>
    </div>
    <div class="footer container fx">
        <div>
          <h2>Отличный вариант для крупного проекта</h2>
          <p>Минимальное накопление проектных знаний</p>
        </div>
        <div>fff</div>
    </div>`
  },
  layout: common,
  nodes() {
    return {
      'main-logo': {
        src:  logo// return new URL('./leste-logo-mini.png', import.meta.url) as any as string
      },
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