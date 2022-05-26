<template>
  <div class="m-4 sm:m-0 sm:px-6 sm:mt-4 min-h-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14">
      <div class="flex items-center justify-center text-xl">
        <span class="mt-2"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.75"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            /></svg
        ></span>
        <span class="mr-3 font-bold text-lg md:text-2xl"
          ><span class="hidden md:inline">مدیریت</span> کوپن</span
        >
      </div>
      <div class="flex flew-row justify-center items-center">
        <span
          ><form
            @submit.prevent="searchfunc()"
            class="relative ml-1 md:ml-2 flex items-center"
          >
            <input
              v-model="searchInput"
              type="text"
              class="h-9 w-56 rounded-2xl pr-2"
            /><button class="absolute left-0 top-0 mt-1 ml-1">
              <svg
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
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button></form
        ></span>
        <router-link to="/admin/coupon/create" class="hidden md:inline"
          ><svg
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
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
        ></router-link>
      </div>
    </div>
    <!-- start user table  -->
    <div class="flex justify-center items-center mt-1 p-1">
      <!-- make table with div -->
      <div name="table" class="flex flex-col w-full h-full">
        <!-- main of table -->
        <div name="tmain1" class="flex flex-row sm:flex-col shadow-xl">
          <!-- table head on sm(640PX)  -->
          <div
            name="thead"
            class="sm:flex flex-col w-1/2 hidden sm:w-full rounded-lg font-semibold sm:rounded-none sm:rounded-t-lg bg-coupongreen-100 py-2 border-solid border-gray-300"
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
                ردیف
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                کد تخفیف
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                تعداد اختصاص یافته
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                قابل استفاده
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                مقدار تخفیف
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 ml-2 rounded-md w-3/12 text-center overflow-x-hidden"
                text-center
              >
                فعالیت
              </div>
              <!-- table col end  -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table head on sm(640PX) ens  -->
        </div>
        <!-- orginal table      -->
        <div
          v-for="(coupon, index) in coupons"
          :key="index"
          name="tmain2"
          class="flex flex-row sm:flex-col justify-around my-2 sm:my-0"
        >
          <!-- table head -->
          <div
            name="thead"
            class="sm:hidden flex flex-col w-5/12 sm:w-full sm:mb-2.5 bg-coupongreen-100 py-2 rounded-xl"
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
                ردیف
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                کد تخفیف
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                تعداد اختصاص یافته
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                قابل استفاده
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                مقدار تخفیف
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 overflow-x-hidden"
              >
                فعالیت
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
            class="flex flex-col w-6/12 sm:w-full bg-white py-1.5 rounded-xl sm:rounded-none border-0 sm:border-t-2 border-solid border-gray-300"
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
                {{ coupon.id }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ coupon.coupon_name }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600 flex flex-row justify-center"
              >
                <span @click="editTotalAmount(coupon.id)" class="cursor-pointer"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    /></svg
                ></span>
                <span class="mr-2">{{ coupon.total_amount }}</span>
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ coupon.total_amount - coupon.used_amount }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center sm:bg-transparent text-gray-600"
              >
                {{ coupon.discount_value }}
                {{ coupon.discount_type == "percent" ? "درصد" : "تومان" }}
              </div>
              <div
                name="th"
                class="h-full py-1 mx-1 mb-0 sm:ml-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-3/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                <button @click="actionCoupon(coupon.id, coupon.active)">
                  <div
                    :class="[
                      {
                        'bg-green-200': coupon.active == 1,
                        'bg-red-200': coupon.active == 0,
                      },
                    ]"
                    class="h-2/12 w-ful rounded-3xl px-3"
                  >
                    <span>{{
                      coupon.active ? "فعال بشه" : "غیر فعال بشه"
                    }}</span>
                  </div>
                </button>
              </div>
              <!-- table col end -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table body end-->
        </div>
        <div
          :class="{ hidden: !pagination }"
          class="w-full h-12 bg-transparent sm:bg-white rounded-b-md flex flex-row justify-center items-center border-0 sm:border-y-2 border-solid border-gray-300"
        >
          <span class="cursor-pointer" @click="previous()"
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
          <span class="cursor-pointer" @click="plus()"
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
import { computed, watchEffect } from "@vue/runtime-core";
import Swal from "sweetalert2";
export default {
  setup() {
    const pagination = ref(true);
    const couponUpdate = ref(false);
    const searchInput = ref("");
    const page = ref(1);
    const store = useStore();
    watchEffect(() => {
      if (page.value > store.state.couponsLastPage) {
        previous();
      }
      if (page.value < 1) {
        plus();
      }
      if (searchInput.value.length < 1) {
        pagination.value = true;
      }
      if (searchInput.value.length > 1) {
        pagination.value = false;
      }
      if (couponUpdate.value == true) {
        store.dispatch("getDataCoupon", page.value);
        couponUpdate.value = false;
      }
      store.dispatch("getDataCoupon", page.value);
    });

    const coupons = computed(() => store.getters["getDataCoupon"]);

    const searchfunc = () => {
      if (searchInput.value == "") {
        store.dispatch("getDataCoupon", page.value);
      }
      if (searchInput.value.length > 0) {
        store.dispatch("searchCoupon", searchInput.value);
      }
    };

    function plus() {
      page.value++;
    }
    function previous() {
      page.value--;
    }
    const actionCoupon = (id, active) => {
      store.dispatch("actionCoupon", [id, !active]);
      couponUpdate.value = true;
    };
    const editTotalAmount = (id) => {
      Swal.fire({
        title: "مقدار جدیدی برای کوپن خود انتخاب کنید",
        input: "text",
        customClass: { title: "font-main text-lg", input: "text-center mx-32" },
        inputAttributes: {
          autocapitalize: "off",
        },
        cancelButtonText: "نه",
        confirmButtonText: "اضافه کن",
        showLoaderOnConfirm: true,
        preConfirm: (newAmount) => {
          return store
            .dispatch("couponRecharge", [id, newAmount])
            .then(function (res) {
              console.log(res);
              if (res.response.data.status != undefined) {
                store.dispatch("getDataCoupon", page.value);
              }
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
    };
    return {
      coupons,
      page,
      plus,
      previous,
      searchfunc,
      pagination,
      searchInput,
      actionCoupon,
      editTotalAmount,
    };
  },
};
</script>

<style></style>
