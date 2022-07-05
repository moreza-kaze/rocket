<template>
  <div
    dir="rtl"
    class="w-full min-h-screen bg-indigo-50 flex flex-row justify-center pt-24 lg:pt-36"
  >
    <div
      class="flex flex-row w-11/12 lg:w-8/12 h-117 bg-white rounded-3xl shadow-xl"
    >
      <div class="w-full md:w-1/2 h-full p-10">
        <p class="font-semibold text-3xl">ورود</p>
        <form @submit.prevent="login()" class="flex flex-col">
          <input
            v-model="logindata.email"
            class="w-full lg:w-11/12 h-10 rounded-lg border-solid border-2 border-gray-200 focus:outline-none focus:border-sky-200 focus:ring-sky-200 focus:ring-1 mt-7 px-5 py-5"
            type="text"
            placeholder="ایمیل"
          />
          <input
            v-model="logindata.password"
            class="w-full lg:w-11/12 h-10 rounded-lg border-solid border-2 border-gray-200 focus:outline-none focus:border-sky-200 focus:ring-sky-200 focus:ring-1 mt-7 px-5 py-5"
            type="password"
            placeholder="رمز عبور"
          />
          <button
            class="bg-green-200 w-full lg:w-11/12 h-9 hover:bg-green-500 rounded-lg mt-7"
            type="submit"
          >
            احراز هویت
          </button>
        </form>
        <router-link class="text-gray-300 mt-10" to="/"
          >ثبت نام کنید</router-link
        >
      </div>
      <div class="hidden lg:w-1/2 h-full lg:p-10 lg:flex justify-center">
        <img
          class="h-full"
          src="../assets/undraw_security_re_a2rk.svg"
          alt="login"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const logindata = reactive({
      email: "",
      password: "",
    });
    const login = () => {
      store
        .dispatch("login", [logindata.email, logindata.password])
        .then((res) => {
          if (res == "ok") {
            logindata.email = "";
            logindata.password = "";
            router.push("/admin/dashboard");
          }
        });
    };
    return {
      logindata,
      login,
    };
  },
};
</script>

<style></style>
