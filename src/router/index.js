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
    path: "/auth",
    name: "auth",
    component: () => import("../views/AuthView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    meta: { requiresAuth: true },
    component: () => import("../viewsadmin/AdminView.vue"),
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
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
        path: "payment",
        name: "payment",
        component: () => import("../viewsadmin/SettingView.vue"),
        children: [
          {
            path: "setting",
            name: "setting",
            component: () => import("../viewsadmin/payment/PaymentSetting.vue"),
          },
          {
            path: "report",
            name: "report",
            component: () => import("../viewsadmin/payment/PaymentReport.vue"),
          },
        ],
      },
      {
        path: "sms",
        name: "sms",
        component: () => import("../viewsadmin/SmsView.vue"),
        children: [
          {
            path: "Setting",
            name: "Setting",
            component: () => import("../viewsadmin/sms/SMSSetting.vue"),
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

// router.beforeEach((to, from, next) => {
//   const login = localStorage.getItem("");
//   if (to.matched.some((record) => record.meta.requiresAuth) && !login) {
//     next("/auth");
//   } else {
//     next();
//   }
// });

export default router;
