import { createRouter, createWebHashHistory } from 'vue-router'
import { ElMessage } from '@/../node_modules/element-plus';

const routes = [
    {
        path: '/',
        component: () => import('../views/bsHome')
    },
    {
        path: '/editorPassage',
        component: () => import('../views/editorPassage'),
        meta: { authRequired: true },
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
        component: () => import('../views/profile'),
        meta: { authRequired: true },
    },
    {
        path: '/search',
        component: () => import('../views/search')
    },
]

//创建router实例
const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

//导航守卫
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (to.meta.authRequired && !token) {
        // 若该页面需要登录权限 && token不存在，则跳转到首页并提示需要登陆
        next('/');
        ElMessage({
            showClose: true,
            message: '请先登录！',
            type: 'error',
          })
    } else {
        next();
    }
});
export default router;