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
      {
        path: '/table',
        name: 'Table',
        component: () => import('@/views/Table/Table.vue'),
        meta: { title: 'Table' },
      },
    ],
  },
  {
    path: '/center',
    component: Layout,
    meta: { title: '个人中心', icon: 'el-icon-location' },
    children: [
      {
        path: '/center',
        name: 'Center',
        component: () => import('@/views/Center/Center.vue'),
        meta: { title: 'Center' },
      },
    ],
  },
];

const router = createRouter({
  routes: [...constantRoutes, ...routes],
  history: createWebHistory(),
});

export default router;
