<template>
  <div
    class="w-full h-36 bg-red-400 hover:bg-red-500 cursor-pointer flex flex-col items-center justify-center rounded-xl group shadow-lg hover:shadow-xl"
  >
    <slot></slot>
    <p class="text-slate-100">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
