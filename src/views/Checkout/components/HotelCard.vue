<template>
  <div class="flex flex-col rounded-md bg-white overflow-hidden">
    <div>
      <img
        src="../../../assets/images/hotel-gallery/2.webp"
        alt="main"
        class="rounded-tl-md rounded-tr-md h-[180px] w-full object-cover"
      />
    </div>

    <div class="px-5 py-4 flex flex-col gap-4">
      <p class="text-lg font-[500] text-[#333]">
        {{ hotelDetails.hotel_name }}
      </p>
      <div class="flex gap-2 items-center">
        <div class="flex items-center">
          <img src="../../../assets/images/stars/full.svg" alt="full-star" />
          <img src="../../../assets/images/stars/full.svg" alt="full-star" />
          <img src="../../../assets/images/stars/full.svg" alt="full-star" />
          <img src="../../../assets/images/stars/full.svg" alt="full-star" />
          <img src="../../../assets/images/stars/half.svg" alt="half-star" />
        </div>
        <p class="text-sm text-[#4f4f4f]">4.5 (1200 Reviews)</p>
      </div>
      <div class="flex flex-col gap-2 text-sm text-[#4f4f4f]">
        <span class="text-[#EB5757]"> Non refundable </span>
        <span
          >Check in:
          {{ new Date(hotelDetails.arrival_date).toDateString() }}</span
        >
        <span
          >Check out:
          {{ new Date(hotelDetails.departure_date).toDateString() }}</span
        >
        <span>
          {{
            new Date(hotelDetails.departure_date).getDate() -
            new Date(hotelDetails.arrival_date).getDate()
          }}
          night stay</span
        >
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
});
</script>
