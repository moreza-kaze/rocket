<template>
  <div dir="rtl" class="font-main flex bg-gray-100 h-screen w-screen">
    <!-- start navbar & sidebar -->
    <div id="bar">
      <SideBar />
    </div>
    <!-- end navbar & sidebar -->

    <!-------------------------->

    <!-- start main component  -->
    <div id="main" class="flex flex-col w-full">
      <!-- start navbar -->
      <div class="h-16 m-0 bg-white w-full shadow-nav">
        <h1>kh</h1>
      </div>
      <!-- end navbar -->
      <router-view />
    </div>
    <!-- end main component  -->
  </div>
</template>
<script>
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
  setup() {},
};
</script>

<style></style>
