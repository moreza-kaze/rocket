<template>
  <div class="m-4 sm:m-0 sm:px-6 sm:mt-4 min-h-full flex flex-col">
    <div class="w-full flex items-center justify-between h-20 sm:h-14">
      <div class="flex items-center justify-center text-xl">
        <span class=""
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
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            /></svg
        ></span>
        <span class="mr-3 font-bold text-lg md:text-2xl">محصولات</span>
      </div>
      <div class="flex flew-row justify-center items-center">
        <span></span>
        <router-link to="/product/create" class="hidden md:inline"
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
            class="sm:flex flex-col w-1/2 hidden sm:w-full rounded-lg font-semibold sm:rounded-none sm:rounded-t-lg bg-product py-2 border-solid border-gray-300"
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
                کد محصول
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                نام محصول
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                مبلغ
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                پیامک
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                پیامک هدیه
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 rounded-md w-2/12 text-center overflow-x-hidden"
              >
                تعرفه
              </div>
              <div
                name="th"
                class="sm:bg-transparent py-1 mx-1 ml-2 rounded-md w-3/12 text-center overflow-x-hidden"
                text-center
              >
                عملیات
              </div>
              <!-- table col end  -->
            </div>
            <!-- table row end -->
          </div>
          <!-- table head on sm(640PX) ens   -->
        </div>
        <!-- orginal table  -->
        <div
          v-for="(product, index) in products"
          :key="index"
          name="tmain2"
          class="flex flex-row sm:flex-col justify-around my-2 sm:my-0"
        >
          <!-- table head -->
          <div
            name="thead"
            class="sm:hidden flex flex-col w-5/12 sm:w-full sm:mb-2.5 bg-product py-2 rounded-xl"
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
                کد محصول
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                نام محصول
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                مبلغ
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                پیامک
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                پیامک هدیه
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 mb-2 overflow-x-hidden"
              >
                تعرفه
              </div>
              <div
                name="th"
                class="py-1 px-4 rounded-lg w-11/12 overflow-x-hidden"
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
                {{ product.product_id }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ product.product_name }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                <del class="text-red-300 text-xs">{{ product.amount }}</del>
                {{ product.amount_final }}تومان
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ product.product_sms }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ product.product_gift }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-2/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600"
              >
                {{ product.sms_price }}
              </div>
              <div
                name="th"
                class="py-1 mx-1 mb-0 sm:ml-2 sm:mb-0 border-t-2 sm:border-0 border-solid border-gray-300 w-11/12 sm:w-3/12 text-center overflow-x-hidden sm:bg-transparent text-gray-600 flex flex-row justify-evenly"
              >
                <router-link
                  :to="{
                    name: 'productedit',
                    params: { id: product.product_id },
                    props: { product: product },
                  }"
                >
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </router-link>
                <button @click="deleteProduct(product.product_id)">
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
        <!-- orginal table end -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import Swal from "sweetalert2";
export default {
  setup() {
    const store = useStore();
    store.dispatch("getproduct");

    const products = computed(() => store.state.products);
    const deleteProduct = (id) => {
      Swal.fire({
        title: "از حذف محصول اطمینان دارید؟",
        icon: "question",
        iconHtml: "!",
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "#dc3741",
        cancelButtonColor: "rgb(83 177 30)",
        preConfirm: () => {
          return store.dispatch("deleteProduct", Number(id));
        },
      });
    };
    return {
      products,
      deleteProduct,
    };
  },
};
</script>

<style></style>
