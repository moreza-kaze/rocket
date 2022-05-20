<template>
  <div class="h-full w-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14 m-4">
      <div class="flex items-center justify-center text-xl">
        <span class="mt-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-2xl">ایجاد کاربر</span>
      </div>
    </div>
    <div
      class="flex w-full justify-center items-center px-3 md:px-16 h-full mb-10"
    >
      <div class="w-full h-full bg-whitetransparent-700 rounded-2xl shadow">
        <form
          @submit.prevent="userCreateFunc()"
          class="w-full h-full flex flex-col md:flex-row justify-around items-center mt-0 p-10"
        >
          <div
            class="h-full w-full md:w-5/6 flex flex-col justify-around items-center md:items-start"
          >
            <input
              class="bg-maincolor-200 w-11/12 h-10 hsm:h md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-lg placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="نام‌ و ‌نام‌ خانوادگی"
              v-model="userDataCreate.fullName"
              type="text"
            />
            <input
              class="bg-maincolor-200 w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-lg placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="کد ملی"
              v-model="userDataCreate.nationalCode"
              type="text"
            />
            <input
              class="bg-maincolor-200 w-11/12 h-10 md:h-11 2xl:h-3/12 pr-3 md:pr-5 placeholder:text-lg placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="شماره‌ تلفن همراه"
              v-model="userDataCreate.mobile_number"
              type="text"
            />
            <input
              class="bg-maincolor-200 w-11/12 h-10 md:h-11 2xl:h-3/12 pr-3 md:pr-5 placeholder:text-lg placeholder:text-gray-400 border border-white rounded-xl p-2 mt-3 md:mt-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="کد محصول"
              v-model="userDataCreate.product_id"
              type="text"
            />
            <input
              class="appearance-none bg-maincolor-200 h-10 md:h-11 2xl:h-3/12 w-11/12 pr-3 md:pr-5 placeholder:text-lg placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="کد تخفیف"
              v-model="userDataCreate.coupon_name"
              type="text"
            />
          </div>
          <div
            class="h-96 md:h-full my-5 w-full md:w-9/12 bg-white rounded-lg flex flex-col justify-between items-center p-4 shadow-md"
          >
            <div class="w-full flex flrx-row h-1/5">
              <span
                class="text-gray-500 w-3/12 flex flex-row justify-center items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
              ></span>
              <span
                class="text-maincolor-999 mr-3 text-xl md:text-2xl w-9/12 flex flex-row items-center justify-start"
                >{{ userDataCreate.fullName }}</span
              >
            </div>
            <div
              class="h-3/5 w-11/12 bg-maincolor-200 rounded-2xl px-10 py-6 flex flex-col shadow-sm"
            >
              <div
                class="w-full h-1/3 flex flex-row flex-wrap items-center justify-between border-b-2 border-gray-300"
              >
                <span class="text-maincolor-999 text-lg md:text-xl"
                  >کد ملی:
                </span>
                <span class="text-maincolor-999 text-lg md:text-2xl">{{
                  userDataCreate.nationalCode
                }}</span>
              </div>
              <div
                class="w-full h-1/3 flex flex-row flex-wrap items-center justify-between border-b-2 border-gray-300"
              >
                <span class="text-maincolor-999 text-lg md:text-xl"
                  >تلفن همراه:
                </span>
                <span class="text-maincolor-999 text-base md:text-xl">{{
                  userDataCreate.mobile_number
                }}</span>
              </div>
              <div
                class="w-full h-1/3 flex flex-row flex-wrap items-center justify-between"
              >
                <span class="text-maincolor-999 text-lg md:text-xl"
                  >کد تخفیف:</span
                >
                <span class="text-maincolor-999 text-sm md:text-lg">{{
                  userDataCreate.coupon_name
                }}</span>
              </div>
            </div>
            <div class="h-1/5 w-full flex flex-row justify-center items-center">
              <button
                class="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-emerald-600 hover:to-green-600 h-10 text-white rounded-xl w-7/12"
              >
                ثبت نام
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
  setup() {
    const erro = ref();
    const store = useStore();
    const userDataCreate = reactive({
      fullName: "",
      nationalCode: "",
      mobile_number: "",
      coupon_name: "",
      product_id: "",
    });
    const userCreateFunc = () => {
      if (
        userDataCreate.fullName.length > 0 &&
        userDataCreate.nationalCode.length > 0 &&
        userDataCreate.mobile_number.length > 0 &&
        userDataCreate.product_id.length > 0
      ) {
        store.dispatch("userCreate", userDataCreate).then(function (res) {
          erro.value = res.response.data;
          if (erro.value.status == 1) {
            userDataCreate.fullName = "";
            userDataCreate.nationalCode = "";
            userDataCreate.mobile_number = "";
            userDataCreate.coupon_name = "";
            userDataCreate.product_id = "";
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "...خطا",
          text: "مقادیر نام یا کد ملی یا شماره موبایل اشتباه است",
        });
      }
    };

    return {
      userDataCreate,
      userCreateFunc,
    };
  },
};
</script>

<style></style>
