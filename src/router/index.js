import { createRouter, createWebHistory } from 'vue-router'
import StackedLayout from '../layouts/StackedLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: StackedLayout },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: StackedLayout },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('../views/BlankView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
