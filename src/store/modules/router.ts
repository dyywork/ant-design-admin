import { getMenuList } from '@/api/user';
import { asyncRoutes } from '@/utils/asyncRouter';

interface StateType {
  routes: any;
}

const state = {
  routes: [],
};

const mutations = {
  GET_ROUTERS: (state: StateType, routes: any) => {
    state.routes = routes;
  },
};

const actions = {
  async getRouters({ commit }: any): Promise<any[]> {
    const { data } = await getMenuList();
    const routes = asyncRoutes(data);
    return routes;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
