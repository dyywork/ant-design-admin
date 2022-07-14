interface StateType {
  open: boolean;
}

const state = {
  open: false,
};

const getters = {
  open: (state: any) => state.open,
};

const mutations = {
  CHANGE_ASIDE: (state: StateType) => {
    state.open = !state.open;
  },
};

const actions = {
  toggleSide(context: any): void {
    context.commit('CHANGE_ASIDE');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
