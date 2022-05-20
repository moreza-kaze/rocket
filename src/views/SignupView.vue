<template>
  <div class="flex flex-row h-full w-full min-h-screen flex-wrap">
    <div
      class="w-full lg:w-7/12 h-full min-h-screen bg-blob bg-center flex justify-center items-center px-9 py-20"
    >
      <div
        class="w-full h-128 min-h-full flex flex-col backdrop-blur-xl bg-white/40 rounded-lg shadow p-9"
      >
        <h2 class="w-full text-2xl font-semibold">ثبت نام</h2>
        <h5 class="w-full mt-2">در کمتر یک دقیقه عضو شوید</h5>
        <form class="flex flex-col">
          <input
            class="mt-5 h-10 px-4 bg-gray-100 shadow-md rounded-xl"
            type="text"
            placeholder="نام و نام‌خانوادگی"
          />
          <input
            class="mt-5 h-10 px-4 bg-gray-100 shadow-md rounded-xl"
            type="text"
            placeholder="کد ملی"
          />
          <input
            class="mt-5 h-10 px-4 bg-gray-100 shadow-md rounded-xl"
            type="text"
            placeholder="شماره تلفن همراه"
          />
          <span class="text-gray-600 mx-3 mt-5"
            >با این ثبت نام قوانین را میپزیرم</span
          >
          <button class="w-full bg-green-600 h-10 mt-6 rounded-2xl">
            ثبت نام
          </button>
        </form>
      </div>
    </div>
    <div
      class="w-full lg:w-5/12 hidden lg:flex justify-center items-center px-20"
    >
      <img src="../assets/undraw_personal_opinions_re_qw29.svg" alt="singup" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-blob {
  background: #6c63ff;
}
</style>
