import router from '@/router/router';
import store from '@/store';
import { RouteRecordRaw } from 'vue-router';
router.beforeResolve(async (to, from, next) => {
  const token = store.getters['token'];

  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      await store.dispatch('router/getRouters');
      const routesList = store.getters.asyncRoutes;
      routesList.forEach((item: RouteRecordRaw) => {
        router.addRoute(item);
      });
      next();
    }
  } else {
    next();
  }
});
