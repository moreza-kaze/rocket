<template>
  <div class="h-screen md:h-full w-full flex flex-col">
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
        <span class="mr-3 font-medium text-lg md:text-2xl">تنظیمات پیامک</span>
      </div>
    </div>
    <div class="w-full flex items-center justify-between h-full p-4 pt-0">
      <div
        class="w-full h-full flex flex-col items-center bg-whitetransparent-500 shadow-md rounded-md p-5"
      >
        <div
          class="w-full h-20 md:h-14 bg-maincolor-200 rounded-lg flex flex-row items-center justify-center"
        >
          <p class="text-maincolor-999 text-xl md:text-3xl">درگاه پیامکی</p>
        </div>
        <div
          class="h-full flex flex-col justify-around items-center w-full md:w-3/6 mt-5"
        >
          <div class="flex flex-row w-full">
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
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                /></svg
            ></span>
            <input
              v-model="smsGateway.api_url"
              title="آدرس وب سرویس ارسال پیامک"
              placeholder="آدرس وب سرویس ارسال پیامک"
              type="text"
              class="bg-gradient-to-r from-orange-300 to-amber-200 w-11/12 text-center h-10 rounded-lg mr-5 px-5 py-1"
            />
          </div>
          <div class="flex flex-row w-full">
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
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                /></svg
            ></span>
            <input
              v-model="smsGateway.api_url_users"
              title="آدرس وب سرویس نمایندگی"
              placeholder="آدرس وب سرویس نمایندگی"
              type="text"
              class="bg-gradient-to-r from-orange-300 to-amber-200 w-11/12 h-10 text-center rounded-lg mr-5 px-5 py-1"
            />
          </div>

          <div class="flex flex-row w-full items-center">
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
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                /></svg
            ></span>
            <input
              v-model="smsGateway.api_username"
              title="نام کاربری وب سرویس"
              placeholder="نام کاربری وب سرویس"
              type="text"
              class="bg-gradient-to-r from-orange-300 to-amber-200 text-center w-11/12 h-10 rounded-lg mr-5 px-5 py-1"
            />
          </div>

          <div class="flex flex-row w-full items-center">
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                /></svg
            ></span>
            <input
              v-model="smsGateway.api_password"
              title="رمز عبور وب سرویس"
              placeholder="رمز عبور وب سرویس"
              type="text"
              class="bg-gradient-to-r from-orange-300 to-amber-200 text-center w-11/12 h-10 rounded-lg mr-5 px-5 py-1"
            />
          </div>

          <div class="flex flex-row w-full items-center">
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
                  d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                /></svg
            ></span>
            <input
              v-model="smsGateway.line_number"
              title="شماره ارسال کننده وب سرویس"
              placeholder="شماره ارسال کننده وب سرویس"
              type="text"
              class="bg-gradient-to-r from-orange-300 to-amber-200 text-center w-11/12 h-10 rounded-lg mr-5 px-5 py-1"
            />
          </div>
          <div class="flex flex-row w-full items-center justify-center">
            <button
              @click="saveChange()"
              class="bg-gradient-to-r from-green-500 to-lime-500 text-center w-5/12 h-10 rounded-lg px-5 py-1"
            >
              ثبت تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("getsmsGatewaySetting");
    const smsGatewaydata = computed(() => store.state.smsGateway);
    const smsGateway = reactive({
      id: 1,
      api_username: "",
      api_password: "",
      line_number: "",
      api_url: "",
      api_url_users: "",
    });
    watchEffect(() => {
      smsGateway.id = smsGatewaydata.value.id;
      smsGateway.api_username = smsGatewaydata.value.api_username;
      smsGateway.api_password = smsGatewaydata.value.api_password;
      smsGateway.line_number = smsGatewaydata.value.line_number;
      smsGateway.api_url = smsGatewaydata.value.api_url;
      smsGateway.api_url_users = smsGatewaydata.value.api_url_users;
    });
    const saveChange = () => {
      store.dispatch("saveSmsDataChange", smsGateway);
    };
    return { smsGateway, saveChange };
  },
};
</script>

<style></style>
