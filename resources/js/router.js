import { createRouter, createWebHashHistory } from 'vue-router'

import NotFound from './views/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: () => ({ name: 'product', params: { slug: 'fall-limited-edition-sneakers' } })
    },
    {
      path: '/shop/product/:slug',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/:pathMatch(.*)*', // This will match all paths that haven't been matched so far
      name: 'NotFound',
      component: NotFound
    }
  ],
})


export default router;