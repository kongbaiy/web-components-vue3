import { createRouter, createWebHistory } from 'vue-router'
import { t } from '@/locales'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // 是否应该禁止尾部斜杠。默认为假
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: [

        {
            path: '/',
            redirect: '/demo'
        },
        {
            path: '/demo',
            redirect: '/demo/index',
            component: () => import('@/layout/default.vue'),
            meta: {
                icon: 'ep-add-location',
                auth: true,
                title: t('system.route.demo'),
                menuId: 'demoRoot',
                isMenu: true
            },
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('@/views/demo/index.vue'),
                    meta: { title: t('system.route.demoIndex'), menuId: 'demoIndex' }
                }
            ]
        },
        {
            path: '/demo2',
            redirect: '/demo2/index',
            component: () => import('@/layout/default.vue'),
            meta: {
                auth: true,
                title: t('system.route.demo'),
                menuId: 'demo2Root2',
                isMenu: true
            },
            children: [
                {
                    path: 'index',
                    name: 'demo2index',
                    component: () => import('@/views/demo/index.vue'),
                    meta: { title: t('system.route.demoIndex'), menuId: 'demo2Index' }
                }
            ]
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
            component: () => import('@/components/zs-auth-redirect/zs-auth-redirect.vue')
        }
    ]
})

export default router
