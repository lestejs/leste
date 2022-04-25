export default [
  {
    path: '',
    component: () => import('../pages/catalog')
  },
  {
    path: 'product/:id',
    component: () => import('../pages/product')
  },
  {
    path: 'docs',
    component: () => import('../pages/docs')
  },
  {
    path: 'home',
    component: () => import('../pages/home')
  }
]