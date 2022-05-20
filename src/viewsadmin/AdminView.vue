<template>
  <div
    dir="rtl"
    class="font-main block relative md:static md:flex bg-maincolor-100 min-h-screen h-full w-full overflow-hidden"
  >
    <!-- start navbar & sidebar -->
    <div class="flex md:block">
      <SideBar :menu="menu" />
      <div @click="menuChange(true)" class="bg-gray-400 md:hidden w-full"></div>
    </div>

    <!-- end navbar & sidebar -->

    <!-------------------------->

    <!-- start main component  -->
    <div
      :class="[{ hidden: menu }, { flex: !menu }]"
      class="flex md:flex flex-col w-full"
    >
      <!-- start navbar -->
      <div
        class="h-16 m-0 bg-white w-full shadow-nav flex flex-row items-center justify-between"
      >
        <span
          @click="menuChange(menu)"
          class="pr-3 text-gray-700 cursor-pointer"
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
              d="M4 6h16M4 12h16m-7 6h7"
            /></svg
        ></span>
        <span class="flex md:hidden text-maincolor-999"
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
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            /></svg
        ></span>
        <span class="pl-3 md:pl-7 text-gray-700 cursor-pointer">
          <svg
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
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      </div>
      <!-- end navbar -->
      <div class="h-full w-full">
        <router-view />
      </div>
    </div>
    <!-- end main component  -->
  </div>
</template>
<script>
import SideBar from "../components/SideBar.vue";
import { useStore } from "vuex";

import { computed } from "@vue/runtime-core";

export default {
  components: {
    SideBar,
  },
  setup() {
    const store = useStore();
    let menu = computed(() => store.getters["getMenu"]);
    function menuChange(x) {
      store.dispatch("actionMenu", !x);
    }

    return {
      menu,
      menuChange,
    };
  },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #436fb1a1;
}
</style>
