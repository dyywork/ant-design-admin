import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import  Layout  from '@/layout/Layout.vue'

const routes: Array<RouteRecordRaw>  = [
    {
        path: '/',
        redirect: '/home',
        name: 'Layout',
        component: Layout,
        meta: { title: '内容', icon: 'el-icon-location' },
        children: [
          {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/Home/Home.vue'),
            meta: { title: 'Home' }
          },
        ]
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/Login.vue'),
        meta: { title: 'Table', icon: 'el-icon-menu' },
      }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
  
  export default router