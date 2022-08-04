<template>
  <div
    class="inline-grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4"
  >
    <TileBlock title="Pro Players">
      <template #default>
        <UserIcon class="h-16 w-16 text-slate-100" />
      </template>
    </TileBlock>
    <TileBlock title="Teams">
      <template #default>
        <UserGroupIcon class="h-16 w-16 text-slate-100" />
      </template>
    </TileBlock>
    <TileBlock title="Matches">
      <template #default>
        <TicketIcon class="h-16 w-16 text-slate-100" />
      </template>
    </TileBlock>
    <TileBlock title="Heroes">
      <template #default>
        <AcademicCapIcon class="h-16 w-16 text-slate-100" />
      </template>
    </TileBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TileBlock from "../UI/TileBlock.vue";
import { UserIcon } from "@heroicons/vue/solid";
import { UserGroupIcon } from "@heroicons/vue/solid";
import { TicketIcon } from "@heroicons/vue/solid";
import { AcademicCapIcon } from "@heroicons/vue/solid";

export default defineComponent({
  components: {
    TileBlock,
    UserIcon,
    UserGroupIcon,
    TicketIcon,
    AcademicCapIcon,
  },
});
</script>
