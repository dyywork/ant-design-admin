import { getMenuList } from '@/api/user';
import { asyncRoutes } from '@/utils/asyncRouter';

interface StateType {
  routes: any;
  keepAliveNames: [];
}

const state = {
  routes: [],
  keepAliveNames: [],
};

const getters = {
  keepAliveNames: (state: any) => state.keepAliveNames,
};

const mutations = {
  GET_ROUTERS: (state: StateType, routes: []) => {
    state.routes = routes;
  },
  SET_KEEP_ALIVE_NAMES: (state: StateType, keepAliveNames: []) => {
    state.keepAliveNames = keepAliveNames;
  },
};

const actions = {
  async getRouters({ commit }: any) {
    const { data } = await getMenuList();
    const routes = asyncRoutes(data);
    commit('GET_ROUTERS', routes);
    return routes;
  },
  setKeepAliveNames({ commit }: any, payload: any) {
    commit('SET_KEEP_ALIVE_NAMES', payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
