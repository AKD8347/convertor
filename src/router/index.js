import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('@/components/baseWrapper/BaseWrapper'),
  children: [{
    path: '/',
    name: 'exchanges-table',
    component: () => import('@/pages/currencies-table/CurrenciesTable')
  }, {
    path: '/convert/:from/:to',
    name: 'convert',
    component: () => import('@/pages/convert/Convert')
  }]
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
