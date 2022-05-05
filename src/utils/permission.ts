import router from '@/router/router';
import store from '@/store';
import { RouteRecordName, RouteRecordRaw } from 'vue-router';

const routesList = await store.dispatch('router/getRouters');
// console.log(JSON.parse(JSON.stringify(store.state.router.routes)))
// const routesList =  store.state.router.routes
routesList.forEach((item: RouteRecordRaw) => {
  // 避免重复添加
  if (!router.hasRoute(<RouteRecordName>item.name)) {
    router.addRoute(item);
  }
});

router.beforeEach(async (to, from, next) => {
  const token = store.getters['token'] || '123';
  if (token) {
    if (to.path === '/login') {
      next();
    } else {
      next();
    }
  } else {
    next();
  }
});
