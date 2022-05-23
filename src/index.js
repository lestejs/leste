import '~/demos/todolist/styles'
import mount from '~/leste'

const root = document.querySelector('#root')
window.$root = root
// mount(root, component)
// or
import routes from  '~/demos/todolist/routes'
import Router from '~/router'
new Router(routes, root, mount)