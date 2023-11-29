<template>
  <div class="py-16">
    <ul class="flex">
      <li
        :class="{
          'text-[#2F80ED]': currentPage !== 1,
          'text-[#9e9e9e]': currentPage === 1,
        }"
        class="font-[500] rounded-lg w-10 h-10 p-2 flex justify-center items-center shadow-lg mr-2"
      >
        <button
          :disabled="currentPage === 1"
          @click="hotelsStore.changePage(currentPage - 1)"
        >
          {{ `<` }}
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-[#2F80ED] text-white': currentPage === currentPage,
            'bg-[#fff] text-[#9e9e9e]': currentPage !== currentPage,
          }"
          class="font-[500] rounded-lg w-10 h-10 p-2"
          @click="hotelsStore.changePage(currentPage)"
        >
          {{ currentPage }}
        </button>
      </li>
      <li
        v-if="currentPage + 1 <= totalPages"
        :class="{
          'bg-[#2F80ED] text-white': currentPage + 1 === currentPage,
          'bg-[#fff] text-[#9e9e9e]': currentPage + 1 !== currentPage,
        }"
        class="font-[500] rounded-lg w-10 h-10 p-2"
      >
        <button @click="hotelsStore.changePage(currentPage + 1)">
          {{ currentPage + 1 }}
        </button>
      </li>
      <li
        v-if="currentPage + 2 <= totalPages"
        :class="{
          'bg-[#2F80ED] text-white': currentPage + 2 === currentPage,
          'bg-[#fff] text-[#9e9e9e]': currentPage + 2 !== currentPage,
        }"
        class="font-[500] rounded-lg w-10 h-10 p-2"
      >
        <button @click="hotelsStore.changePage(currentPage + 2)">
          {{ currentPage + 2 }}
        </button>
      </li>
      <li class="font-[500] rounded-lg w-10 h-10 p-2 text-[#9e9e9e]">
        <button>...</button>
      </li>
      <li
        :class="{
          'bg-[#2F80ED] text-white': currentPage === totalPages,
          'bg-[#fff] text-[#9e9e9e]': currentPage !== totalPages,
        }"
        class="font-[500] rounded-lg w-10 h-10 p-2"
      >
        <button
          :disabled="currentPage === totalPages"
          @click="hotelsStore.changePage(totalPages)"
        >
          {{ totalPages }}
        </button>
      </li>
      <li
        :class="{
          'text-[#2F80ED]': currentPage !== totalPages,
          'text-[#9e9e9e]': currentPage === totalPages,
        }"
        class="font-[500] rounded-lg w-10 h-10 p-2 flex items-center justify-center shadow-lg ml-2"
      >
        <button
          :disabled="currentPage === totalPages"
          @click="hotelsStore.changePage(currentPage + 1)"
          class="flex items-center justify-center"
        >
          {{ `>` }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useHotelsStore } from "../../../stores/hotels";
import { storeToRefs } from "pinia";

const hotelsStore = useHotelsStore();

const totalPages = hotelsStore.totalPages;

const { currentPage } = storeToRefs(hotelsStore);

watch(currentPage, () => {
  window.scrollTo(0, 0);
  hotelsStore.paginateHotels();
});
</script>
