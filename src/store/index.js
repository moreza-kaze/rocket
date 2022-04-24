import { createStore } from "vuex";
import axios from "axios";
const apiurl = "http://192.168.86.35:8000";
export default createStore({
  state: {
    menu: false,
    dashboard: {},
    users: [],
    smsGateway: [],
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
    getUser(state) {
      return state.users;
    },
    getDashboard(state) {
      return state.dashboard;
    },
    getsmsGatewaySetting(state) {
      return state.smsGateway;
    },
  },
  mutations: {
    // open closed menu
    mutationMenu(state, val) {
      state.menu = val;
      console.log(state.menu);
    },
    // user data //
    getUser(state, val) {
      state.users = val;
    },
    // dashboard data //
    getDashboard(state, val) {
      state.dashboard = val;
    },
    // sms gateway data //
    getsmsGatewaySetting(state, val) {
      state.smsGateway = val;
    },
  },
  actions: {
    actionMenu({ commit }, val) {
      commit("mutationMenu", val);
    },
    // get users //
    async getUser({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/customers`);
      commit("getUser", response.data.data);
      console.log(commit, response.data.data);
    },
    // get dashboard data //
    async getDataDashboard({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/home`);
      commit("getDashboard", response.data);
    },
    // get sms gateway setting
    async getsmsGatewaySetting({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/smsgatewaysetting`);
      commit("getsmsGatewaySetting", response.data);
    },
  },
  modules: {},
});
