<template>
  <div dir="rtl" class="font-main flex w-full h-full min-h-screen">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {
    window.localStorage.clear();
  },
};
</script>

<style></style>
