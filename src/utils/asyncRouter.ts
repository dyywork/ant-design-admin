import Layout from '@/layout/Layout.vue';
import EmptyLayout from '@/layout/EmptyLayout.vue';
const modules = import.meta.glob('../views/**/*.vue');
import store from '@/store';

let keepAliveNames: any = [];
export function asyncRoutes(routes: any[]) {
  routes.map(item => {
    if (!item.component) {
      item.component = Layout;
      if (item.children && item.children.length > 0) {
        asyncRoutes(item.children);
      }
    } else {
      if (item.children && item.children.length > 0) {
        // 多级嵌套路由处理
        item.component = EmptyLayout;
        asyncRoutes(item.children);
      } else {
        if (item.meta?.keepAlive) {
          keepAliveNames.push(item.name);
        }
        item.component = modules[`../views${item.component}`];
      }
    }
  });
  store.dispatch('router/setKeepAliveNames', keepAliveNames);
  return routes;
}

// 点击侧边栏获取完整路由信息
let routeItem = {};
export function getMenuItem(routes: any[], key: string) {
  routes.map(item => {
    if (item.path === key) {
      routeItem = item;
    } else {
      if (item.children && item.children.length > 0) {
        // 多级嵌套路由处理
        getMenuItem(item.children, key);
      }
    }
  });
  return routeItem;
}
