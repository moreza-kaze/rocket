import { createStore } from "vuex";

export default createStore({
  state: {
    menu: false,
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
  },
  mutations: {
    mutationMenu(state, val) {
      state.menu = val;
      console.log(state.menu);
    },
  },
  actions: {
    actionMenu({ commit }, val) {
      commit("mutationMenu", val);
    },
  },
  modules: {},
});
