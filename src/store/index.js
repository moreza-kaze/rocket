import { createStore } from "vuex";
import axios from "axios";
const apiurl = "http://192.168.86.35:8000";
export default createStore({
  state: {
    menu: false,
    dashboard: {},
    usersLastPage: 1,
    couponsLastPage: 1,
    users: [],
    smsGateway: [],
    coupons: [],
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
    getDataUser(state) {
      return state.users;
    },
    getDashboard(state) {
      return state.dashboard;
    },
    getsmsGatewaySetting(state) {
      return state.smsGateway;
    },
    getDataCoupon(state) {
      return state.coupons;
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
    getDataUser(state, val) {
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
    getDataCoupon(state, val) {
      state.coupons = [];
      state.coupons = val.data;
      state.couponsLastPage = val.last_page;
    },
  },
  actions: {
    actionMenu({ commit }, val) {
      commit("mutationMenu", val);
    },

    // get users //
    async getDataUser({ commit }, val) {
      const response = await axios.get(
        `${apiurl}/api/admin/customers?page=${val}`
      );
      // console.log(response.data.data.output.data);
      commit("getDataUser", response.data.data.output.data);
      commit("getUserLastPage", response.data.data.output.last_page);
    },

    // get dashboard data //
    async getDataDashboard({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/home`);
      commit("getDashboard", response.data);
    },

    // get coupon data
    async getDataCoupon({ commit }, val) {
      const response = await axios.get(
        `${apiurl}/api/admin/coupons?page=${val}`
      );
      commit("getDataCoupon", response.data.data.output);
    },
    async createcoupon({ commit }, val) {
      console.log(val);
      const response = await axios.post(`${apiurl}/api/admin/coupons`, {
        coupon_name: val.coupon_name,
        active: Number(val.active),
        total_amount: Number(val.total_amount),
        discount_type: val.discount_type,
        discount_value: Number(val.discount_value),
      });
      if (response.data.status != 4) {
        console.log(response.data.data.message);
      } else {
        console.log(response.data.data.message);
      }
      return { commit };
    },
    // get sms gateway setting
    async getsmsGatewaySetting({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/smsgatewaysetting`);
      commit("getsmsGatewaySetting", response.data);
    },
  },
  modules: {},
});
