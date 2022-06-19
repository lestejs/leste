[download]: https://raw.githubusercontent.com/mozilla/localForage/master/dist/localforage.min.js
[ES6 Promises API]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

# Quick start

```bash
# Install via npm:
npm i leste
```

```html
<script src="leste.js"></script>
<body>
    <div id="root"></div>
    <script>
      const component = { template: `<h1>Leste</h1>` }
      const root = document.querySelector('#root')
      leste.mount(root, component)
    </script>
</body>
```

Чтобы использовать leste, загрузите последнюю версию или установите ее с помощью [npm](https://www.npmjs.org/) (`npm i leste`).

Или просто [скачайте leste.js][download], затем подключите как: 

`<script src="leste.js"></script>`

После чего в монтируйте ваш компонент как: 

`leste.mount(root, component)`

<dl>
  <dt>root</dt><dd>Контейнер куда монтировать компонент</dd>
  <dt>component</dt><dd>сам компонент </dd>
</dl>

# API

Leste строится на основе стандартных HTML, CSS и JavaScript и предоставляет классические модели декларативного и компонентного программирования.

## template

```js
export default {
  template: `<h1>Hello!</h1>`
} 
```

```js
import head from './head.html'
export default {
  template: head
} 
```

HTML код компонента задается в  `template`. HTML код можно вынести в отдельный файл импортировать в файле компонента, и передать в качестве значения в поле template.

>Leste использует подход **чистого html**. JavaScript не используется в html коде компонентов. Таким образом верстка компонента отдельно, бизнес логика отдельно.

## nodes

```js
export default {
  template: `<h1 class="header"></h1>`,
  params: { type: 'red' },
  proxies: { hh: 'HELLO' },
  nodes() {
    return {
      header: {
        style: () => {
          background: this.param.type
        },
        textContent: () => this.proxy.hh
      }
    }
  }
}
```

Ключевым объектом Leste является **node**. Node - это обычный DOM элемент, поэтому в нем доступны все соответствующие методы и свойства (такие textContent или innerHTML, onclick, style тд.). Функция nodes возвращает объект, ключами объекта являются имена узлов (node). Имена узлов должны соответствовать именам классов заданных в тегах html.

## classes

```js
export default {
  template: `
  <style>
    .hide {
      display: none;
    }
  </style>
  <button class="toggle">toggle content</button>
  <div class="content"></div>`, // <div class="content hide">Hello!</div>`
  proxies: {
    hide: true
  },
  nodes() {
    return {
      toggle: {
        onclick: () => this.proxy.hide = !this.proxy.hide
      },
      content: {
        classes: {
          hide: () => this.proxy.hide
        },
        textContent: 'Hello!'
      }
    }
  }
}
```

Чтобы css-классы в узлах node добавлялись динамически, необходимо чтобы в classes в качестве ключа объекта был css класс, и чтобы функция возвращала булево значение.


## params

```js
export default {
  params: { min: 0, max: 5 },
  mounted() {
    console.log(this.param.min) // 0
    console.log(this.param.max) // 5
  }
}
```

В этой опции можно задавать любые данные не требующие отслеживания, они доступны через this.param

>Чтобы обратится к разным типам объектов в компоненте, тип объекта необходимо указать в единственном числе.

## proxies

```js
export default {
  template: `<h1 class="state"></h1>`,
  proxies: { flag: false },
  nodes() {
    return {
      state: {
        onclick: () => this.proxy.flag = !this.proxy.flag,
        textContent: () => this.proxy.flag ? 'Yes' : 'No'
      }
    }
  }
}
```
В этой опции описываются объекты изменение которых необходимо отслеживать. Для каждого такого объекта будет создан объект-обертка proxy. Он доступен в компоненте через this.proxy

>В основе реактивности Leste лежат реактивные функции. Все функции, которые используются в узлах (node) в которых присутствуют proxy, становятся реактивными. Leste собирает информацию о том где и когда функция должна выполняться.

## component

```js
import input from './input.js'

