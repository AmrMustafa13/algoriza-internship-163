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
          class="bg-white rounded-md flex flex-col w-full overflow-hidden"
        >
          <div v-if="room.photos.length > 0">
            <img
              :src="room?.photos[0].url_640x200"
              :alt="room"
              class="h-[240px] w-full object-cover"
            />
          </div>
          <div class="p-5">
            <h2 class="text-[18px] font-[500]">
              {{ room.bed_configurations[0]?.bed_types[0]?.name_with_count }}
            </h2>
            <ul class="text-sm text-[#4f4f4f] flex flex-col gap-2 mt-4">
              <li class="flex items-center gap-2">
                <img
                  src="../../../assets/images/room-card/bag-tick.svg"
                  alt="bag-tick"
                />
                <span>
                  {{
                    room.bed_configurations[0].bed_types[0].description
                  }}</span
                >
              </li>
              <li class="flex items-center gap-2">
                <img
                  src="../../../assets/images/room-card/lifeboy.svg"
                  alt="lifeboy"
                />
                <span>
                  Sleeps
                  {{ room.bed_configurations[0]?.bed_types[0]?.count }}</span
                >
              </li>
              <li class="flex items-center gap-2">
                <img
                  src="../../../assets/images/room-card/like.svg"
                  alt="like"
                />
                <span>
                  {{ room.bed_configurations[0]?.bed_types[0]?.name }}
                </span>
              </li>
            </ul>
          </div>
          <button
            class="font-[500] bg-[#2F80ED] text-white rounded-md py-3 mb-4 mx-4"
            @click="handleResrveSuite"
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
import { useRouter } from "vue-router";
import { useHotelsStore } from "../../../stores/hotels";

const hotelsStore = useHotelsStore();

const router = useRouter();

const emit = defineEmits(["reserve-suite"]);

const props = defineProps({
  availableRooms: {
    type: Object,
    required: true,
  },
});

const handleResrveSuite = () => {
  emit("reserve-suite");
  router.push("/checkout");
};
</script>
