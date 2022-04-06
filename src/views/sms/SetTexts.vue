<template>
  <div class="h-screen md:h-full w-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14 m-4">
      <div class="flex flex-row items-center justify-center text-xl pt-1">
        <span class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-lg md:text-2xl"
          >تنظیم متون پیامکی</span
        >
      </div>
    </div>
    <div class="w-full flex items-center justify-between h-full p-4 pt-0">
      <div
        class="w-full h-full flex flex-col items-center justify-between bg-whitetransparent-500 shadow-md rounded-md p-5"
      >
        <div class="w-full h-full flex flex-col items-center">
          <!-- invoice -->
          <div
            :class="[
              {
                'h-60 md:h-56  bg-orange-200 border-amber-400 shadow-lg ':
                  invoice_ui,
              },
              { 'h-16 md:h-16 bg-amber-100 border-orange-200': !invoice_ui },
            ]"
            class="w-full md:w-8/12 rounded-lg overflow-hidden transition-all duration-700 flex flex-col border-2"
          >
            <div class="flex flex-row mt-5 mx-5 justify-between">
              <span
                class="cursor-pointer"
                @click="
                  {
                    invoice_ui = !invoice_ui;
                    payment_ui = false;
                    userpass_ui = false;
                  }
                "
                >ارسال پیامک بعد از تکمیل فرم
              </span>
              <span
                @click="
                  {
                    invoice_ui = !invoice_ui;
                    payment_ui = false;
                    userpass_ui = false;
                  }
                "
                class="transition-all duration-700 cursor-pointer"
                :class="[{ 'rotate-180': invoice_ui }]"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  /></svg
              ></span>
            </div>
            <div class="w-5/6 md:w-4/6 flex flex-col mt-5 mr-5">
              <div class="w-full flex flex-col md:flex-row">
                <select
                  v-model="invoice_pattern"
                  class="w-full h-7 px-3 bg-white rounded-md border border-solid border-gray-400 appearance-none"
                >
                  <option value="0">ارسال معمولی</option>
                  <option value="1">ارسال الگو یا پترن</option>
                </select>
                <input
                  placeholder="کد الگو"
                  :class="[{ hidden: invoice_pattern == 0 }]"
                  class="w-full px-1 mr-0 mt-3 md:mt-0 md:mr-3 rounded-md border border-solid border-gray-400"
                  type="text"
                />
              </div>
              <textarea
                placeholder="نمونه متن"
                :class="[
                  { 'h-24': invoice_pattern == 0 },
                  { 'h-20': invoice_pattern == 1 },
                ]"
                class="w-full md:h-24 mt-2 p-1 resize-none rounded-md border border-solid border-gray-400"
              ></textarea>
            </div>
          </div>
          <!-- end invoice -->
          <!--  -->
          <!-- payment -->
          <div
            :class="[
              {
                'h-60 md:h-56  bg-orange-200 border-amber-400 shadow-lg ':
                  payment_ui,
              },
              { 'h-16 md:h-16 bg-amber-100 border-orange-200': !payment_ui },
            ]"
            class="w-full md:w-8/12 rounded-lg overflow-hidden transition-all duration-700 flex flex-col border-2 mt-3"
          >
            <div class="flex flex-row mt-5 mx-5 justify-between">
              <span
                class="cursor-pointer"
                @click="
                  {
                    payment_ui = !payment_ui;
                    invoice_ui = false;
                    userpass_ui = false;
                  }
                "
                >ارسال پیامک بعد پرداخت
              </span>
              <span
                @click="
                  {
                    payment_ui = !payment_ui;
                    invoice_ui = false;
                    userpass_ui = false;
                  }
                "
                class="transition-all duration-700 cursor-pointer"
                :class="[{ 'rotate-180': payment_ui }]"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  /></svg
              ></span>
            </div>
            <div class="w-5/6 md:w-4/6 flex flex-col mt-5 mr-5">
              <div class="w-full flex flex-col md:flex-row">
                <select
                  v-model="payment_pattern"
                  class="w-full h-7 px-3 bg-white rounded-md border border-solid border-gray-400 appearance-none"
                >
                  <option value="0">ارسال معمولی</option>
                  <option value="1">ارسال الگو یا پترن</option>
                </select>
                <input
                  placeholder="کد الگو"
                  :class="[{ hidden: payment_pattern == 0 }]"
                  class="w-full px-1 mr-0 mt-3 md:mt-0 md:mr-3 rounded-md border border-solid border-gray-400"
                  type="text"
                />
              </div>
              <textarea
                placeholder="نمونه متن"
                :class="[
                  { 'h-24': payment_pattern == 0 },
                  { 'h-20': payment_pattern == 1 },
                ]"
                class="w-full md:h-24 mt-2 p-1 resize-none rounded-md border border-solid border-gray-400"
              ></textarea>
            </div>
          </div>
          <!-- end payment -->
          <!--  -->
          <!-- userpass -->
          <div
            :class="[
              {
                'h-60 md:h-56  bg-orange-200 border-amber-400 shadow-lg ':
                  userpass_ui,
              },
              { 'h-16 md:h-16 bg-amber-100 border-orange-200': !userpass_ui },
            ]"
            class="w-full md:w-8/12 rounded-lg overflow-hidden transition-all duration-700 flex flex-col border-2 mt-3"
          >
            <div class="flex flex-row mt-5 mx-5 justify-between">
              <span
                class="cursor-pointer"
                @click="
                  {
                    userpass_ui = !userpass_ui;
                    payment_ui = false;
                    invoice_ui = false;
                  }
                "
                >ارسال پیامک نام کاربری و رمز عبور
              </span>
              <span
                @click="
                  {
                    userpass_ui = !userpass_ui;
                    payment_ui = false;
                    invoice_ui = false;
                  }
                "
                class="transition-all duration-700 cursor-pointer"
                :class="[{ 'rotate-180': userpass_ui }]"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  /></svg
              ></span>
            </div>
            <div class="w-5/6 md:w-4/6 flex flex-col mt-5 mr-5">
              <div class="w-full flex flex-col md:flex-row">
                <select
                  v-model="userpass_pattern"
                  class="w-full h-7 px-3 bg-white rounded-md border border-solid border-gray-400 appearance-none"
                >
                  <option value="0">ارسال معمولی</option>
                  <option value="1">ارسال الگو یا پترن</option>
                </select>
                <input
                  placeholder="کد الگو"
                  :class="[{ hidden: userpass_pattern == 0 }]"
                  class="w-full px-1 mr-0 mt-3 md:mt-0 md:mr-3 rounded-md border border-solid border-gray-400"
                  type="text"
                />
              </div>
              <textarea
                placeholder="نمونه متن"
                :class="[
                  { 'h-24': userpass_pattern == 0 },
                  { 'h-20': userpass_pattern == 1 },
                ]"
                class="w-full md:h-24 mt-2 p-1 resize-none rounded-md border border-solid border-gray-400"
              ></textarea>
            </div>
          </div>
          <!-- end userpass -->
        </div>
        <div
          class="w-full flex md:w-8/12 md:flex-row md:justify-center flex-row-reverse h-20"
        >
          <button
            class="bg-gradient-to-r from-green-500 to-lime-500 hover:text-white text-center w-full md:w-5/12 h-10 rounded-lg px-5 py-1"
          >
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onUpdated, watch } from "@vue/runtime-core";

export default {
  setup() {
    const invoice_ui = ref(false);
    const payment_ui = ref(false);
    const userpass_ui = ref(false);
    const invoice_pattern = ref(0);
    const payment_pattern = ref(0);
    const userpass_pattern = ref(0);

    onUpdated(() =>
      watch(() => {
        console.log(invoice_pattern);
      })
    );

    return {
      invoice_ui,
      payment_ui,
      userpass_ui,
      invoice_pattern,
      payment_pattern,
      userpass_pattern,
    };
  },
};
</script>

<style></style>