export default {
  template: `<input class="input">`,
  proxies: {
    text: {}
  },
  nodes() {
    return {
      input: {
        component: {
          src: input,
          proxies: { value: this.proxy.text },
          params: {},
          methods: {
            change: (v) => console.log(v)
          }
        }
      }
    }
  }
}
```

Чтобы создать компонент внутри узла (node), необходимо в объекте component в свойство src передать файл компонента с опциями.

Передавать данные от родителя к потомку можно через дополнительные свойства component: params, proxies, methods.
<dl>
  <dt>params</dt>
  <dd>Передаются данные не требующие отслеживания.</dd>
  <dt>proxies</dt>
  <dd>Передаются proxy, которые будут обновляться на стороне дочернего компонента, работает только от родителя к потомку. Чтобы переданные прокси объекты были реактивными, в свойство необходимо передать функцию.</dd>
  <dt>methods</dt>
  <dd>Передаются методы родительского компонента или любые другие функции.</dd>
</dl>

>В одном узле можно создать только один компонент

## props

```js
export default {
  template: `<input class="input">`,
  props: {
    proxies: {
      params: {
        placeholder: {
          type: string,
          default: 'Enter the details'
        }
      },
      value: {},
      methods: {
        change: {}
      }
    }
  },
  nodes() {
    return {
      input: {
        placeholder: this.param.placeholder,
        value: () => this.proxy.value,
        onkeyup: (evant) => this.method.change(evant.target.value),
      }
    }
  }
}
```

Чтобы получить данные от родительского компонента, необходимо указать их в опциях props: Эта опция поддерживает три свойства: `params`, `proxies`, `methods`. В methods мы можем получить функции от родительского компонента, которые можно использовать для передачи данных в родительском компоненте.

>Данные получаемые от родительского компонента можно провалидировать.

пример

>Все props объекты становятся частью компонента и доступны как this.param, this.proxy, this.method

Валидация HTMLCollection || NodeList || Element


## methods

```js
import input from './input.js'

