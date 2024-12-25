import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/assets-manage/postage-manage'
    },

    {
      path: '/:pathMatch(.*)*',
      component: () => import('./not-fund/404.vue')
    },
    {
      path: '/401',
      component: () => import('./not-fund/401.vue')
    },

    {
      path: '/auth-redirect',
      component: () => import('@/components/zs-auth-redirect/index.vue')
    }
  ]
})

export default router
