<template>
  <div class="border border-[#e0e0e0] rounded-md p-4 flex gap-4">
    <div class="min-w-max">
      <img
        :src="hotel.photoUrls[0].replace('square60', 'square800')"
        :alt="hotel.name"
        class="rounded-md w-[285px] h-[200px] object-cover"
      />
    </div>
    <div class="text-sm text-[#4f4f4f] flex flex-col gap-4">
      <h2 class="text-[#1a1a1a] text-[500] text-xl">{{ hotel.name }}</h2>
      <p>{{ hotel.reviewScore }} ({{ hotel.reviewCount }} reviews)</p>
      <span>
        {{ hotelParagraph }}
      </span>
      <button
        @click="handleSearch"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-2 px-5 self-start"
      >
        <router-link :to="`/hotel/${hotelId}`">See Availability</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  hotel: {
    type: Object,
    required: true,
  },
  hotelParagraph: {
    type: String,
    required: true,
  },
  hotelId: {
    type: Number,
    required: true,
  },
});
</script>
