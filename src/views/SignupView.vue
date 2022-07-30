<template>
  <div class="flex flex-row h-full w-full min-h-screen flex-wrap">
    <div
      class="w-full lg:w-7/12 h-full min-h-screen bg-blob bg-center flex justify-center items-center px-10 py-5 md:px-16 lg:py-20"
    >
      <div
        :class="{ 'h-117': !panels || loading, 'h-full': panels }"
        class="w-full md:w-5/6 2xl:w-8/12 min-h-full flex flex-col backdrop-blur-xl bg-white/40 rounded-lg shadow p-9 overflow-hidden"
      >
        <div
          v-if="!loading"
          :class="{ 'w-0 hidden': panels, 'w-full': !panels }"
          class="h-full overflow-hidde"
        >
          <h2 class="w-full text-2xl font-semibold">ثبت نام</h2>
          <h5 class="w-full mt-2">در کمتر یک دقیقه عضو شوید</h5>
          <form @submit.prevent="register()" class="flex flex-col">
            <input
              v-model="info.fullName"
              class="mt-5 h-10 px-4 bg-gray-100 shadow-md rounded-xl"
              type="text"
              placeholder="نام و نام‌خانوادگی"
            />
            <input
              v-model="info.nationalCode"
              class="mt-5 h-10 px-4 bg-gray-100 shadow-md rounded-xl"
              type="text"
              placeholder="کد ملی"
            />
            <input
              v-model="info.mobile_number"
              class="mt-5 h-10 px-4 bg-gray-100 shadow-md rounded-xl"
              type="text"
              placeholder="شماره تلفن همراه"
            />
            <span class="text-gray-600 mx-3 mt-5"
              >با این ثبت نام قوانین را میپزیرم</span
            >
            <button
              class="w-full bg-green-600 h-10 mt-6 rounded-2xl hover:text-white hover:font-bold hover:shadow"
            >
              ثبت نام
            </button>
          </form>
        </div>
        <div
          v-if="!loading"
          :class="{ 'w-0 hidden': !panels, 'w-full': panels }"
          class="h-full overflow-hidden px-6"
        >
          <div>
            <p class="font-bold text-2xl text-gray-800">
              کدام پنل پیامکی را میخواهید؟
            </p>
          </div>
          <div v-for="(product, index) in products" :key="index">
            <div
              @click="createinvoice(product.product_id)"
              class="w-full bg-gray-100 rounded-lg my-5 flex items-center justify-between p-6 shadow-md hover:shadow-xl"
            >
              <div class="flex flex-col items-start justify-between">
                <span class="mb-5 font-bold text-2xl">{{
                  product.product_name
                }}</span>
                <span class="text-xs">پیامکی {{ product.sms_price }} ت</span>
              </div>
              <div class="flex flex-col items-end justify-between">
                <span class="mb-5"
                  ><span class="font-bold text-2xl">{{
                    product.amount_final
                  }}</span
                  ><del class="text-red-600">{{ product.amount }}</del> هزار
                  تومان</span
                >
                <span class="text-xs"
                  >{{ product.product_gift }} پیامک هدیه</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="h-117 flex flex-col justify-center items-center"
          v-else-if="loading"
        >
          <LoadingComponent />
          <span class="mt-4">لطفا چند لحظه صبر کنید</span>
        </div>
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
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import LoadingComponent from "../components/LoadingComponent.vue";
export default {
  setup() {
    const loading = ref(false);
    const info = reactive({
      fullName: "",
      nationalCode: "",
      mobile_number: "",
    });
    const custom_id = ref("");
    const panels = ref(false);
    const store = useStore();
    const router = useRouter();
    store.dispatch("getPanel");
    const products = computed(() => store.getters["getUserproducts"]);
    const register = () => {
      loading.value = true;
      store.dispatch("getPanel");
      if (
        info.fullName.length > 2 &&
        info.nationalCode.length > 2 &&
        info.mobile_number.length > 2
      ) {
        store.dispatch("register", info).then(function (response) {
          console.log(response);
          if (response.response.data.status === 2) {
            panels.value = true;
            custom_id.value = response.response.data.data.output;
          } else if (response.response.data.status === 0) {
            Swal.fire({
              icon: "error",
              title: "...خطا",
              text: response.response.data.error.message,
            });
          } else if (response.response.data.status === 5) {
            Swal.fire({
              icon: "error",
              title: "...خطا",
              text: response.response.data.error[0],
            });
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "...خطا",
          text: "تمام گزینه ها را تکمیل بفرمایید",
        });
      }
      loading.value = false;
    };
    const createinvoice = (id) => {
      loading.value = true;
      store
        .dispatch("createinvoice", [id, custom_id.value])
        .then(function (res) {
          if (res.response.data.status === 2) {
            router.push({ path: `/invoice/${res.response.data.data.output}` });
          } else if (res.response.data.status === 0) {
            Swal.fire({
              icon: "error",
              title: "...خطا",
              text: res.response.data.error.message,
              confirmButtonText: "حله",
              preConfirm: () => {
                window.location.reload();
              },
            });
          }
        });
    };
    return {
      products,
      panels,
      register,
      createinvoice,
      info,
      loading,
    };
  },
  components: { LoadingComponent },
};
</script>

<style scoped>
.bg-blob {
  background: #6c63ff;
}
</style>
