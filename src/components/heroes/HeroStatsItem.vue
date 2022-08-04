<template>
  <div
    v-if="hero"
    :class="`flex items-center justify-between group rounded-xl mb-3 bg-${primaryAttbColor}-50 border-em`"
  >
    <div class="flex items-center w-3/12 group-hover:w-4/12">
      <img
        :src="`https://cdn.cloudflare.steamstatic.com/${heroImagePath}`"
        alt="hero-icon"
        :class="`w-24 rounded-lg border-solid border-${primaryAttbColor}-500 border-2 group-hover:w-52 group-hover:border-0 mr-3`"
      />
      <p class="text-slate-600 text-xl">{{ hero.localized_name }}</p>
    </div>
    <div class="w-7/12">
      <div class="flex items-center justify-end">
        <p class="text-slate-400 text-xl">
          {{ t("heroes.proPick") }}: <span>{{ hero.pro_pick }}</span>
        </p>
        <p class="mx-3">-</p>
        <p class="text-slate-400 text-xl">
          {{ t("heroes.proWins") }}: <span>{{ hero.pro_win }}</span>
        </p>
        <p class="mx-3">-</p>
        <p class="text-xl text-slate-400">
          {{ t("heroes.proWinRate") }}:
          <span :class="`text-${heroheroWinRate > 50 ? 'green' : 'red'}-500`"
            >{{ heroheroWinRate }}%</span
          >
        </p>
      </div>
      <div class="hidden group-hover:flex items-center justify-end mt-4">
        <HeroRoleChip
          v-for="role of hero.roles"
          :key="role"
          :role="role"
          :primaryAttbColor="primaryAttbColor"
        />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img
        :src="`https://cdn.cloudflare.steamstatic.com/${heroIconPath}`"
        alt="hero-icon"
        class="w-8 rounded-lg"
      />
      <img
        :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${heroIconAttrb}.png`"
        alt="hero-icon"
        class="w-5 rounded-lg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import type { HeroStats } from "@/types/heroes";
import { useI18n } from "vue-i18n";

type PrimaryAttrType = "str" | "agi" | "int";

import HeroRoleChip from "@/components/heroes/HeroRoleChip.vue";

export default defineComponent({
  props: {
    hero: {
      type: Object as () => HeroStats,
      required: true,
    },
  },
  components: {
    HeroRoleChip,
  },

  setup(props) {
    const { t } = useI18n();

    const heroImagePath = computed(() => props.hero.img);
    const heroIconPath = computed(() => props.hero.icon);
    const heroIconAttrb = computed(() =>
      (props.hero.primary_attr as PrimaryAttrType) === "str"
        ? "strength"
        : (props.hero.primary_attr as PrimaryAttrType) === "agi"
        ? "agility"
        : "intelligence"
    );

    const primaryAttbColor = computed(() =>
      (props.hero.primary_attr as PrimaryAttrType) === "str"
        ? "red"
        : (props.hero.primary_attr as PrimaryAttrType) === "agi"
        ? "emerald"
        : "sky"
    );

    const heroheroWinRate = computed(() =>
      ((props.hero.pro_win / props.hero.pro_pick) * 100).toFixed(2)
    );

    return {
      t,
      heroImagePath,
      heroIconPath,
      heroIconAttrb,
      primaryAttbColor,
      heroheroWinRate,
    };
  },
});
</script>
