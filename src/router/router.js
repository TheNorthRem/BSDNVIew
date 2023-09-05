import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/bsHome')
    },
    {
        path: '/editorPassage',
        component: () => import('../views/editorPassage')
    },
    {
        path: '/category',
        component: () => import('../views/category')
    },
    {
        path: '/passageDetail',
        component: () => import('../views/passageDetail')
    },
    {
        path: '/profile',
        component: () => import('../views/profile')
    },
    {
        path: '/search',
        component: () => import('../views/search')
    },
]

const router = createRouter({
    // history: createWebHistory(),
    history:createWebHashHistory(),
    routes,
})

export default router;