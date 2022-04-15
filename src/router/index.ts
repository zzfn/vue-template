import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/B',
        name: 'b',
        component: () => import('@/views/B.vue'),
    },
]

const index = createRouter({
    history: createWebHistory(),
    routes,
})

export default index
