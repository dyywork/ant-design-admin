import router from '@/router/router';
import store from '@/store';
import { RouteRecordName, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';

router.beforeEach(async (to, from, next) => {
  const token = store.getters['token'] || '123';
  if (token) {
    if (to.path === '/login') {
      next();
    } else {
      const routesList = await store.dispatch('router/getRouters');
      routesList.forEach((item: RouteRecordRaw) => {
        // 避免重复添加
        if (!router.hasRoute(<RouteRecordName>item.name)) {
          router.addRoute(item);
        }
      });
      next();
    }
  } else {
    next();
  }
});
