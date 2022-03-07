import Layout from '@/layout/Layout.vue';
export function asyncRoutes (routes: any[]) {
    const routerList: any[] = [];
    routes.forEach(item => {
        if(!item.component) {
            item.component = Layout
            if (item.children && item.children.length> 0) {
                asyncRoutes(item.children)
            }
            routerList.push(item)
        } else{
            item.component = () => import(item.component)
            routerList.push(item)
        }
    });
    return routerList
}

