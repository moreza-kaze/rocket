<template>
  <div dir="rtl" class="font-main bg-gray-100">
    <!-- start navbar & sidebar -->
    <div id="bar">
      <bar />
    </div>
    <!-- end navbar & sidebar -->

    <!-------------------------->

    <!-- start main component  -->
    <div id="main">
      <router-view />
    </div>
    <!-- end main component  -->
  </div>
</template>
<script>
import Bar from "./components/Bar.vue";
export default {
  components: {
    Bar,
  },
  setup() {},
};
</script>

<style></style>
