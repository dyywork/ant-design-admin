import { getMenuList } from '@/api/user';
import { asyncRoutes } from '@/utils/asyncRouter';

interface StateType {
  routes: [];
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
  async getRouters({ commit }: any): Promise<void> {
    const data = JSON.parse(JSON.stringify(await getMenuList()));
    const routes = asyncRoutes(data);
    commit('GET_ROUTERS', routes);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
