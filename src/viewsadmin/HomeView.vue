<template>
  <div class="h-full w-full flex flex-col p-4 items-center">
    <div class="w-full flex items-center justify-between h-20 sm:h-14">
      <div
        class="flex items-center justify-center text-xl text-gray-700 overflow-hidden"
      >
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
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            />
          </svg>
        </span>
        <span class="mr-3 font-bold text-lg md:text-2xl">داشبورد</span>
      </div>
    </div>
    <div
      class="h-2/6 w-full flex flex-col justify-around md:flex-row mt-1 md:mt-5"
    >
      <div
        class="w-full md:w-32 h-20 md:h-full shadow-xl bg-gradient-to-t from-dashboard-y1 to-dashboard-y2 flex flex-row md:flex-col md:p-5 rounded-2xl overflow-hidden"
      >
        <div
          class="md:bg-whitetransparent-500 w-1/4 md:w-full md:h-1/2 rounded-xl flex md:flex-row items-center justify-center"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              /></svg
          ></span>
        </div>
        <div class="flex flex-col items-center h-1/3 p-3 md:p-5">
          <span class="font-bold lg:text-lg xl:font-semibold xl:text-2xl"
            >{{ dashboard.adminCredit?.toLocaleString("en") }} پیامک</span
          >
          <span class="md:mt-3 md:text-sm lg:text-lg">اعتبار پیامکی</span>
        </div>
      </div>
      <div
        class="w-full mt-5 md:mt-0 md:w-32 h-20 md:h-full shadow-xl bg-gradient-to-t from-dashboard-b1 to-dashboard-b2 flex flex-row md:flex-col md:p-5 rounded-2xl overflow-hidden"
      >
        <div
          class="md:bg-whitetransparent-500 w-1/4 md:w-full md:h-1/2 rounded-xl flex md:flex-row items-center justify-center"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17
              20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10
              0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7
              20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15
              7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2
              0 11-4 0 2 2 0 014 0z"
              /></svg
          ></span>
        </div>
        <div class="flex flex-col items-center h-1/3 p-3 md:p-5">
          <span class="font-bold lg:text-lg xl:font-semibold xl:text-2xl"
            >{{ dashboard.customerCount }} نفر</span
          >
          <span class="md:mt-3 md:text-sm lg:text-lg">کاربر ثبت شده</span>
        </div>
      </div>
      <div
        class="w-full mt-5 md:mt-0 md:w-32 h-20 md:h-full shadow-xl bg-gradient-to-t from-dashboard-p1 to-dashboard-p2 flex flex-row md:flex-col md:p-5 rounded-2xl overflow-hidden"
      >
        <div
          class="md:bg-whitetransparent-500 w-1/4 md:w-full md:h-1/2 rounded-xl flex md:flex-row items-center justify-center"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
          ></span>
        </div>
        <div class="flex flex-col items-center h-1/3 p-3 md:p-5">
          <span class="font-bold lg:text-lg xl:font-semibold xl:text-2xl"
            >{{
              dashboard.invoiceFullPayment?.toLocaleString("en")
            }}
            تومان</span
          >
          <span
            class="md:mt-3 md:text-sm lg:text-lg justify-items-start justify-self-start"
            >پرداخت شده</span
          >
        </div>
      </div>
    </div>
    <div
      class="h-full md:h-3/6 w-p97 mt-5 bg-whitetransparent-500 rounded-2xl flex flex-col md:flex-row"
    >
      <div
        class="h-full w-full md:h-full md:w-1/2 flex flex-col p-5 md:px-10 justify-center items-center"
      >
        <div class="h-72 w-72 md:h-48 md:w-48 xl:h-72 xl:w-72">
          <chartpanel
            :NoDiscountInvoiceNumbers="dashboard.NoDiscountInvoiceNumbers"
            :withDiscountInvoiceNumbers="dashboard.withDiscountInvoiceNumbers"
          />
        </div>
      </div>
      <div
        class="h-3/6 w-full md:h-full md:w-1/2 md:flex flex-col justify-center items-center p-5 lg:p-0"
      >
        <div
          class="w-full h-48 md:h-full xl:h-4/6 xl:w-4/6 shadow-2xl bg-gradient-to-r from-dashboard-g4 to-dashboard-g3 border-2 border-gray-300 rounded-3xl flex flex-col justify-around"
        >
          <div
            class="flex flex-row justify-evenly items-end text-xl font-semibold h-1/4"
          >
            <span>xxxx</span>
            <span>xxxx</span>
            <span>xxxx</span>
            <span>xxxx</span>
          </div>
          <div class="text-yellow-800 pr-5 h-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 md:h-16 md:w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div
            class="flex flex-row justify-evenly h-1/4 text-sm md:text-lg font-semibold text-white"
          >
            <span> پرداخت ماه</span>
            <span
              >{{
                dashboard.fullPaymentCurrentMonth?.toLocaleString("en")
              }}
              تومان</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
// @ is an alias to /srcd
import chartpanel from "../components/ChartPanel.vue";
export default {
  name: "HomeView",
  components: { chartpanel },
  setup() {
    const store = useStore();
    store.dispatch("getDataDashboard");
    const dashboard = computed(() => store.getters["getDashboard"]);
    return {
      dashboard,
    };
  },
};
</script>
