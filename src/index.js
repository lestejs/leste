import '~/demos/todolist/styles'
// import component from '~/demos/todolist/pages/home'
// import { mount } from '~/leste'

const root = document.querySelector('#root')
// mount(root, component)
// or
import routes from  '~/demos/todolist/routes'
import Router from '~/leste/router'
new Router(routes, root)