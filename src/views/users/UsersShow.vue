<template>
  <div class="m-4 h-full">
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
        <span class="mr-3 font-medium text-lg md:text-2xl"
          ><span class="hidden md:inline">مدیریت</span> کاربران</span
        >
      </div>
      <div class="flex flew-row justify-center items-center">
        <span
          ><form
            @submit.prevent=""
            class="relative ml-1 md:ml-2 flex items-center"
          >
            <input type="text" class="h-9 w-56 rounded-2xl" /><button
              class="absolute left-0 top-0 mt-1 ml-1"
            >
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
        <span class="hidden md:inline"
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
        ></span>
      </div>
    </div>
    <!-- start user table  -->
    <div class="flex justify-center items-center mt-5">
      <!-- make table with div -->
      <div name="table" class="flex flex-col w-full h-full">
        <!-- main of table -->
        <div name="tmain1" class="flex flex-row sm:flex-col">
          <!-- table head on sm(640PX)  -->
          <div
            name="thead"
            class="sm:flex flex-col w-1/2 hidden sm:w-full sm:my-2 bg-maincolor-800 py-2 rounded-xl"
          >
            <!-- table row -->
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <!-- table col  -->
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 mr-2 rounded-md w-1/12 text-center overflow-x-hidden"
              >
                ردیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                نام‌و‌نام‌خانوادگی
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                تلفن‌همراه
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                نام‌کاربری
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                رمز‌عبور
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                تخفیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 ml-2 rounded-md w-3/12 text-center overflow-x-hidden"
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
          class="flex flex-row sm:flex-col justify-around"
        >
          <!-- table head -->
          <div
            name="thead"
            class="sm:hidden flex flex-col w-5/12 sm:w-full sm:my-2 bg-maincolor-800 py-2 rounded-xl"
          >
            <!-- table row -->
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <!-- table col  -->
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                ردیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                نام‌و‌نام‌خانوادگی
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                تلفن‌همراه
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                نام‌کاربری
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                رمز‌عبور
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                تخفیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 overflow-x-hidden"
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
            class="flex flex-col w-6/12 sm:w-full sm:my-2 bg-whitetransparent-600 py-2 rounded-xl"
          >
            <!-- table row -->
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <!-- table col -->
              <div
                name="th"
                class="py-1 mx-1 mb-2 mr-2 sm:mb-0 rounded-md w-11/12 sm:w-1/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                {{ user.id }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                {{ user.fullName }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                {{ user.mobile_number }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                {{ user.username }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                {{ user.password }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                {{ user.invoice_id }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                {{ user.payment_result }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-0 sm:ml-2 sm:mb-0 rounded-md w-11/12 sm:w-3/12 text-center overflow-x-hidden bg-maincolor-900 text-white"
              >
                1
              </div>
              <!-- table col end -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table body end-->
        </div>
        <!-- orginal table end -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const users = ref();
    users.value = [
      {
        id: 16,
        fullName: "Prof. Lucious",
        mobile_number: "+1-323-529-1054",
        username: "sidney61",
        password: '"qCf)&b',
        invoice_id: 16,
        payment_result: "Nemo.",
        coupon_id: 23,
        status: "Natus qui.",
      },
      {
        id: 12,
        fullName: "Dr. Ivory II",
        mobile_number: "1-562-647-3688",
        username: "wehner.jocelyn",
        password: "nqn`MG'')",
        invoice_id: 6,
        payment_result: "Veniam.",
        coupon_id: 21,
        status: "Dolorum.",
      },
      {
        id: 5,
        fullName: "Vincenzo Johns",
        mobile_number: "+1.463.760.9935",
        username: "kenya.buckridge",
        password: "sk?YO/",
        invoice_id: 11,
        payment_result: "Labore.",
        coupon_id: 35,
        status: "Dicta.",
      },
      {
        id: 56,
        fullName: "Idella Fritsch",
        mobile_number: "1-657-387-3204",
        username: "chyna36",
        password: "_,zsyRh'+x",
        invoice_id: 27,
        payment_result: "Ipsam.",
        coupon_id: 16,
        status: "Vel et.",
      },
      {
        id: 34,
        fullName: "Fredrick Schumm",
        mobile_number: "+1 (484) 258-9273",
        username: "parisian.marisa",
        password: "C%<x'39,`,W*R",
        invoice_id: 43,
        payment_result: "Tenetur.",
        coupon_id: 2,
        status: "Ducimus.",
      },
      {
        id: 29,
        fullName: "Caden Schowalter",
        mobile_number: "+1.385.601.6459",
        username: "salvatore72",
        password: "M9WfxrJ8'N7WzetIN=*",
        invoice_id: 50,
        payment_result: "Quaerat.",
        coupon_id: 13,
        status: "Nostrum.",
      },
    ];
    console.log(users);
    return { users };
  },
};
</script>

<style scoped></style>
