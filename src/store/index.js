import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    menu: false,
    users: [],
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
    getUser(state) {
      return state.users;
    },
  },
  mutations: {
    mutationMenu(state, val) {
      state.menu = val;
      console.log(state.menu);
    },
    getUser(state, val) {
      state.users = val;
    },
  },
  actions: {
    actionMenu({ commit }, val) {
      commit("mutationMenu", val);
    },
    async getUser({ commit }) {
      const response = await axios.get(
        "http://192.168.86.35:8000/api/admin/customers"
      );
      commit("getUser", response.data.data);
      console.log(commit, response.data.data);
    },
  },
  modules: {},
});
