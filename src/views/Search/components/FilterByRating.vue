<template>
  <div class="rounded-md flex flex-col gap-2 border border-[#E2E2E2]">
    <h3 class="text-[#181818] text-[500] bg-[#F2F2F2] p-4">Rating</h3>
    <p class="text-[#4f4f4f] text-sm p-4">Show only ratings more than</p>
    <div
      class="flex justify-between items-center rounded-md mb-4 mx-4 bg-white border border-[#E2E2E2]"
    >
      <div
        class="flex justify-center items-center gap-1 cursor-pointer border-r border-[#e2e2e2] p-4"
        @click="changeRatingFilter"
      >
        <span class="pointer-events-none">1</span>
        <img
          src="../../../assets/images/stars/full.svg"
          alt="full-star"
          class="pointer-events-none"
        />
      </div>
      <div
        class="flex justify-center items-center gap-1 cursor-pointer border-r border-[#e2e2e2] p-4"
        @click="changeRatingFilter"
      >
        <span class="pointer-events-none">2</span>
        <img
          src="../../../assets/images/stars/full.svg"
          alt="full-star"
          class="pointer-events-none"
        />
      </div>
      <div
        class="flex justify-center items-center gap-1 cursor-pointer border-r border-[#e2e2e2] p-4"
        @click="changeRatingFilter"
      >
        <span class="pointer-events-none">3</span>
        <img
          src="../../../assets/images/stars/full.svg"
          alt="full-star"
          class="pointer-events-none"
        />
      </div>
      <div
        class="flex justify-center items-center gap-1 cursor-pointer border-r border-[#e2e2e2] p-4"
        @click="changeRatingFilter"
      >
        <span class="pointer-events-none">4</span>
        <img
          src="../../../assets/images/stars/full.svg"
          alt="full-star"
          class="pointer-events-none"
        />
      </div>
      <div
        class="flex justify-center items-center gap-1 cursor-pointer p-4"
        @click.stop="changeRatingFilter"
      >
        <span class="pointer-events-none">5</span>
        <img
          src="../../../assets/images/stars/full.svg"
          alt="full-star"
          class="pointer-events-none"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useHotelsStore } from "../../../stores/hotels";

const hotelsStore = useHotelsStore();

const { ratingFilter } = storeToRefs(hotelsStore);

const changeRatingFilter = (e) => {
  ratingFilter.value = e.target.children[0].textContent;
};
</script>
