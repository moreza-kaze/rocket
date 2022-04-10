<template>
  <div class="h-full w-full flex flex-col p-4">
    <div class="w-full flex items-center justify-between h-20 sm:h-14">
      <div class="flex items-center justify-center text-xl text-gray-700">
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
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        </span>
        <span class="mr-3 font-bold text-lg md:text-2xl"
          ><span class="hidden md:inline">ارسال </span>انبوه</span
        >
      </div>
    </div>
    <div
      class="flex w-full h-full justify-center items-center flex-col p-2 md:p-8"
    >
      <div
        class="w-full h-v90 md:h-full bg-whitetransparent-600 rounded-2xl shadow-lg flex flex-col"
      >
        <div
          class="w-full h-20 bg-amber-700 rounded-t-2xl flex items-center justify-center"
        >
          <p class="font-bold text-2xl text-gray-50">ارسال پیامک اطلاع رسانی</p>
        </div>
        <div class="w-full h-full flex flex-col p-8 justify-between">
          <div class="w-full h-full flex flex-col">
            <select
              v-model="customPhone"
              class="w-full md:w-2/4 h-8 p-1 bg-white rounded-md border border-solid border-gray-400 appearance-none"
            >
              <option value="0">ارسال معمولی</option>
              <option value="1">ارسال دلخواه</option>
            </select>
            <input
              v-if="customPhone == 1"
              type="text"
              class="w-full h-8 md:w-2/4 mt-5 rounded-md border border-solid border-gray-400"
            />
            <textarea
              class="w-full md:w-2/4 h-56 mt-5 resize-none rounded-md border border-solid border-gray-400"
            ></textarea>
          </div>
          <div class="w-full h-14 flex flex-row-reverse">
            <div
              class="w-14 sm:w-40 h-full flex flex-row justify-center items-center rounded-50 sm:rounded-lg bg-gradient-to-r from-blue-500 to-emerald-400 text-gray-100"
            >
              <span
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  /></svg
              ></span>
              <span class="hidden sm:inline mr-2">ارسال</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const customPhone = ref(0);
    return { customPhone };
  },
};
</script>

<style></style>
