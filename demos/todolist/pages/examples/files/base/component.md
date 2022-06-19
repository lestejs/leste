Для создания компонента достаточно передать в функцию mount ссылку на контейнер в который необходимо вложить компонент и объект с опциями компонента.
<a href="/api/#template" link>template</a>, <a href="/api/#quick-start" link>mount</a>

```js
const component = {
template: `<h1>Hello!</h1>`
}
const root = document.querySelector('#root')
leste.mount(root, component)
```