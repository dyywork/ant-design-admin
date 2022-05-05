import { getMenuList } from '@/api/user';
import { asyncRoutes } from '@/utils/asyncRouter';

interface StateType {
  routes: any;
}

const state = {
  routes: [],
};

const mutations = {
  GET_ROUTERS: (state: StateType, routes: []) => {
    state.routes = routes;
  },
};

const actions = {
  async getRouters({ commit }: any) {
    const { data } = await getMenuList();
    const routes = asyncRoutes(data);
    commit('GET_ROUTERS', routes);
    return routes;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
