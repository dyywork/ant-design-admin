import { getMenuList } from '@/api/user';
import { asyncRoutes } from '@/utils/asyncRouter';
import router from '@/router/router';

interface MultiItem {
  fullPath: string;
  path: string;
  meta: any;
  name: string;
}

interface StateType {
  routes: any; // 初始化路由
  keepAliveNames: []; // keepAlive页面
  multiTabs: [MultiItem]; // tabs
  tabsActiveKey: string; // 高亮tabs
  selectedKeys: any; // menu 选中
  openKeys: any; // menu 选中
}

const state = {
  routes: [],
  keepAliveNames: [],
  multiTabs: [],
  tabsActiveKey: '/home',
  selectedKeys: ['/'],
  openKeys: ['/'],
};

const getters = {
  keepAliveNames: (state: any) => state.keepAliveNames,
  multiTabs: (state: any) => state.multiTabs,
  tabsActiveKey: (state: any) => state.tabsActiveKey,
  selectedKeys: (state: any) => state.selectedKeys,
  openKeys: (state: any) => state.openKeys,
};

const mutations = {
  GET_ROUTERS: (state: StateType, routes: []) => {
    state.routes = routes;
  },
  // 修改keepAlive
  SET_KEEP_ALIVE_NAMES: (state: StateType, keepAliveNames: []) => {
    state.keepAliveNames = keepAliveNames;
  },
  // 获取menuActive
  SET_MENU_ACTIVE: (state: StateType, item: any) => {
    state.selectedKeys = [item.selectedKeys];
    state.openKeys = item.openKeys;
  },
  // 修改multiTabs
  SET_MULTI_TABS: (state: StateType, tabsItem: MultiItem) => {
    const fullPathList = state.multiTabs.map(
      (item: MultiItem) => item.fullPath
    );
    state.tabsActiveKey = tabsItem.fullPath;
    if (!fullPathList.includes(tabsItem.fullPath)) {
      state.multiTabs.push({
        ...tabsItem,
        ...{
          openKeys: state.openKeys,
          selectedKeys: state.selectedKeys,
        },
      });
    }
  },
  // 删除tabs
  REMOVE_MULTI_TABS: (state: StateType, key: string) => {
    state.multiTabs.forEach((item: MultiItem, index: number) => {
      const multiTabsLen = state.multiTabs.length - 1;
      if (state.tabsActiveKey === key && item.fullPath === key) {
        if (multiTabsLen === index) {
          router.push(state.multiTabs[index - 1].fullPath);
          state.tabsActiveKey = state.multiTabs[index - 1].fullPath;
          state.selectedKeys = state.multiTabs[index - 1].selectedKeys;
          state.openKeys = state.multiTabs[index - 1].openKeys;
        } else {
          router.push(state.multiTabs[index + 1].fullPath);
          state.tabsActiveKey = state.multiTabs[index + 1].fullPath;
          state.selectedKeys = state.multiTabs[index + 1].selectedKeys;
          state.openKeys = state.multiTabs[index + 1].openKeys;
        }
      }
      if (item.fullPath === key) {
        state.multiTabs.splice(index, 1);
      }
    });
  },
  // 设置tabs 选中
  SET_ACTIVE_TAB: (state: StateType, key: string) => {
    state.multiTabs.forEach((item: any) => {
      if (item.path === key) {
        state.selectedKeys = item.selectedKeys;
        state.openKeys = item.openKeys;
      }
    });
    state.tabsActiveKey = key;
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
