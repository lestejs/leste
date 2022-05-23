export default [
  {
    path: '',
    name: 'home',
    component: () => import('../pages/home')
  },
  {
    path: 'guide',
    name: 'guide',
    component: () => import('../pages/guide')
  },
  {
    path: 'examples',
    name: 'examples',
    component: () => import('../pages/examples')
  },
  {
    path: 'ui',
    name: 'ui',
    component: () => import('../pages/ui')
  },
  {
    path: 'documentation',
    name: 'documentation',
    component: () => import('../pages/documentation')
  },
  {
    path: 'about',
    name: 'about',
    component: () => import('../pages/about')
  }
]