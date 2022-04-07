export default [
  {
    path: '',
    component: import('../pages/home')
  },
  {
    path: 'product/:id',
    component: import('../pages/product')
  }
]