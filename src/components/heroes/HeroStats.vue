<template>
  <Suspense>
    <TransitionRoot appear :show="!!heroes.length">
      <TransitionChild
        v-for="hero in heroes"
        :key="hero.id"
        enter="transition ease-in duration-700 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-out duration-700 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <HeroStatsItem :hero="hero" />
      </TransitionChild>
    </TransitionRoot>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { Ref } from "vue";
import openAPIService from "@/services/openapi.service";
import type { HeroStats } from "@/types/heroes";
import HeroStatsItem from "@/components/heroes/HeroStatsItem.vue";
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

export default defineComponent({
  components: {
    HeroStatsItem,
    TransitionRoot,
    TransitionChild,
  },

  async setup() {
    const heroes: Ref<Array<HeroStats>> = ref([]);

    const dataHeroes: Array<HeroStats> = (
      await openAPIService.get("/heroStats")
    ).data;

    const addItemsOnDelay = (
      item: HeroStats,
      index: number,
      array: Ref<Array<HeroStats>>
    ) =>
      new Promise<void>((resolve) => {
        setTimeout(() => {
          array.value.push(item);
          resolve();
        }, 100 * index);
      });

    dataHeroes.forEach(async (e: HeroStats, i: number) =>
      addItemsOnDelay(e, i, heroes)
    );

    return {
      heroes,
    };
  },
});
</script>
