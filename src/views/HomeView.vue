<template>
  <Suspense>
    <main class="px-8 md:px-32 pt-8">
      <HomeTiles class="pb-4" />
      <HeroStats />
    </main>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeTiles from "@/components/home/HomeTiles.vue";
import HeroStats from "@/components/heroes/HeroStats.vue";

export default defineComponent({
  components: {
    HomeTiles,
    HeroStats,
  },
});
</script>
