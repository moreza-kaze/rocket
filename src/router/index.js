import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/dashboard",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
    children: [
      {
        path: "",
        name: "usershow",
        component: () => import("../views/users/UsersShow.vue"),
      },
      {
        path: "create",
        name: "userscreate",
        component: () => import("../views/users/UsersCreate.vue"),
      },
    ],
  },
  {
    path: "/coupon",
    name: "coupon",
    component: () => import("../views/CouponView.vue"),
    children: [
      {
        path: "",
        name: "couponshow",
        component: () => import("../views/coupon/CouponShow.vue"),
      },
      {
        path: "create",
        name: "couponcreate",
        component: () => import("../views/coupon/CouponCreate.vue"),
      },
    ],
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingView.vue"),
    children: [
      {
        path: "payment",
        name: "paymentsetting",
        component: () => import("../views/setting/PaymentSetting.vue"),
      },
      {
        path: "sms",
        name: "appsetting",
        component: () => import("../views/setting/SMSSetting.vue"),
      },
    ],
  },
  {
    path: "/sms",
    name: "sms",
    component: () => import("../views/SmsView.vue"),
    children: [
      {
        path: "sendbulk",
        name: "sendbulk",
        component: () => import("../views/sms/SendBulk.vue"),
      },
      {
        path: "settexts",
        name: "settexts",
        component: () => import("../views/sms/SetTexts.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
