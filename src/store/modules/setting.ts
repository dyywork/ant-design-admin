interface StateType {
  layout: string;
  theme: string;
  size: string;
  locale: string;
}

const state = {
  layout: 'inline',
  theme: 'dark',
  size: 'small',
  locale: 'zhCN',
};

const getters = {
  layout: (state: any) => state.layout,
  theme: (state: any) => state.theme,
  size: (state: any) => state.size,
  locale: (state: any) => state.locale,
};

const mutations = {
  SET_LAYOUT: (state: StateType, layout: string) => {
    state.layout = layout;
  },
  SET_THEME: (state: StateType, theme: string) => {
    state.theme = theme;
  },
  SET_STATE: (state: any, payload: any) => {
    state[payload.field] = payload.value;
  },
};

const actions = {
  setLayout(context: any, payload: any): void {
    context.commit('SET_LAYOUT', payload.layout);
  },
  setTheme(context: any, payload: any): void {
    context.commit('SET_THEME', payload.theme);
  },
  setState({ commit }: any, payload: any): void {
    commit('SET_STATE', payload.payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
