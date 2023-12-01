<template>
  <div class="flex flex-col gap-9">
    <iframe
      :src="
        '//maps.google.com/maps?q=' +
        hotelDetails.latitude +
        ',' +
        hotelDetails.longitude +
        '&z=15&output=embed'
      "
      width="400px"
      height="240px"
      class="rounded-md"
    ></iframe>
    <h2 class="text-[#181818] text-xl font-[500]">Explore the area</h2>
    <ul class="text-[#4F4F4F] text-sm flex flex-col gap-3">
      <li class="flex justify-between items-center">
        <div class="flex gap-2">
          <img src="../../../assets/images/plane.svg" alt="plane" />
          <span>Hotel Penselvenyia</span>
        </div>
        <span>2 min drive</span>
      </li>
      <li class="flex justify-between items-center">
        <div class="flex gap-2">
          <img src="../../../assets/images/map.svg" alt="map" />
          <span>Travis Bakery store house</span>
        </div>
        <span>10 min drive</span>
      </li>
      <li class="flex justify-between items-center">
        <div class="flex gap-2">
          <img src="../../../assets/images/map.svg" alt="map" />
          <span>Olivia Johnson Garden</span>
        </div>
        <span>15 min drive</span>
      </li>
      <li class="flex justify-between items-center">
        <div class="flex gap-2">
          <img src="../../../assets/images/map.svg" alt="map" />
          <span>Norman Opera Circus</span>
        </div>
        <span>18 min drive</span>
      </li>
      <li class="flex justify-between items-center">
        <div class="flex gap-2">
          <img src="../../../assets/images/map.svg" alt="map" />
          <span>Rockdeset hotel</span>
        </div>
        <span>32 min drive</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  hotelDetails: {
    type: Object,
    required: true,
  },
});
</script>
