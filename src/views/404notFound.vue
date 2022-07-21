<script></script>
<template>
  <main
    class="h-screen w-full flex flex-col justify-center items-center bg-gray-50"
  >
    <h1 class="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
    <div class="bg-maincolor-999 px-2 rounded rotate-12 absolute text-xl">
      اشنتباه اومدی
    </div>
    <button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-maincolor-600 group active:text-maincolor-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-maincolor-999 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span
          class="relative block px-8 py-3 bg-gray-100 border border-current text-gray-800"
        >
          <router-link to="/">درستش کنید</router-link>
        </span>
      </a>
    </button>
  </main>
</template>
