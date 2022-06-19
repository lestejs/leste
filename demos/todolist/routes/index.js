export default [
  {
    path: '',
    name: 'home',
    component: () => import('../pages/home')
  },
  {
    path: 'api',
    name: 'api',
    component: () => import('../pages/api')
  },
  {
    path: 'examples/:id',
    name: 'examples',
    layout: 'withSidebar',
    component: () => import('../pages/examples')
  },
  {
    path: 'ui/:id',
    name: 'ui',
    layout: 'withSidebar',
    component: () => import('../pages/ui')
  },
  {
    path: 'documentation',
    name: 'documentation',
    component: () => import('../pages/documentation')
  },
  {
    path: 'shop',
    name: 'shop',
    component: () => import('../pages/shop')
  },
  {
    path: 'about',
    name: 'about',
    component: () => import('../pages/about')
  }
]