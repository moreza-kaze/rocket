import { createStore } from "vuex";

export default createStore({
  state: {
    menu: false,
    users: [
      {
        id: 16,
        fullName: "Prof. Lucious Langworth",
        mobile_number: "+1-323-529-1054",
        username: "sidney61",
        password: '"qCf)&b',
        invoice_id: 16,
        payment_result: "Nemo.",
        coupon_id: 23,
        status: "Natus qui.",
      },
      {
        id: 12,
        fullName: "Dr. Ivory Gulgowski II",
        mobile_number: "1-562-647-3688",
        username: "wehner.jocelyn",
        password: "nqn`MG'')",
        invoice_id: 6,
        payment_result: "Veniam.",
        coupon_id: 21,
        status: "Dolorum.",
      },
      {
        id: 5,
        fullName: "Vincenzo Johns",
        mobile_number: "+1.463.760.9935",
        username: "kenya.buckridge",
        password: "sk?YO/",
        invoice_id: 11,
        payment_result: "Labore.",
        coupon_id: 35,
        status: "Dicta.",
      },
      {
        id: 56,
        fullName: "Idella Fritsch",
        mobile_number: "1-657-387-3204",
        username: "chyna36",
        password: "_,zsyRh'H'0?ls+x",
        invoice_id: 27,
        payment_result: "Ipsam.",
        coupon_id: 16,
        status: "Vel et.",
      },
      {
        id: 34,
        fullName: "Fredrick Schumm",
        mobile_number: "+1 (484) 258-9273",
        username: "parisian.marisa",
        password: "C%<x'39,`_HFNH,W*R",
        invoice_id: 43,
        payment_result: "Tenetur.",
        coupon_id: 2,
        status: "Ducimus.",
      },
      {
        id: 29,
        fullName: "Caden Schowalter",
        mobile_number: "+1.385.601.6459",
        username: "salvatore72",
        password: "M9WfxrJ8'N7WzetIN=*",
        invoice_id: 50,
        payment_result: "Quaerat.",
        coupon_id: 13,
        status: "Nostrum.",
      },
    ],
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
  },
  actions: {
    actionMenu({ commit }, val) {
      commit("mutationMenu", val);
    },
  },
  modules: {},
});
