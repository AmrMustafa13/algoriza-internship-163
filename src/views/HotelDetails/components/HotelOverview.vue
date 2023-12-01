<template>
  <div>
    <div class="flex flex-col gap-2">
      <h1 class="font-semibold text-[#1a1a1a] text-3xl">
        {{ hotelDetails.hotel_name }}
      </h1>
      <div class="flex gap-2 items-center">
        <div class="flex items-center">
          <img src="../../../assets/images/stars/full.svg" alt="star" />
          <img src="../../../assets/images/stars/full.svg" alt="star" />
          <img src="../../../assets/images/stars/full.svg" alt="star" />
          <img src="../../../assets/images/stars/full.svg" alt="star" />
          <img src="../../../assets/images/stars/half.svg" alt="star" />
        </div>
        <p class="text-sm text-[#4f4f4f]">4.5 (1200 reviews)</p>
      </div>
      <div class="flex gap-2 items-center text-sm text-[#333]">
        <img src="../../../assets/images/blue-map.svg" alt="blue-map" />
        <span>{{ hotelDetails.address }}</span>
      </div>
    </div>
    <div class="bg-white rounded-md mt-8">
      <div class="flex flex-col gap-5 px-[30px] py-6">
        <h2 class="text-[#181818] text-lg">Overview</h2>
        <p class="text-[#4f4f4f]">
          {{ hotelDescription }}
        </p>
      </div>
      <div class="px-[30px] border-t border-[#E0E0E0] py-6">
        <h2 class="text-[#181818] text-lg mb-6">Top facilities</h2>
        <ul class="text-[#4f4f4f] text-[15px] flex flex-col gap-3">
          <li
            v-for="item in hotelDetails.facilities_block.facilities"
            class="flex items-center gap-2"
          >
            <img src="../../../assets/images/wifi.svg" alt="wifi" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  hotelDetails: {
    type: Object,
    required: true,
  },
  hotelDescription: {
    type: String,
    required: true,
  },
});
</script>
