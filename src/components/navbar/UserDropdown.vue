<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton>
      <MenuAlt3Icon class="h-5 w-5 text-slate-100 cursor-pointer" />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 w-48 divide-y divide-gray-200 rounded-md bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1" v-for="item in menuItems" :key="item.type">
          <MenuItem
            v-slot="{ active }"
            v-for="option in item.options"
            :key="option"
          >
            <button
              :class="[
                active ? 'bg-red-400 text-white' : 'text-gray-500',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
              {{ option }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { MenuAlt3Icon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

type MenuItemsType = "logged" | "guest";

export default defineComponent({
  components: {
    MenuAlt3Icon,
    Menu, // eslint-disable-line
    MenuButton,
    MenuItems,
    MenuItem,
  },

  setup() {
    const menuItems = ref([
      {
        type: "guest" as MenuItemsType,
        options: ["Sign In", "Create Account"],
      },
      {
        type: "logged" as MenuItemsType,
        options: ["Sign Out"],
      },
    ]);

    return {
      menuItems,
    };
  },
});
</script>
