<template>
  <div class="bg-red-500 w-100 h-12">
    <div class="flex items-center justify-between px-8 md:px-32 h-full">
      <p class="text-3xl text-slate-100">{{ t("app") }}</p>
      <UserDropdown />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import UserDropdown from "../navbar/UserDropdown.vue";

export default defineComponent({
  components: {
    UserDropdown,
  },

  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>
