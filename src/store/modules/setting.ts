interface StateType {
  layout: string;
  theme: string;
}

const state = {
  layout: 'inline',
  theme: 'dark',
};

const getters = {
  layout: (state: any) => state.layout,
  theme: (state: any) => state.theme,
};

const mutations = {
  SET_LAYOUT: (state: StateType, layout: string) => {
    state.layout = layout;
  },
  SET_THEME: (state: StateType, theme: string) => {
    state.theme = theme;
  },
};

const actions = {
  setLayout(context: any, payload: any): void {
    context.commit('SET_LAYOUT', payload.layout);
  },
  setTheme(context: any, payload: any): void {
    context.commit('SET_THEME', payload.theme);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
