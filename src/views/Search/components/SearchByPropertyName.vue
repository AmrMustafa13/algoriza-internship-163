<template>
  <div class="bg-[#F2F2F2] rounded-md p-4 flex flex-col gap-2">
    <h3 class="text-[#181818] text-[500]">Search by property name</h3>
    <div
      class="flex items-center gap-2 border border-[#E2E2E2] rounded-md px-2 bg-white"
    >
      <img
        src="../../../assets/images/search.svg"
        alt="search"
        class="cursor-pointer"
      />
      <input
        type="text"
        class="w-full border-none outline-none p-2 placeholder:text-[#4f4f4f]"
        placeholder="eg. Beach westpalm"
        v-model="propertyNameFilter"
      />
    </div>
  </div>
</template>

<script setup>
import { useHotelsStore } from "../../../stores/hotels";
import { storeToRefs } from "pinia";

const hotelsStore = useHotelsStore();

const { propertyNameFilter } = storeToRefs(hotelsStore);
</script>
