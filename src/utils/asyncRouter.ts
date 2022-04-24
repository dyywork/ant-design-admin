import Layout from '@/layout/Layout.vue';
const modules = import.meta.glob('../views/**/*.vue');

export function asyncRoutes(routes: any[]) {
  routes.map(item => {
    if (item.component === '') {
      item.component = Layout;
      if (item.children && item.children.length > 0) {
        asyncRoutes(item.children);
      }
    } else {
      item.component = modules[`../views${item.component}`];
    }
  });
  console.log(routes);
  return routes;
}
