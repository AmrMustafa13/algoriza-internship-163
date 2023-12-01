<template>
  <div id="available-rooms" class="flex flex-col gap-5">
    <h2 class="text-[#181818] text-[24px] font-semibold">Available rooms</h2>
    <div class="flex gap-4">
      <div class="min-w-max">
        <img src="../../../assets/images/offer.svg" alt="offer" />
      </div>
      <div v-if="availableRooms" class="grid grid-cols-2 gap-4">
        <div
          v-for="room in availableRooms"
          class="bg-white rounded-md flex flex-col w-[400px] overflow-hidden"
        >
          <div>
            <img
              :src="room.photos[0].url_original"
              :alt="room"
              class="h-[200px] w-full object-cover"
            />
          </div>
          <div class="p-5">
            <h2 class="text-[18px] font-[500]">
              {{ room.bed_configurations[0].bed_types[0].name_with_count }}
            </h2>
            <span>
              {{ room.bed_configurations[0].bed_types[0].description }}</span
            >
          </div>
          <button
            class="font-[500] bg-[#2F80ED] text-white rounded-md py-3 mb-4 mx-4"
          >
            Reserve suite
          </button>
        </div>
      </div>
      <div v-else>
        <p>No rooms available</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  availableRooms: {
    type: Object,
    required: true,
  },
});
</script>
