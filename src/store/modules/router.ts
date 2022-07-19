import { getMenuList } from '@/api/user';
import { asyncRoutes } from '@/utils/asyncRouter';

interface StateType {
  routes: any; // 初始化路由
  keepAliveNames: []; // keepAlive页面
  multiTabs: []; // tabs
}

const state = {
  routes: [],
  keepAliveNames: [],
  multiTabs: [],
};

const getters = {
  keepAliveNames: (state: any) => state.keepAliveNames,
  multiTabs: (state: any) => state.multiTabs,
};

const mutations = {
  GET_ROUTERS: (state: StateType, routes: []) => {
    state.routes = routes;
  },
  // 修改keepAlive
  SET_KEEP_ALIVE_NAMES: (state: StateType, keepAliveNames: []) => {
    state.keepAliveNames = keepAliveNames;
  },
  // 修改multiTabs
  SET_MULTI_TABS: (state: StateType, multiTabs: []) => {
    console.log(multiTabs);
    state.multiTabs = multiTabs;
  },
};

const actions = {
  // 获取routes
  async getRouters({ commit }: any) {
    const { data } = await getMenuList();
    const routes = asyncRoutes(data);
    commit('GET_ROUTERS', routes);
    return routes;
  },
  // 修改keepAlive
  setKeepAliveNames({ commit }: any, payload: any) {
    commit('SET_KEEP_ALIVE_NAMES', payload);
  },
  // 异步修改commit 公用方法
  setCommit({ commit }: any, payload: any) {
    console.log(payload);
    commit(payload.commit, payload.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
