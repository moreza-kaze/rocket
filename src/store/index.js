import { createStore } from "vuex";
import axios from "axios";
const apiurl = "http://192.168.86.35:8000";
export default createStore({
  state: {
    menu: false,
    dashboard: {},
    usersLastPage: 1,
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
    },
    // user data //
    getUserLastPage(state, val) {
      state.usersLastPage = val;
    },
    getUser(state, val) {
      state.users = [];
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
    async getUser({ commit }, val) {
      const response = await axios.get(
        `${apiurl}/api/admin/customers?page=${val}`
      );
      // console.log(response.data.data.output.data);
      commit("getUser", response.data.data.output.data);
      commit("getUserLastPage", response.data.data.output.last_page);
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
