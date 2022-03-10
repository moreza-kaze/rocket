<template>
  <!-- start sidebar w-64 -->
  <div
    class="hidden h-screen bg-white md:flex flex-col md:w-24 lg:w-56 shadow-xl md:hover:bg-red-700 hover:w-56"
  >
    <div
      class="flex items-center pr-1 pt-3 md:pr-5 lg:pr-1 overflow-x-hidden overflow-y-hidden"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.256"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
          />
        </svg>
      </span>
      <span class="mr-10 lg:mr-0 mt-1 text-2xl font-medium">راکت</span>
    </div>
    <div>
      <ul class="px-3 py-5 flax justify-center w-full">
        <!----- Dasboard ------>
        <li
          class="flex items-center bg-maincolor-999 h-14 rounded-xl overflow-x-hidden"
        >
          <span class="mx-5 md:mx-6 text-white"
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
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </svg> </span
          ><span class="text-white font-medium"
            ><router-link to="/dashboard">داشبورد</router-link></span
          >
          <span></span>
        </li>
        <!----- end Dasboard ------>
        <!--                -->
        <!----- users ------>
        <li
          class="flex items-center justify-between bg-maincolor-100 h-14 rounded-xl mt-5 overflow-x-hidden"
        >
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6 text-maincolor-999"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="text-maincolor-999 font-medium"
              ><router-link to="/dashboard">کاربران</router-link></span
            >
          </div>
          <span class="ml-3 text-maincolor-999"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end users ------>
        <!--                -->
        <!----- coupons ------>
        <li
          class="flex items-center justify-between bg-maincolor-100 h-14 rounded-xl mt-5 overflow-x-hidden"
        >
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6 text-maincolor-999"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
              />
            </svg>

            <span class="text-maincolor-999 font-medium"
              ><router-link to="/dashboard">کوپن</router-link></span
            >
          </div>
          <span class="ml-3 text-maincolor-999"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end coupons ------>
        <!--                -->
        <!----- sms ------>
        <li
          class="flex items-center justify-between bg-maincolor-100 h-14 rounded-xl mt-5 overflow-x-hidden"
        >
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6 text-maincolor-999"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="text-maincolor-999 font-medium"
              ><router-link to="/dashboard">پیامک</router-link></span
            >
          </div>
          <span class="ml-3 text-maincolor-999"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end sms ------>
        <!--                -->
        <!----- setting ------>
        <li
          class="flex items-center justify-between bg-maincolor-100 h-14 rounded-xl mt-5 overflow-x-hidden"
        >
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline h-6 w-6 mx-5 md:mx-6 text-maincolor-999"
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
            <span class="text-maincolor-999 font-medium"
              ><router-link to="/dashboard">تنظیمات</router-link></span
            >
          </div>
          <span class="ml-3 text-maincolor-999"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              /></svg
          ></span>
        </li>
        <!----- end setting ------>
      </ul>
    </div>
  </div>
  <!-- end sidebar -->
</template>

<script>
export default {};
</script>

<style></style>
