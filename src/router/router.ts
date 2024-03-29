import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
    meta: { title: 'Table', icon: 'el-icon-menu', noTabs: true },
  },
];

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    name: 'Layout',
    meta: { title: '首页', icon: 'icon-shouye', hiddenSubMenu: true },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/error',
    redirect: '/404',
    component: Layout,
    name: 'Error',
    meta: {
      title: '错误页面',
      icon: 'el-icon-location',
      hidden: true,
    },
    children: [
      {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/Error/NotFound.vue'),
        meta: { title: '错误页面' },
      },
    ],
  },
];
const router = createRouter({
  routes: [...constantRoutes, ...routes],
  history: createWebHistory(),
});

export default router;
