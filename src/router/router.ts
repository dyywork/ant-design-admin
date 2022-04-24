import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';
import EmptyLayout from '@/layout/EmptyLayout.vue';

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
    meta: { title: 'Table', icon: 'el-icon-menu' },
  },
];

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '内容', icon: 'el-icon-location' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue'),
        meta: { title: 'Home' },
      },
    ],
  },
  {
    path: '/error',
    component: Layout,
    meta: { title: '错误页面', icon: 'el-icon-location' },
    children: [
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/Error/NotFound.vue'),
      },
    ],
  },
];
const router = createRouter({
  routes: [...constantRoutes, ...routes],
  history: createWebHistory(),
});

export default router;