export default {
  template: `
  <input class="input">
  <button class="clear">clear</button>`,
  proxies: {
    text: {}
  },
  nodes() {
    return {
      input: {
        component: {
          src: input,
          proxies: { value: this.proxy.text },
          methods: {
            change: this.method.change
          }
        }
      },
      clear: {
        onclick: () => this.method.change('')
      }
    }
  },
  methods: {
    change(v) {
      this.proxy.text = v
    }
  }
}
```

Функции описанные в methods доступны в компоненте как this.method. Для организации коммуникации от потомка к родителю, метод необходимо передать в props дочернего компонента.(подробнее о props ниже)

## handlers

```js
export default {
  template: `<button class="reset">reset</button>`,
  props: {
    proxies: {
      index: {}
    }
  },
  handlers: {
    index(v){
      console.log(v)
    }
  },
  nodes() {
    return {
      reset: {
        onclick: () => {
          this.proxy.index = 0
        }
      }
    }
  }
}
```

В handlers описываются функции, которые срабатывают после изменения proxy объектов. В аргумент функций можно принимать новое значение proxy. Имена функции должны соответствовать **path proxy**.


## setters

```js
export default {
  template: `<button class="test">test</button>`,
  proxies: { arr: [10], product: {}  },
  setters: {
    arr_0(v){ // сработает когда this.proxy.arr[0] = 5
      return v + 2
    },
    product(v) { // сработает когда this.proxy.product = {title: 'My product'}
      return v
    },
    product_title(v) {  // сработает когда this.proxy.product.title = 'New product'
      return v
    }
  },
  nodes() {
    return {
      test: {
        onclick: () => {
          this.proxy.arr[0] = 5
          console.log(this.proxy.arr) // 7
          this.proxy.product = {title: 'My product'}
          this.proxy.product.title = 'New product'
        }
      }
    }
  }
}
```

Перехватывать изменение прокси можно в функциях описанных в setters. В аргументах этих функций можно перехватывать значение до того как оно будут установлено в качестве значения объекта proxy. Имя функции должно соответствовать **path proxy** значения, которое необходимо перехватить.
> path proxy соответствует именам свойств объекта proxy разделенными знаком “_”

## sources

```js
export default {
  template: `
  <div class="forms"></div>`,
  sources: {
    add: () => import('./editForm.js'),
    edit: () => import('./editForm.js')
  },
  nodes() {
    return {
      forms: {
        component: {
          src: this.source.edit,
        }
      }
    }
  }
}
```

Для динамической загрузки модулей и компонентов необходимо описать объекты импорта в опции sources. Далее к ним можно будет обратиться как this.source


# Component API

## data

## precept

```js
export default {
  template: `
  <button class="add">add</button>
  <div class="forms"></div>`,
  sources: {
    add: () => import('./editForm.js')
  },
  proxies: {
    type: ''
  },
  nodes() {
    return {
      add: {
        onclick: () => this.proxy.type = 'add'
      },
      forms: {
        component: {
          src: this.source.add,
          precept: () => this.proxy.type === 'add',
        }
      }
    }
  }
}
```

Иногда необходимо, чтобы компоненты создавались только по какому-то условию. Условие необходимо указать в поле precept.

## advance

```js
export default {
  template: `
  <button class="extra">extra</button>
  <div class="content"></div>`,
  sources: {
    extra: () => import('./extra.js')
  },
  nodes() {
    return {
      extra: {
        onclick: () => {
          this.node.content.advance({
            src: this.source.extra,
            params: {
              hh: 'head'
            }
          })
        }
      },
      content: {
        component: {}
      }
    }
  }
}
```

Функции advance позволяет динамически создать компонент. Для этого в функцию необходимо передать опции компонента, который необходимо создать.

> Так как все компоненты привязаны к узлу, в опциях узла должно присутствовать поле component.

## integrate

```js
export default {
  template: `
  <button class="extra">extra</button>
  <div class="content"></div>`,
  sources: {
    extra: () => import('./extra.js')
  },
  nodes() {
    return {
      extra: {
        onclick: () => {
          this.node.content.advance({
            src: this.source.extra,
            params: {
              hh: 'head'
            }
          })
        }
      },
      content: {
        component: {}
      }
    }
  }
}
```

## fragments

```js
export default {
  template: `
    <header class="header"></header>
    <div class="wrapper" slot></div>
    <footer></footer>`,
}
```

HTML код компонента можно разделить на фрагменты. В компонентах типа **integrate** и в **layout** эти фрагменты могут встраиваться в  template других компонентов.

>Атрибут slot

## layout

Часто в проекте для страниц необходимо использовать определенные виды макетов. Чтобы указать макет в который должна встраиваться страница, в опцию layout компонента страницы необходимо передать файл компонента макета.

## unmount

Эта функции удаляет компонент.

# Life cycle

На разном этапе жизни компонента доступны следующие функции:

## created
Вызывается после инициализации но до обработки всех опции, поэтому на этом этапе все функции доступны для изменений через this.options

## prepared
Вызывается после обработки всех опций, но до обработки узлов и дочерних компонентов.

## mounted
Вызывается после обработки всех узлов и дочерних компонентов.

## unmounted
Вызывается при удалении компонента.

# Features

## reactive
С помощью этой функции можно добавить реактивные функции.

## reactivity
В этом объекте описаны все реактивные функции используемые в компоненте. При необходимости реактивность можно добавить динамически, добавив запись в этот объект this.reactivity. Это можно сделать с помощью функции reactive.

## replicate
Бывают случаи когда, из proxy объекты необходимо получить только данные. Это функция извлекает только данные удаляя proxy обертки.

## delay
Это функция позволяет выполнить код с временной задержкой. Возвращает промис и может использоваться в асинхронных функциях.

# State manager

Для сообщения между компонентами можно использовать общее хранилище, которое управляется сервисом store. Файл хранилища подключается в компоненте и работает, как родительский компонент.

Файл хранилища работает как компонент верхнего уровня для компонентов в который он подключается. Поддерживает следующие опции: params, proxies, methods.

>В одном компоненте можно подключить несколько файлов store, предварительно сделав импорт в начале файла компонента.




