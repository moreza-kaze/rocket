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
        <span class="mr-3 font-medium text-2xl">مدیریت کاربران</span>
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
    <div class="flex justify-center items-center mt-5">
      <div name="table" class="flex flex-col w-full h-full">
        <div name="tmain1" class="flex flex-row sm:flex-col">
          <div
            name="thead"
            class="sm:flex flex-col w-1/2 hidden sm:w-full sm:my-2 bg-maincolor-800 py-2 rounded-xl"
          >
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <div
                name="th"
                class="bg-gray-50 py-1 mx-1 mr-2 rounded-xl w-1/12 text-center"
              >
                ردیف
              </div>
              <div
                name="th"
                class="bg-gray-50 py-1 mx-1 rounded-xl w-2/12 text-center"
              >
                نام‌و‌نام‌خانوادگی
              </div>
              <div
                name="th"
                class="bg-gray-50 py-1 mx-1 rounded-xl w-2/12 text-center"
              >
                تلفن‌همراه
              </div>
              <div
                name="th"
                class="bg-gray-50 py-1 mx-1 rounded-xl w-2/12 text-center"
              >
                نام‌کاربری
              </div>
              <div
                name="th"
                class="bg-gray-50 py-1 mx-1 rounded-xl w-2/12 text-center"
              >
                رمز‌عبور
              </div>
              <div
                name="th"
                class="bg-gray-50 py-1 rounded-xl w-2/12 text-center"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="bg-gray-50 py-1 mx-1 rounded-xl w-2/12 text-center"
              >
                تخفیف
              </div>
              <div
                name="th"
                class="bg-gray-50 py-1 mx-1 ml-2 rounded-xl w-3/12 text-center"
                text-center
              >
                اعمال
              </div>
            </div>
          </div>
        </div>
        <div name="tmain2" class="flex flex-row sm:flex-col justify-around">
          <div
            name="thead"
            class="sm:hidden flex flex-col w-5/12 sm:w-full sm:my-2 bg-maincolor-800 py-2 rounded-xl"
          >
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <div
                name="th"
                class="bg-gray-100 py-1 px-4 rounded-lg w-11/12 mb-2"
              >
                ردیف
              </div>
              <div
                name="th"
                class="bg-gray-100 py-1 px-4 rounded-lg w-11/12 mb-2"
              >
                نام و نام خانوادگی
              </div>
              <div
                name="th"
                class="bg-gray-100 py-1 px-4 rounded-lg w-11/12 mb-2"
              >
                تلفن همراه
              </div>
              <div
                name="th"
                class="bg-gray-100 py-1 px-4 rounded-lg w-11/12 mb-2"
              >
                نام کاربری
              </div>
              <div
                name="th"
                class="bg-gray-100 py-1 px-4 rounded-lg w-11/12 mb-2"
              >
                رمز عبور
              </div>
              <div
                name="th"
                class="bg-gray-100 py-1 px-4 rounded-lg w-11/12 mb-2"
              >
                وضعیت
              </div>
              <div
                name="th"
                class="bg-gray-100 py-1 px-4 rounded-lg w-11/12 mb-2"
              >
                تخفیف
              </div>
              <div name="th" class="bg-gray-100 py-1 px-4 rounded-lg w-11/12">
                اعمال
              </div>
            </div>
          </div>
          <div
            name="tbody"
            class="flex flex-col w-5/12 sm:w-full sm:my-2 bg-gray-400 py-2 rounded-xl"
          >
            <div
              name="tr"
              class="w-full flex flex-col sm:flex-row items-center justify-around"
            >
              <div name="th">1</div>
              <div name="th">1</div>
              <div name="th">1</div>
              <div name="th">1</div>
              <div name="th">1</div>
              <div name="th">1</div>
              <div name="th">1</div>
              <div name="th">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (min-width: 640px) {
  norepeat:not(:first-child) {
    display: none;
  }
}
</style>
