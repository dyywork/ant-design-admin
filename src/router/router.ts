import {
  createRouter,
  createWebHistory,
  RouteRecordName,
  RouteRecordRaw,
} from 'vue-router';
import Layout from '@/layout/Layout.vue';
import EmptyLayout from '@/layout/EmptyLayout.vue';
import store from '@/store';

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
    name: 'Layout',
    meta: { title: '内容', icon: 'el-icon-location' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: EmptyLayout,
        meta: { title: 'Home' },
        children: [
          {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/Home/Home.vue'),
            meta: { title: 'Home' },
          },
          {
            path: '/404',
            name: 'NotFound',
            component: () => import('@/views/Error/NotFound.vue'),
            meta: { title: '错误页面' },
          },
        ],
      },
      {
        path: '/401',
        name: 'NotFound1',
        component: () => import('@/views/Error/NotFound.vue'),
        meta: { title: '错误页面1' },
      },
    ],
  },
  {
    path: '/error',
    redirect: '/404',
    component: Layout,
    meta: {
      title: '错误页面',
      icon: 'el-icon-location',
      hidden: true,
      hiddenSubMenu: true,
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
