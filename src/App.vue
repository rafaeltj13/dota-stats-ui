<template>
  <div class="h-screen">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import TheHeader from "./components/UI/TheHeader.vue";

export default defineComponent({
  components: {
    RouterView,
    TheHeader,
  },
});
</script>

<style></style>
