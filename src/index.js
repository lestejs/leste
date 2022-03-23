import '~/demos/todolist/styles'
import component from '~/demos/todolist/pages/home'
import { mount } from '~/leste'

const root = document.querySelector('#root')
mount(root, component)
// or
// import routes from '~/demos/renaissance/routes'
// import routes from  '~/demos/renaissance/routes'
// import router from '~/leste/router'
// router(routes, (component) => mount(root, component))