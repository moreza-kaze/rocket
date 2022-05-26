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
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-2xl">اصلاح محصول</span>
      </div>
    </div>
    <div
      class="flex w-full justify-center items-center px-3 md:px-16 h-full mb-10"
    >
      <div class="w-full h-full bg-whitetransparent-500 rounded-2xl">
        <form
          @submit.prevent="updateProduct()"
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
              disabled
              v-model="products.product_id"
              class="bg-product w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 text-gray-400 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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
            <div
              class="h-12 flex justify-center items-center text-lg font-semibold"
            >
              <span class="ml-2"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  /></svg
              ></span>
              <span>{{ products.product_name }}</span>
            </div>
            <div
              class="bg-product h-4/6 w-11/12 flex flex-col justify-between px-10 py-4 rounded-lg shadow-md"
            >
              <div
                class="w-full h-1/4 flex flex-row justify-between items-center border-b-2 border-d border-gray-300"
              >
                <span>کد محصول</span>
                <span class="text-maincolor-999 text-xl md:text-4xl">{{
                  products.product_id
                }}</span>
              </div>
              <div
                class="w-full h-1/4 flex flex-row justify-between items-center border-b-2 border-d border-gray-300"
              >
                <span>قیمت محصول</span>
                <span class="text-maincolor-999 text-lg md:text-2xl"
                  >{{ products.amount_final }}
                  <del class="text-sm text-red-500">{{ products.amount }}</del>
                </span>
              </div>
              <div
                class="w-full h-1/4 flex flex-row justify-between items-center border-b-2 border-d border-gray-300"
              >
                <span>پیامک هدیه</span>
                <span class="text-maincolor-999 text-base md:text-xl">{{
                  products.product_gift
                }}</span>
              </div>
              <div
                class="w-full h-1/4 flex flex-row justify-between items-center"
              >
                <span>تعرفه</span>
                <span class="text-maincolor-999 text-sm md:text-lg">{{
                  products.sms_price
                }}</span>
              </div>
            </div>
            <div
              class="h-1/6 w-11/12 flex flex-row justify-center items-center"
            >
              <button
                class="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-emerald-600 hover:to-green-600 h-10 text-white rounded-xl w-9/12"
              >
                ثبت محصول
              </button>
            </div>
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
import { useRoute } from "vue-router";
import { computed, watchEffect } from "@vue/runtime-core";
export default {
  setup() {
    const route = useRoute();
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

    store.dispatch("getOneProduct", route.params.id);

    const oneProduct = computed(() => store.state.OneProduct);

    watchEffect(() => {
      if (oneProduct.value == undefined) {
        store.dispatch("getOneProduct", route.params.id);
        console.log("again");
      } else {
        products.product_id = route.params.id;
        products.product_name = oneProduct.value.product_name;
        products.amount = oneProduct.value.amount;
        products.amount_final = oneProduct.value.amount_final;
        products.product_sms = oneProduct.value.product_sms;
        products.product_gift = oneProduct.value.product_gift;
        products.sms_price = oneProduct.value.sms_price;
      }
    });
    const updateProduct = () => {
      console.log(products);
      if (
        products.product_name.length > 0 &&
        products.amount > 0 &&
        products.amount_final > 0 &&
        products.product_id > 0 &&
        products.sms_price.length > 0
      ) {
        store.dispatch("updateProduct", [route.params.id, products]);
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
      updateProduct,
    };
  },
};
</script>
