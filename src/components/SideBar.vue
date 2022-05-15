<template>
  <!-- start sidebar w-64 -->
  <div
    :class="[
      { 'md:w-24 lg:w-56 hidden': !menu },
      { 'md:w-0 lg:w-0 flex': menu },
    ]"
    class="min-h-screen h-full bg-white overflow-hidden md:flex flex-col w-96 shadow-xl transition-width duration-500 md:hover:w-56 md:hover:transition-width md:hover:duration-700"
  >
    <div
      class="flex items-center pr-1 pt-3 md:pr-5 lg:pr-1 overflow-hidden h-20"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.256"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      </span>
      <span class="pr-1 md:pr-5 lg:pr-1 pt-0 text-3xl font-bold">راکت</span>
    </div>
    <div>
      <ul class="px-3 py-5 pt-0 flax justify-center w-full">
        <!----- Dasboard ------>
        <li
          :class="[
            { 'bg-maincolor-100': !dash_li },
            { '!bg-maincolor-999': dash_li },
            { 'h-14': !dash_li },
            { 'h-24': dash_li },
            { 'shadow-slate-500': dash_li },
          ]"
          @click="
            {
              prod_li = false;
              dash_li = !dash_li;
              users_li = false;
              setting_li = false;
              coupon_li = false;
              sms_li = false;
            }
          "
          class="flex items-start shadow-lg justify-between rounded-xl mt-5 pt-4 overflow-hidden transition-all duration-700 cursor-pointer"
        >
          <div class="flex">
            <svg
              :class="[
                { 'text-maincolor-999': !dash_li },
                { 'text-white': dash_li },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </svg>
            <div class="flex flex-col">
              <span
                class="font-bold text-base cursor-pointer"
                :class="[
                  { 'text-maincolor-999': !dash_li },
                  { 'text-white': dash_li },
                ]"
              >
                داشبورد</span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 mt-2.5"
                :class="[
                  { 'text-maincolor-100': !dash_li },
                  { 'text-white': dash_li },
                  {
                    hidden: !dash_li,
                  },
                ]"
                ><router-link to="/dashboard">خانه</router-link></span
              >
            </div>
          </div>
          <span
            class="ml-3 mt-1.5 transition-all"
            :class="[
              { 'text-maincolor-999': !dash_li },
              { 'text-white': dash_li },
              { 'rotate-180': dash_li },
            ]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end Dasboard ------>
        <!--                -->
        <!----- users ------>
        <li
          :class="[
            { 'bg-maincolor-100': !users_li },
            { '!bg-maincolor-999': users_li },
            { 'h-14': !users_li },
            { 'h-32': users_li },
            { 'shadow-slate-500': users_li },
          ]"
          @click="
            {
              prod_li = false;
              users_li = !users_li;
              sms_li = false;
              setting_li = false;
              coupon_li = false;
              dash_li = false;
            }
          "
          class="flex items-start shadow-lg justify-between rounded-xl mt-5 pt-4 overflow-hidden transition-all duration-700 cursor-pointer"
        >
          <div class="flex">
            <svg
              :class="[
                { 'text-maincolor-999': !users_li },
                { 'text-white': users_li },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <div class="flex flex-col">
              <span
                class="font-semibold text-base cursor-pointer"
                :class="[
                  { 'text-maincolor-999': !users_li },
                  { 'text-white': users_li },
                ]"
              >
                کاربران</span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 mt-2.5"
                :class="[
                  { 'text-maincolor-100': !users_li },
                  { 'text-white': users_li },
                  {
                    hidden: !users_li,
                  },
                ]"
                ><router-link to="/users">مدیریت</router-link></span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 my-2.5"
                :class="[
                  { 'text-maincolor-100': !users_li },
                  { 'text-white': users_li },
                  {
                    hidden: !users_li,
                  },
                ]"
                ><router-link to="/users/create">ایجاد</router-link></span
              >
            </div>
          </div>
          <span
            class="ml-3 mt-1.5 transition-all"
            :class="[
              { 'text-maincolor-999': !users_li },
              { 'text-white': users_li },
              { 'rotate-180': users_li },
            ]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end users ------>
        <!--                -->
        <!----- coupons ------>
        <li
          :class="[
            { 'bg-maincolor-100': !coupon_li },
            { '!bg-maincolor-999': coupon_li },
            { 'h-14': !coupon_li },
            { 'h-32': coupon_li },
            { 'shadow-slate-500': coupon_li },
          ]"
          @click="
            {
              prod_li = false;
              coupon_li = !coupon_li;
              users_li = false;
              setting_li = false;
              sms_li = false;
              dash_li = false;
            }
          "
          class="flex items-start shadow-lg justify-between rounded-xl mt-5 pt-4 overflow-hidden transition-all duration-700 cursor-pointer"
        >
          <div class="flex">
            <svg
              :class="[
                { 'text-maincolor-999': !coupon_li },
                { 'text-white': coupon_li },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
              />
            </svg>

            <div class="flex flex-col">
              <span
                class="font-bold text-base cursor-pointer"
                :class="[
                  { 'text-maincolor-999': !coupon_li },
                  { 'text-white': coupon_li },
                ]"
                >کوپن‌</span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 mt-2.5"
                :class="[
                  { 'text-maincolor-100': !coupon_li },
                  { 'text-white': coupon_li },
                  {
                    hidden: !coupon_li,
                  },
                ]"
                ><router-link to="/coupon">مدیریت</router-link></span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 my-2.5"
                :class="[
                  { 'text-maincolor-999': !coupon_li },
                  { 'text-white': coupon_li },
                  {
                    hidden: !coupon_li,
                  },
                ]"
                ><router-link to="/coupon/create">ایجاد</router-link></span
              >
            </div>
          </div>
          <span
            class="ml-3 mt-1.5 transition-all"
            :class="[
              { 'text-maincolor-999': !coupon_li },
              { 'text-white': coupon_li },
              { 'rotate-180': coupon_li },
            ]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end coupons ------>
        <!--                -->
        <!----- product ------>
        <li
          :class="[
            { 'bg-maincolor-100': !prod_li },
            { '!bg-maincolor-999': prod_li },
            { 'h-14': !prod_li },
            { 'h-32': prod_li },
            { 'shadow-slate-500': prod_li },
          ]"
          @click="
            {
              prod_li = !prod_li;
              setting_li = false;
              users_li = false;
              sms_li = false;
              coupon_li = false;
              dash_li = false;
            }
          "
          class="flex items-start shadow-lg justify-between rounded-xl mt-5 pt-4 overflow-hidden transition-all duration-700 cursor-pointer"
        >
          <div class="flex">
            <svg
              :class="[
                { 'text-maincolor-999': !prod_li },
                { 'text-white': prod_li },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <div class="flex flex-col">
              <span
                class="font-bold text-base cursor-pointer"
                :class="[
                  { 'text-maincolor-999': !prod_li },
                  { 'text-white': prod_li },
                ]"
                >محصولات</span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 mt-2.5"
                :class="[
                  { 'text-maincolor-100': !prod_li },
                  { 'text-white': prod_li },
                  {
                    hidden: !prod_li,
                  },
                ]"
                ><router-link to="/product">مدیریت</router-link></span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 my-2.5"
                :class="[
                  { 'text-maincolor-999': !prod_li },
                  { 'text-white': prod_li },
                  {
                    hidden: !prod_li,
                  },
                ]"
                ><router-link to="/product/create">ایجاد</router-link></span
              >
            </div>
          </div>
          <span
            class="ml-3 mt-1.5 transition-all"
            :class="[
              { 'text-maincolor-999': !prod_li },
              { 'text-white': prod_li },
              { 'rotate-180': prod_li },
            ]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end product ------>
        <!--            -->
        <!----- sms ------>
        <li
          :class="[
            { 'bg-maincolor-100': !sms_li },
            { '!bg-maincolor-999': sms_li },
            { 'h-14': !sms_li },
            { 'h-32': sms_li },
            { 'shadow-slate-500': sms_li },
          ]"
          @click="
            {
              prod_li = false;
              sms_li = !sms_li;
              users_li = false;
              setting_li = false;
              coupon_li = false;
              dash_li = false;
            }
          "
          class="flex items-start shadow-lg justify-between rounded-xl mt-5 pt-4 overflow-hidden transition-all duration-700 cursor-pointer"
        >
          <div class="flex">
            <svg
              :class="[
                { 'text-maincolor-999': !sms_li },
                { 'text-white': sms_li },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div class="flex flex-col">
              <span
                class="font-bold text-base cursor-pointer"
                :class="[
                  { 'text-maincolor-999': !sms_li },
                  { 'text-white': sms_li },
                ]"
                >پیامک</span
              >
              <span
                @click="menuChange()"
                class="font-normal text-sm lg:mt-3 mt-2.5"
                :class="[
                  { 'text-maincolor-100': !sms_li },
                  { 'text-white': sms_li },
                  {
                    hidden: !sms_li,
                  },
                ]"
                ><router-link to="/sms/sendbulk">ارسال‌انبوه</router-link></span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 my-2.5"
                :class="[
                  { 'text-maincolor-100': !sms_li },
                  { 'text-white': sms_li },
                  {
                    hidden: !sms_li,
                  },
                ]"
                ><router-link to="/sms/settexts">متون</router-link></span
              >
            </div>
          </div>
          <span
            class="ml-3 mt-1.5 transition-all"
            :class="[
              { 'text-maincolor-999': !sms_li },
              { 'text-white': sms_li },
              { 'rotate-180': sms_li },
            ]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end sms ------>
        <!--                -->
        <!----- setting ------>
        <li
          :class="[
            { 'bg-maincolor-100': !setting_li },
            { '!bg-maincolor-999': setting_li },
            { 'h-14': !setting_li },
            { 'h-32': setting_li },
            { 'shadow-slate-500': setting_li },
          ]"
          @click="
            {
              prod_li = false;
              setting_li = !setting_li;
              users_li = false;
              sms_li = false;
              coupon_li = false;
              dash_li = false;
            }
          "
          class="flex items-start shadow-lg justify-between rounded-xl mt-5 pt-4 overflow-hidden transition-all duration-700 cursor-pointer"
        >
          <div class="flex">
            <svg
              :class="[
                { 'text-maincolor-999': !setting_li },
                { 'text-white': setting_li },
              ]"
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div class="flex flex-col">
              <span
                class="font-bold text-base cursor-pointer"
                :class="[
                  { 'text-maincolor-999': !setting_li },
                  { 'text-white': setting_li },
                ]"
                >تنظیمات</span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 mt-2.5"
                :class="[
                  { 'text-maincolor-100': !setting_li },
                  { 'text-white': setting_li },
                  {
                    hidden: !setting_li,
                  },
                ]"
                ><router-link to="/setting/sms">پیامک</router-link></span
              >
              <span
                @click="menuChange()"
                class="font-medium text-sm lg:mt-3 my-2.5"
                :class="[
                  { 'text-maincolor-100': !setting_li },
                  { 'text-white': setting_li },
                  {
                    hidden: !setting_li,
                  },
                ]"
                ><router-link to="/setting/payment">درگاه</router-link></span
              >
            </div>
          </div>
          <span
            class="ml-3 mt-1.5 transition-all"
            :class="[
              { 'text-maincolor-999': !setting_li },
              { 'text-white': setting_li },
              { 'rotate-180': setting_li },
            ]"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end setting ------>
      </ul>
    </div>
  </div>
  <!-- end sidebar -->
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: {
    menu: Boolean,
  },
  setup() {
    const store = useStore();
    const setting_li = ref(false);
    const sms_li = ref(false);
    const coupon_li = ref(false);
    const users_li = ref(false);
    const dash_li = ref(false);
    const prod_li = ref(false);
    function menuChange() {
      store.dispatch("actionMenu", false);
    }

    return {
      setting_li,
      sms_li,
      coupon_li,
      users_li,
      dash_li,
      prod_li,
      menuChange,
    };
  },
};
</script>

<style></style>
