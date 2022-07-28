import router from '@/router/router';
import store from '@/store';
import { RouteRecordName, RouteRecordRaw } from 'vue-router';

const routesList = await store.dispatch('router/getRouters');

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
      await getTabsList(to);
      next();
    }
  } else {
    next();
  }
});

// 获取tabs 数据
async function getTabsList(to: any) {
  if (!to.meta?.noTabs) {
    await store.dispatch({
      type: 'router/setCommit',
      commit: 'SET_MULTI_TABS',
      data: {
        fullPath: to.fullPath,
        path: to.path,
        meta: to.meta,
        name: to.name,
        openKeys: to.matched.map((item: any) => item.path),
        selectedKeys: [to.matched.map((item: any) => item.path).reverse()[0]],
      },
    });
  }
}
