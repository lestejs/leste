export default [
  {
    path: '',
    name: '',
    component: () => import('../pages/catalog')
  },
  {
    path: 'product/:id',
    name: '',
    component: () => import('../pages/product')
  },
  {
    path: 'docs',
    name: 'guide',
    component: () => import('../pages/docs')
  },
  {
    path: 'home',
    name: 'home',
    component: () => import('../pages/home')
  },
  {
    path: 'game',
    name: 'game',
    component: () => import('../pages/game')
  }
]