interface StateType {
  token: string;
}

const state = {
  token: '',
};

const mutations = {
  SET_TOKEN: (state: StateType, token: string) => {
    state.token = token;
  },
};

const actions = {
  setToken(context: any, token: string): void {
    context.commit('SET_TOKEN', token);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
