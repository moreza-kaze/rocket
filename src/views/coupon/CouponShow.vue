<template>
  <div class="m-4 h-full">
    <div class="w-full flex items-center justify-between h-20 sm:h-14">
      <div class="flex items-center justify-center text-xl">
        <span class="mt-2"
          ><svg
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
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            /></svg
        ></span>
        <span class="mr-3 font-medium text-lg md:text-2xl"
          ><span class="hidden md:inline">مدیریت</span> کوپن</span
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
            class="sm:flex flex-col w-1/2 hidden sm:w-full sm:my-2 bg-coupongreen-999 py-2 rounded-xl"
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
                کد تخفیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                تعداد اختصاص یافته
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                قابل استفاده
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                مقدار تخفیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 mx-1 ml-2 rounded-md w-3/12 text-center overflow-x-hidden"
                text-center
              >
                عملیات
              </div>
              <!-- table col end  -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table head on sm(640PX) ens  -->
        </div>
        <!-- orginal table -->
        <div name="tmain2" class="flex flex-row sm:flex-col justify-around">
          <!-- table head -->
          <div
            name="thead"
            class="sm:hidden flex flex-col w-5/12 sm:w-full sm:my-2 bg-coupongreen-999 py-2 rounded-xl"
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
                کد تخفیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                تعداد اختصاص یافته
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                قابل استفاده
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                مقدار تخفیف
              </div>
              <div
                name="th"
                class="bg-whitetransparent-500 py-1 px-4 rounded-lg w-11/12 overflow-x-hidden"
              >
                عملیات
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
                class="py-1 mx-1 mb-2 mr-2 sm:mb-0 rounded-md w-11/12 sm:w-1/12 text-center overflow-x-hidden bg-coupongreen-999 text-white"
              >
                1
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-coupongreen-999 text-white"
              >
                1
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-coupongreen-999 text-white"
              >
                1
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-coupongreen-999 text-white"
              >
                1
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 rounded-md w-11/12 sm:w-2/12 text-center overflow-x-hidden bg-coupongreen-999 text-white"
              >
                1
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-0 sm:ml-2 sm:mb-0 rounded-md w-11/12 sm:w-3/12 text-center overflow-x-hidden bg-coupongreen-999 text-white"
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
export default {};
</script>

<style></style>
