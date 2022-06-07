<template>
  <div
    class="min-h-screen w-full h-full max-h-fit bg-blob p-10 xl:p-32 flex flex-row"
  >
    <div class="bg-white/80 w-full min-h-full h-ful l flex">سیبسیب</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    console.log(route.params.id);
  },
};
</script>

<style scoped>
.bg-blob {
  background: #6b63ffd3;
}
</style>
