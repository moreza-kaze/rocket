import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
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
    component: () => import("../views/UsersView.vue"),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
