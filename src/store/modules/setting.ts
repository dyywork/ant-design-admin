interface StateType {
  layout: string;
}

const state = {
  layout: 'inline',
};

const getters = {
  layout: (state: any) => state.layout,
};

const mutations = {
  SET_LAYOUT: (state: StateType, layout: string) => {
    state.layout = layout;
  },
};

const actions = {
  setLayout(context: any, payload: any): void {
    context.commit('SET_LAYOUT', payload.layout);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
