<template>
  <div class="h-full w-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14 m-4">
      <div class="flex flex-row items-center justify-center text-xl pt-1">
        <span class=""
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-lg md:text-2xl">تنظیمات درگاه</span>
      </div>
    </div>
    <div class="h-full w-full flex flex-row px-10">
      <div class="h-96 w-full bg-white rounded-lg p-10 flex flex-col">
        <select
          v-model="witchBank"
          required
          class="appearance-none h-10 md:h-11 2xl:h-3/12 w-full lg:w-7/12 pr-3 bg-white md:pr-5 placeholder:text-gray-50 border border-gray-600 rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        >
          <option disabled value="">
            درگاه پرداخت مورد نظر را انتخاب نمایید
          </option>
          <option value="zarinpal_api_key">زرین پال</option>
          <option value="idpay_api_key">آیدی پی</option>
        </select>

        <input
          v-model="token"
          class="w-full lg:w-7/12 h-10 md:h-11 2xl:3/12 pr-3 bg-white md:pr-5 placeholder:text-gray-400 border border-gray-600 rounded-xl mt-8 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="توکن درگاه"
          type="text"
        />
        <input
          v-model="bank_id"
          class="w-full lg:w-7/12 h-10 md:h-11 2xl:3/12 pr-3 bg-white md:pr-5 placeholder:text-gray-400 border border-gray-600 rounded-xl mt-8 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="کد بانک"
          type="text"
        />
        <div class="h-16 w-full flex fle-row justify-end items-end mt-5">
          <button
            @click="setPayment()"
            class="bg-green-600 w-full lg:w-2/12 rounded-xl h-10"
          >
            ثبت تغییرات
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const token = ref("");
    const bank_id = ref("");
    const witchBank = ref("");

    store.dispatch("getPayment").then((res) => {
      witchBank.value = res.data.data.output[0].key;
      token.value = res.data.data.output[0].value;
      bank_id.value = res.data.data.output[1].value;
    });

    const setPayment = () => {
      if (witchBank.value == "zarinpal_api_key") {
        store.dispatch("setPayment", {
          zarinpal_api_key: token.value,
          bank_id: bank_id.value,
        });
      } else if (witchBank.value == "idpay_api_key") {
        store.dispatch("setPayment", {
          idpay_api_key: token.value,
          bank_id: bank_id.value,
        });
      }
    };
    return {
      token,
      bank_id,
      witchBank,
      setPayment,
    };
  },
};
</script>

<style></style>
