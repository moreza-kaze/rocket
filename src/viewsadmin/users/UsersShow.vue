<template>
  <div class="m-4 sm:m-0 sm:px-6 sm:mt-4 min-h-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14">
      <div class="flex items-center justify-center text-xl">
        <span class="mt-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            /></svg
        ></span>
        <span class="mr-3 font-bold text-lg md:text-2xl"
          ><span class="hidden md:inline">مدیریت</span> کاربران</span
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
              class="h-9 w-56 rounded-2xl px-2"
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
        <router-link to="/users/create" class="hidden md:inline"
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
            class="sm:flex flex-col w-1/2 hidden sm:w-full rounded-lg font-semibold sm:rounded-none sm:rounded-t-lg bg-maincolor-200 py-2 border-solid border-gray-300"
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
                نام‌ و ‌نام‌ خانوادگی
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                تلفن ‌همراه
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                نام‌ کاربری
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                رمز ‌عبور
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-1/12 text-center overflow-x-hidden"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-1/12 text-center overflow-x-hidden"
              >
                تخفیف
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 ml-2 rounded-md w-3/12 text-center overflow-x-hidden"
                text-center
              >
                اعمال
              </div>
              <!-- table col end  -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table head on sm(640PX) ens  -->
        </div>
        <!-- orginal table  -->
        <div
          name="tmain2"
          v-for="(user, index) in users"
          :key="index"
          class="flex flex-row sm:flex-col justify-around my-2 sm:my-0"
        >
          <!-- table head -->
          <div
            name="thead"
            class="sm:hidden flex flex-col w-5/12 sm:w-full sm:mb-2.5 bg-maincolor-200 py-2 rounded-xl"
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
                نام‌ و ‌نام‌خانوادگی
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                تلفن‌ همراه
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                نام‌ کاربری
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                رمز‌ عبور
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                تخفیف
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 overflow-x-hidden"
              >
                اعمال
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
                class="py-1 mx-1 mb-2 mr-1 sm:mb-0 w-11/12 sm:w-1/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ user.invoice_id }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ user.fullName }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ user.mobile_number }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ user.username }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ user.password }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-1/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ user.payment_result }}
              </div>

              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 w-11/12 sm:w-1/12 sm:border-0 text-center overflow-x-hidden sm:bg-transparent text-gray-600 border-t-2 border-solid border-gray-300"
              >
                {{ user.coupon_id ? "دارد" : "ندارد" }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-0 sm:ml-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-3/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600 flex flex-row justify-evenly"
              >
                <button @click="showUserInfo(user.invoice_id, index)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <button @click="setCoupon(user.invoice_id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </button>
                <button @click="deleteUser(user.id)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
  <div id="my-template"></div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import Swal from "sweetalert2";

export default {
  setup() {
    const reloadUser = ref(false);
    const pagination = ref(true);
    const searchInput = ref("");
    const page = ref(1);
    const store = useStore();
    watchEffect(() => {
      if (page.value > store.state.usersLastPage) {
        previous();
      }
      if (page.value < 1) {
        plus();
      }
      store.dispatch("getDataUser", page.value);
      if (searchInput.value.length < 7) {
        pagination.value = true;
      }
      if (searchInput.value.length > 7) {
        pagination.value = false;
      }
      if (reloadUser.value == true) {
        store.dispatch("getDataUser", page.value);
        reloadUser.value = false;
      }
    });
    const users = computed(() => store.getters["getDataUser"]);

    function plus() {
      page.value++;
    }
    function previous() {
      page.value--;
    }
    const searchfunc = () => {
      if (searchInput.value == "") {
        store.dispatch("getDataUser", page.value);
      }
      if (searchInput.value.length > 0) {
        store.dispatch("searchUser", searchInput.value);
      }
    };

    const setCoupon = (x) => {
      Swal.fire({
        title: "کد تخفیف مورد نظر خود را وارد نمایید",
        input: "text",
        customClass: { title: "font-main text-lg", input: "text-center mx-32" },
        inputAttributes: {
          autocapitalize: "off",
        },
        cancelButtonText: "نه",
        confirmButtonText: "تخفیف بده",
        showLoaderOnConfirm: true,
        preConfirm: (coupon) => {
          return store.dispatch("setCoupon", [coupon, x]);
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
    };
    const deleteUser = (userId) => {
      Swal.fire({
        title: "از حذف کاربر اطمینان دارید؟",
        icon: "question",
        iconHtml: "!",
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "#dc3741",
        cancelButtonColor: "rgb(83 177 30)",
        preConfirm: () => {
          reloadUser.value = true;
          return store.dispatch("deleteUser", Number(userId));
        },
      });
      reloadUser.value = true;
    };

    const showUserInfo = (userInvoiceId, index) => {
      store.dispatch("showUserInfo", userInvoiceId);
      const showUserInfo = computed(() => store.state.showUserInfo);
      watch(showUserInfo, async (newShowUserInfo, oldShowUserInfo) => {
        Swal.fire({
          title: `${showUserInfo.value.fullName}(${users.value[
            index
          ].invoice_id?.toLocaleString("fa")})`,
          html: `<div dir="rtl" class="flex flex-col">
                <div class="flex flex-row justify-center">
                  <span>مبلغ پرداختی : </span><span>${showUserInfo.value.amount_final?.toLocaleString(
                    "fa"
                  )}</span>
                </div>
                <div class="flex flex-row justify-center">
                  <span>نام پنل : </span><span class="">${
                    showUserInfo.value.product_name
                  }</span>
                </div>
                <div class="flex flex-row justify-center">
                  <span>کد فاکتور:</span><span>${
                    showUserInfo.value.invoice_code
                  }</span>
                </div>
                <div class="flex flex-row justify-center">
                  <span>تاریخ ساخت : </span><span>${
                    showUserInfo.value.created_at
                  }</span>
                </div>
                <div class="flex flex-row justify-center">
                  <span>درگاه:</span><span>${
                    showUserInfo.value.payment_gateway
                  }</span>
                </div>
              </div>`,

          focusConfirm: false,
          confirmButtonText: "ممنون",
        });
        return { oldShowUserInfo, newShowUserInfo };
      });
    };
    return {
      users,
      page,
      plus,
      previous,
      searchInput,
      searchfunc,
      pagination,
      setCoupon,
      deleteUser,
      showUserInfo,
    };
  },
};
</script>

<style scoped></style>
