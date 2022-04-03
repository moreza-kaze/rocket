<template>
  <div class="h-full w-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14 m-4">
      <div class="flex items-center justify-center text-xl">
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
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-2xl">ایجاد کوپن</span>
      </div>
    </div>
    <div
      class="flex w-full justify-center items-center px-3 md:px-16 h-full mb-10"
    >
      <div class="w-full h-full bg-whitetransparent-500 rounded-2xl">
        <form
          class="w-full h-full flex flex-col md:flex-row justify-around items-center mt-0 p-10"
        >
          <div
            class="h-full w-full md:w-5/6 flex flex-col justify-around items-center md:items-start"
          >
            <input
              class="bg-coupongreen-300 w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="کد تخفیف"
              type="text"
            />
            <input
              class="bg-coupongreen-300 w-11/12 h-10 md:h-11 2xl:3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="مقدار تخفیف"
              type="text"
            />
            <input
              class="appearance-none bg-coupongreen-300 h-10 md:h-11 2xl:h-3/12 w-11/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="واحد ارزیابی"
              type="text"
            />
            <input
              class="bg-coupongreen-300 w-11/12 h-10 md:h-11 2xl:h-3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl mt-3 md:mt-0 p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="تعداد اخصاص یافته"
              type="text"
            />
            <input
              class="bg-coupongreen-300 w-11/12 h-10 md:h-11 2xl:h-3/12 pr-3 md:pr-5 placeholder:text-gray-400 border border-white rounded-xl p-2 mt-3 md:mt-0 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="قابل استفاده"
              type="text"
            />
          </div>
          <div
            class="h-96 md:h-full my-5 w-full md:w-9/12 bg-white rounded-lg flex flex-col justify-around items-center p-4"
          >
            <span class="text-gray-400"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-20 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                /></svg
            ></span>
            <span class="text-coupongreen-700 text-xl md:text-4xl">sina20</span>
            <span class="text-coupongreen-700 text-lg md:text-2xl">20%</span>
            <span class="text-coupongreen-700 text-base md:text-xl"
              >65.467</span
            >

            <button
              class="bg-gradient-to-r from-indigo-500 to-purple-400 hover:from-purple-600 hover:to-indigo-600 transition-colors duration-500 h-10 text-white rounded-xl w-9/12"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
