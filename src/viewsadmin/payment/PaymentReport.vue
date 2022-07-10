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
        <span class="mr-3 font-medium text-lg md:text-2xl">گزارش درگاه</span>
      </div>
    </div>
    <!-- start user table  -->
    <div class="flex justify-center items-center mt-1 p-1 px-8">
      <!-- make table with div -->
      <div name="table" class="flex flex-col w-full h-full">
        <!-- main of table -->
        <div name="tmain1" class="flex flex-row sm:flex-col shadow-xl">
          <!-- table head on sm(640PX)  -->
          <div
            name="thead"
            class="sm:flex flex-col w-1/2 hidden sm:w-full rounded-lg font-semibold sm:rounded-none sm:rounded-t-lg bg-gray-200 py-2 border-solid border-gray-300"
          >
            <!-- table row -->
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <!-- table col  -->
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 mr-2 rounded-md w-1/12 text-center overflow-x-hidden"
              >
                شماره سفارش
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                مبلغ
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                درگاه
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-3/12 text-center overflow-x-hidden"
              >
                شماره کارت
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                شماره موبایل
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                شماره تراکش
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 ml-2 rounded-md w-2/12 text-center overflow-x-hidden"
                text-center
              >
                کد بازگشتی
              </div>
              <!-- table col end  -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table head on sm(640PX) ens  -->
        </div>
        <!-- orginal table      -->
        <div
          v-for="(rep, index) in reportpaymant"
          :key="index"
          name="tmain2"
          class="flex flex-row sm:flex-col justify-around my-2 sm:my-0"
        >
          <!-- table head -->
          <div
            name="thead"
            class="sm:hidden flex flex-col w-5/12 sm:w-full sm:mb-2.5 bg-gray-200 py-2 rounded-xl"
          >
            <!-- table row -->
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <!-- table col  -->
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                شماره سفارش
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                مبلغ
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                درگاه
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                شماره کارت
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                شماره موبایل
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                شماره تراکش
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 overflow-x-hidden"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 overflow-x-hidden"
              >
                کد بازگشتی
              </div>
              <!-- table col  -->
            </div>
            <!-- table row  -->
          </div>
          <!-- table head end -->
          <!--------------------->
          <!-- table body -->
          <div
            name="tbody"
            class="flex flex-col w-6/12 sm:w-full bg-white py-1.5 rounded-xl sm:rounded-none border-0 sm:border-t-2 border-solid border-gray-300 sm:hover:bg-gray-100"
          >
            <!-- table row -->
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <!-- table col -->
              <div
                name="th"
                class="py-1 mx-1 mb-2 mr-1 sm:mb-0 w-11/12 sm:w-1/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.order_id }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.amount }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.bank_name }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-3/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.card_pan == null ? "no" : rep.card_pan }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.mobile_number }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.ref_id == null ? "no" : rep.ref_id }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.payment_status }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ rep.return_code }}
              </div>

              <!-- table col end -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table body end-->
        </div>
        <div
          class="w-full h-12 bg-transparent sm:bg-white rounded-b-md flex flex-row justify-center items-center border-0 sm:border-y-2 border-solid border-gray-300"
        >
          <span
            class="cursor-pointer p-1 rounded-50 hover:bg-slate-300"
            @click="previous()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              /></svg
          ></span>
          <span class="w-6 h-6 text-center">{{ page }}</span>
          <span
            class="cursor-pointer p-1 rounded-50 hover:bg-slate-300"
            @click="plus()"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              /></svg
          ></span>
        </div>
        <!-- orginal table end -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const page = ref(1);
    const lastpage = ref(1);

    watchEffect(() => {
      if (page.value > lastpage.value) {
        previous();
      }
      if (page.value < 1) {
        plus();
      }

      store.dispatch("paymentReport", page.value).then((response) => {
        reportpaymant.value = response.data.data.output.data;
      });
    });
    function plus() {
      page.value++;
    }
    function previous() {
      page.value--;
    }
    const reportpaymant = ref();
    store.dispatch("paymentReport", page.value).then((response) => {
      reportpaymant.value = response.data.data.output.data;
      lastpage.value = response.data.data.output.last_page;
    });
    return {
      reportpaymant,
      page,
      plus,
      previous,
    };
  },
};
</script>

<style></style>
