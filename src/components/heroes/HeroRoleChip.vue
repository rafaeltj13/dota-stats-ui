<template>
  <div
    :class="`rounded-full mx-2 bg-${primaryAttbColor}-200 text-slate-500 px-2 py-2`"
  >
    {{ role }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    role: {
      type: String,
      required: true,
    },
    primaryAttbColor: {
      type: String,
      required: true,
    },
  },
});
</script>
