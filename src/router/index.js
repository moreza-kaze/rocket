import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../viewsadmin/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "user",
    component: () => import("../views/UserView.vue"),
    children: [
      {
        path: "",
        name: "signup",
        component: () => import("../views/SignupView.vue"),
      },
      {
        path: "invoice/:id",
        name: "invoice",
        component: () => import("../views/InvoiceView.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../viewsadmin/AdminView.vue"),
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "home",
        component: HomeView,
      },
      {
        path: "users",
        name: "users",
        component: () => import("../viewsadmin/UsersView.vue"),
        children: [
          {
            path: "",
            name: "usershow",
            component: () => import("../viewsadmin/users/UsersShow.vue"),
          },
          {
            path: "create",
            name: "userscreate",
            component: () => import("../viewsadmin/users/UsersCreate.vue"),
          },
        ],
      },
      {
        path: "coupon",
        name: "coupon",
        component: () => import("../viewsadmin/CouponView.vue"),
        children: [
          {
            path: "",
            name: "couponshow",
            component: () => import("../viewsadmin/coupon/CouponShow.vue"),
          },
          {
            path: "create",
            name: "couponcreate",
            component: () => import("../viewsadmin/coupon/CouponCreate.vue"),
          },
        ],
      },
      {
        path: "setting",
        name: "setting",
        component: () => import("../viewsadmin/SettingView.vue"),
        children: [
          {
            path: "payment",
            name: "paymentsetting",
            component: () => import("../viewsadmin/setting/PaymentSetting.vue"),
          },
          {
            path: "sms",
            name: "appsetting",
            component: () => import("../viewsadmin/setting/SMSSetting.vue"),
          },
        ],
      },
      {
        path: "sms",
        name: "sms",
        component: () => import("../viewsadmin/SmsView.vue"),
        children: [
          {
            path: "sendbulk",
            name: "sendbulk",
            component: () => import("../viewsadmin/sms/SendBulk.vue"),
          },
          {
            path: "settexts",
            name: "settexts",
            component: () => import("../viewsadmin/sms/SetTexts.vue"),
          },
        ],
      },
      {
        path: "product",
        name: "product",
        component: () => import("../viewsadmin/ProductView.vue"),
        children: [
          {
            path: "",
            name: "productshow",
            component: () => import("../viewsadmin/product/ProductShow.vue"),
          },
          {
            path: "create",
            name: "productcreate",
            component: () => import("../viewsadmin/product/ProductCreate.vue"),
          },
          {
            path: "edit/:id",
            name: "productedit",
            component: () => import("../viewsadmin/product/ProductEdit.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
