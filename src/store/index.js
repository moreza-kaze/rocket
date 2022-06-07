import { createStore } from "vuex";
import axios from "axios";
import apicheck from "../store/apicheck.js";

const apiurl = "http://192.168.86.35:8000";
export default createStore({
  state: {
    menu: false,
    dashboard: {},
    usersLastPage: 1,
    couponsLastPage: 1,
    users: [],
    smsGateway: [],
    smsText: [],
    coupons: [],
    showUserInfo: {},
    products: [],
    OneProduct: {},
    userproducts: [],
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
    getUserproducts(state) {
      return state.userproducts;
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
      state.coupons = val;
    },
    getCouponLastPage(state, val) {
      state.couponsLastPage = val;
    },
    showUserInfo(state, val) {
      state.showUserInfo = {};
      state.showUserInfo = val;
    },
    getSmsText(state, val) {
      state.smsText = val;
    },
    getproduct(state, val) {
      state.products = val;
    },
    getOneProduct(state, val) {
      state.OneProduct = {};
      state.OneProduct = val;
    },
    getPanel(state, val) {
      state.userproducts = [];
      state.userproducts = val;
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
      commit("getDataCoupon", response.data.data.output.data);
      commit("getCouponLastPage", response.data.data.output.last_page);
    },
    // create coupon
    async createcoupon({ commit }, val) {
      const response = await axios.post(`${apiurl}/api/admin/coupons`, {
        coupon_name: val.coupon_name,
        active: Number(val.active),
        total_amount: Number(val.total_amount),
        discount_type: val.discount_type,
        discount_value: Number(val.discount_value),
      });
      apicheck(response.data);
      return { commit, response };
    },
    // search users
    async searchUser({ commit }, val) {
      const response = await axios.post(
        `${apiurl}/api/admin/customers/search`,
        {
          mobile_number: val,
        }
      );
      console.log(response.data.data);
      commit("getDataUser", response.data.data.output);
    },
    // search coupon
    async searchCoupon({ commit }, val) {
      const response = await axios.post(`${apiurl}/api/admin/coupons/search`, {
        coupon_name: val,
      });
      commit("getDataCoupon", response.data.data.output);
    },
    // userCreate
    async userCreate({ commit }, val) {
      const response = await axios.post(`${apiurl}/api/admin/customers`, {
        fullName: val.fullName,
        nationalCode: val.nationalCode,
        mobile_number: val.mobile_number,
        coupon_name: val.coupon_name,
        product_id: Number(val.product_id),
      });
      apicheck(response.data);
      return { commit, response };
    },
    // setCoupon
    async setCoupon({ commit }, val) {
      const response = await axios.put(
        `${apiurl}/api/admin/invoices/${val[1]}`,
        {
          coupon_name: val[0],
        }
      );
      console.log(response.data);
      apicheck(response.data);
      return { commit };
    },
    // deleteCoupon
    async deleteUser({ commit }, userid) {
      const response = await axios.delete(
        `${apiurl}/api/admin/customers/${userid}`
      );
      apicheck(response.data);
      return { commit };
    },
    //showUserInfo
    async showUserInfo({ commit }, userInvoice_id) {
      const response = await axios.get(
        `${apiurl}/api/admin/invoices/${userInvoice_id}`
      );
      commit("showUserInfo", response.data.data.output);
    },
    // actionCoupon
    async actionCoupon({ commit }, val) {
      const response = await axios.put(
        `${apiurl}/api/admin/coupons/${Number(val[0])}`,
        {
          active: Number(val[1]),
        }
      );
      apicheck(response.data);
      return { commit };
    },
    // recharge coupon
    async couponRecharge({ commit }, val) {
      const response = await axios.post(
        `${apiurl}/api/admin/coupons/recharge`,
        {
          id: val[0],
          new_amount: val[1],
        }
      );
      apicheck(response.data);
      return { commit, response };
    },
    // get sms gateway setting
    async getsmsGatewaySetting({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/smsgatewaysetting`);
      commit("getsmsGatewaySetting", response.data.data.output[0]);
    },
    // saveSmsDataChange
    async saveSmsDataChange({ commit }, val) {
      const response = await axios.post(
        `${apiurl}/api/admin/smsgatewaysetting/insertorupdate`,
        val
      );
      apicheck(response.data);
      return { commit };
    },
    async getSmsText({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/sms/texts`);
      commit("getSmsText", response.data.data.output[0]);
    },
    async changeSmsTexts({ commit }, val) {
      const response = await axios.post(
        `${apiurl}/api/admin/sms/texts/insertorupdate`,
        val
      );
      apicheck(response.data);
      return { commit };
    },
    async getproduct({ commit }) {
      const response = await axios.get(`${apiurl}/api/admin/products`);
      commit("getproduct", response.data.data.output);
    },
    async deleteProduct({ commit }, val) {
      const response = await axios.delete(
        `${apiurl}/api/admin/products/${val}`
      );
      apicheck(response.data);
      this.dispatch("getproduct");
      return { commit };
    },
    async createProduct({ commit }, val) {
      const response = await axios.post(`${apiurl}/api/admin/products`, {
        product_id: Number(val.product_id),
        product_name: val.product_name,
        amount: Number(val.amount),
        amount_final: Number(val.amount_final),
        product_sms: Number(val.product_sms),
        product_gift: Number(val.product_gift),
        sms_price: val.sms_price,
      });
      apicheck(response.data);
      return { commit, response };
    },
    async getOneProduct({ commit }, val) {
      const response = await axios.get(`${apiurl}/api/admin/products/${val}`);
      commit("getOneProduct", response.data.data.output);
    },
    async updateProduct({ commit }, val) {
      const response = await axios.put(
        `${apiurl}/api/admin/products/${val[0]}`,
        {
          product_name: val[1].product_name,
          amount: Number(val[1].amount),
          amount_final: Number(val[1].amount_final),
          product_sms: Number(val[1].product_sms),
          product_gift: Number(val[1].product_gift),
          sms_price: val[1].sms_price,
        }
      );
      apicheck(response.data);
      this.dispatch("getOneProduct", val[0]);
      return { commit };
    },
    async register({ commit }, val) {
      const response = await axios.post(`${apiurl}/api/users/register`, val);

      return { commit, response };
    },
    async getPanel({ commit }) {
      axios
        .get(`${apiurl}/api/users/showproducts`)
        .then(function (response) {
          commit("getPanel", response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    async createinvoice({ commit }, val) {
      console.log(val);
      const response = await axios.post(`${apiurl}/api/users/createinvoice`, {
        customer_id: Number(val[1]),
        product_id: Number(val[0]),
      });
      return {
        response,
        commit,
      };
    },
  },
  modules: {},
});
