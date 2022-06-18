<template>
  <div
    class="min-h-screen w-full h-full max-h-fit bg-blob px-4 py-8 md:p-16 xl:px-44 xl:p-24 flex flex-row"
  >
    <div class="w-full min-h-full flex flex-row justify-around">
      <div
        class="h-full w-full lg:w-7/12 bg-white rounded-lg py-16 px-4 md:p-16 shadow-lg"
      >
        <div class="flex flex-row h-24 w-full justify-between">
          <div class="flex flex-row items-center">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                /></svg
            ></span>
            <span class="mr-2 lg:mr-4 text-xl font-semibold">{{
              invoice.fullName
            }}</span>
          </div>
          <div class="flex flex-col justify-center">
            <span>{{ invoice.mobile_number }}</span>
            <span>{{ invoice.nationalCode }}</span>
            <span class="text-left">{{ today }}</span>
          </div>
        </div>
        <div class="h-8 w-full px-3 flex mt-5 items-center">
          <span>ثبت نام اولیه شما انجام شد</span>
        </div>
        <div
          class="w-full h-32 bg-blob-80 mt-10 rounded-xl px-4 md:p-10 xl:p-12 flex justify-between items-center"
        >
          <div class="flex items-center">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="0.75"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                /></svg
            ></span>
            <span class="mr-1 text-lg">پنل {{ invoice.product_name }}</span>
          </div>
          <div>
            <span
              >تومان<del class="text-red-500">{{ invoice.amount }}</del
              >{{ invoice.amount_final }}
            </span>
          </div>
        </div>
        <div
          class="h-32 md:h-20 w-full mt-10 py-4 md:py-0 shadow rounded-xl flex flex-col md:flex-row items-center justify-between px-5 bg-gray-50"
        >
          <input
            v-model="coupon_name"
            type="text"
            class="h-10 w-full md:w-9/12 border-2 border-solid border-gray-0 px-3 rounded-lg"
            placeholder="کوپن تخفیف دارید؟ آن را درج کنید"
          />
          <button
            @click="invoiceUpdate()"
            class="h-10 w-full mt-2 md:mt-0 md:w-2/12 bg-green-200 rounded hover:bg-green-400"
          >
            اعمال
          </button>
        </div>
        <div class="flex flex-row mt-10">
          <div>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-gray-600"
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
          <div class="flex flex-col mr-4">
            <span class="font-semibold text-xl text-gray-600 mt-3 md:mt-0"
              >30 روز بازگشت هزینه</span
            >
            <span class="text-xs font-thin text-gray-400 hidden md:inline"
              >پس از خرید سامانه پیامکی، در صورت عدم رضایت می‌توانید هزینه را،
              طبق قوانین بازگشت بدهید.
            </span>
          </div>
        </div>
        <div class="h-24 md:h-40 w-full flex items-end justify-end">
          <button
            class="h-12 w-full md:w-32 bg-green-700 rounded-md text-white text-lg font-semibold"
          >
            پرداخت
          </button>
        </div>
      </div>
      <!-- <div class="h-full w-4/12 bg-white rounded-lg hidden lg:block shadow">
        <div></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import Swal from "sweetalert2";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const invoicedata = ref({});
    const invoice = ref({});
    const coupon_name = ref("");
    store
      .dispatch("invoiceShow", route.params.id)
      .then(function (res) {
        invoicedata.value = res.response.data;
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "...خطا",
          text: "لینک اشنتباه می باشد",
        });
        useRouter().push({ path: `/` });
      });
    watchEffect(() => {
      if (invoicedata.value.status == 3) {
        invoice.value = invoicedata.value.data.output;
      }
    });
    let today = new Date().toLocaleDateString("fa-IR");
    const invoiceUpdate = () => {
      store.dispatch("invoiceUpdate", [route.params.id, coupon_name.value]);
    };
    return {
      today,
      invoicedata,
      invoice,
      invoiceUpdate,
      coupon_name,
    };
  },
};
</script>

<style scoped>
.bg-blob {
  background: #6b63ff10;
}
.bg-blob-80 {
  background: #6373ff8a;
}
</style>
