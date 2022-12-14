import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// * 导入所有router
// const metaRouters = import.meta.glob('./modules/*.ts')
// * 处理路由表
// export const routerArray: RouteRecordRaw[] = []
// Object.keys(metaRouters).forEach(item => {
// 	Object.keys(metaRouters[item]).forEach((key: any) => {
// 		routerArray.push(...metaRouters[item][key])
// 	})
// })
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'login' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue'),
    meta: {
      requiresAuth: false,
      title: 'about',
      key: 'about',
    },
  },
  // ...routerArray,
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: { name: '404' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
