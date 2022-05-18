<template>
  <div class="h-full w-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14 m-4">
      <div class="flex items-center justify-center text-xl">
        <span class="mt-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-2xl">ایجاد کوپن</span>
      </div>
    </div>
    <div
      class="flex w-full justify-center items-center px-3 md:px-16 h-full mb-10"
    >
      <div class="w-full h-full bg-whitetransparent-700 rounded-2xl shadow">
        <form
          @submit.prevent="createcouponfunc()"
          class="w-full h-full flex flex-col md:flex-row justify-around items-center mt-0 p-10"
        >
          <div
            class="h-full w-full md:w-5/6 flex flex-col justify-around items-center md:items-start"
          >
            <input
              v-model="createcoupon.coupon_name"
              class="bg-coupongreen-300 w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="کد تخفیف (لاتین)"
              type="text"
            />
            <select
              required
              v-model="createcoupon.active"
              class="appearance-none bg-coupongreen-300 h-10 md:h-11 2xl:h-3/12 w-11/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            >
              <option disabled selected value="">فعال یا غیر فعال</option>
              <option value="1">فعال</option>
              <option value="0">غیر فعال</option>
            </select>
            <select
              v-model="createcoupon.discount_type"
              required
              class="appearance-none bg-coupongreen-300 h-10 md:h-11 2xl:h-3/12 w-11/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            >
              <option disabled selected value="">
                واحد ارزیابی (تومان یا درصد)
              </option>
              <option value="percent">درصد</option>
              <option value="toman">تومان</option>
            </select>
            <input
              v-model="createcoupon.discount_value"
              class="bg-coupongreen-300 w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="مقدار تخفیف"
              type="text"
            />

            <input
              v-model="createcoupon.total_amount"
              class="bg-coupongreen-300 w-11/12 h-10 md:h-11 2xl:h-3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="تعداد اخصاص یافته"
              type="text"
            />
          </div>
          <div
            class="h-96 md:h-full my-5 w-full md:w-9/12 bg-white rounded-lg flex flex-col justify-around items-center p-4 shadow-md"
          >
            <div class="h-1/5">
              <span class="text-gray-400"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  /></svg
              ></span>
            </div>
            <div
              class="w-11/12 h-1/2 bg-coupongreen-100 flex flex-col items-center px-8 py-5 rounded-lg"
            >
              <div
                class="h-1/3 w-full flex flex-row justify-between items-center border-b-2 border-double border-gray-300"
              >
                <span>کد تخفیف:</span>
                <span class="text-coupongreen-700 text-xl md:text-4xl">{{
                  createcoupon.coupon_name
                }}</span>
              </div>
              <div
                class="h-1/3 w-full flex flex-row justify-between items-center border-b-2 border-double border-gray-300"
              >
                <span>فعال:</span>
                <span class="text-coupongreen-700 text-lg md:text-2xl">{{
                  createcoupon.active == "1" ? "فعال" : "غیر فعال"
                }}</span>
              </div>
              <div
                class="h-1/3 w-full flex flex-row justify-between items-center"
              >
                <span>ارزیابی:</span>
                <span class="text-coupongreen-700 text-base md:text-xl"
                  >{{ createcoupon.discount_value
                  }}{{
                    createcoupon.discount_type == "toman" ? "تومان" : "%"
                  }}</span
                >
              </div>
            </div>
            <div class="w-full h-1/5 flex justify-center items-center">
              <button
                class="bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-600 hover:to-indigo-600 transition-colors duration-500 h-10 text-white rounded-xl w-9/12"
              >
                ثبت
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
    const store = useStore();
    const erro = ref();
    const createcoupon = reactive({
      coupon_name: "",
      active: "",
      total_amount: "",
      discount_type: "",
      discount_value: "",
    });
    const createcouponfunc = () => {
      if (createcoupon.discount_type == "percent") {
        if (
          createcoupon.coupon_name.length > 3 &&
          0 < Number(createcoupon.total_amount) &&
          createcoupon.active != "" &&
          0 < Number(createcoupon.discount_value) &&
          Number(createcoupon.discount_value) < 101
        ) {
          store.dispatch("createcoupon", createcoupon).then(function (res) {
            erro.value = res.response.data;
            if (erro.value.status == 1) {
              createcoupon.coupon_name = "";
              createcoupon.active = "";
              createcoupon.total_amount = "";
              createcoupon.discount_type = "";
              createcoupon.discount_value = "";
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "...خطا",
            text: "مقادیر وارد شده صحیح نمی باشد",
          });
        }
      }
      if (createcoupon.discount_type == "toman") {
        if (
          createcoupon.coupon_name.length > 3 &&
          Number(createcoupon.total_amount) > 0 &&
          createcoupon.active != "0" &&
          Number(createcoupon.discount_value) > 0
        ) {
          store.dispatch("createcoupon", createcoupon);
          createcoupon.coupon_name = "";
          createcoupon.active = "";
          createcoupon.total_amount = "";
          createcoupon.discount_type = "";
          createcoupon.discount_value = "";
        } else {
          Swal.fire({
            icon: "error",
            title: "...خطا",
            text: "مقادیر وارد شده صحیح نمی باشد",
          });
        }
      }
    };

    return {
      createcoupon,
      store,
      createcouponfunc,
    };
  },
};
</script>

<style>
select:required:invalid {
  color: #a7adb0;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: #000;
}
</style>
