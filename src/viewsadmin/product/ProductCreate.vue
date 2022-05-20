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
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-2xl">ایجاد محصول</span>
      </div>
    </div>
    <div
      class="flex w-full justify-center items-center px-3 md:px-16 h-full mb-10"
    >
      <div class="w-full h-full bg-whitetransparent-500 rounded-2xl">
        <form
          @submit.prevent="createProduct()"
          class="w-full h-full flex flex-col md:flex-row justify-around items-center mt-0 p-10"
        >
          <div
            class="h-full w-full md:w-5/6 flex flex-col justify-between items-center md:items-start"
          >
            <input
              v-model="products.product_name"
              class="bg-product w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="نام‌ محصول"
              type="text"
            />
            <input
              v-model="products.product_id"
              class="bg-product w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="کد محصول"
              type="text"
            />
            <input
              v-model="products.amount"
              class="bg-product w-11/12 h-10 md:h-11 2xl:h-3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="هزینه اصلی"
              type="text"
            />
            <input
              v-model="products.amount_final"
              class="bg-product w-11/12 h-10 md:h-11 2xl:h-3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl p-2 mt-3 md:mt-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="هزینه با تخفیف"
              type="text"
            />
            <input
              v-model="products.product_sms"
              class="appearance-none bg-product h-10 md:h-11 2xl:h-3/12 w-11/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="تعداد پیامک"
              type="text"
            />
            <input
              v-model="products.product_gift"
              class="appearance-none bg-product h-10 md:h-11 2xl:h-3/12 w-11/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="تعداد پیامک هدیه"
              type="text"
            />
            <input
              v-model="products.sms_price"
              class="appearance-none bg-product h-10 md:h-11 2xl:h-3/12 w-11/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="تعرفه"
              type="text"
            />
          </div>
          <div
            class="h-96 md:h-full my-5 w-full md:w-9/12 bg-white rounded-lg flex flex-col justify-around items-center p-4"
          >
            <span class="text-gray-500"
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
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                /></svg
            ></span>
            <span class="text-maincolor-999 text-xl md:text-4xl">{{
              products.product_name
            }}</span>
            <span class="text-maincolor-999 text-lg md:text-2xl">{{
              products.amount_final
            }}</span>
            <span class="text-maincolor-999 text-base md:text-xl">{{
              products.product_gift
            }}</span>
            <span class="text-maincolor-999 text-sm md:text-lg">{{
              products.sms_price
            }}</span>
            <button
              class="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-emerald-600 hover:to-green-600 h-10 text-white rounded-xl w-9/12"
            >
              ثبت محصول
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
  setup() {
    const store = useStore();
    const products = reactive({
      product_id: "",
      product_name: "",
      amount: "",
      amount_final: "",
      product_sms: "",
      product_gift: "",
      sms_price: "",
    });
    const createProduct = () => {
      if (
        products.product_id.length > 1 &&
        products.product_name.length > 1 &&
        products.amount.length > 1 &&
        products.amount_final.length > 1 &&
        products.product_id.length > 1 &&
        products.sms_price.length > 1
      ) {
        store.dispatch("createProduct", products);
      } else {
        Swal.fire({
          icon: "error",
          title: "...خطا",
          text: "مقادیر را به صورت کامل وارد نمایید",
        });
      }
    };

    return {
      products,
      createProduct,
    };
  },
};
</script>
