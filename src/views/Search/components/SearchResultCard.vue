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
      <div class="flex gap-2 items-center">
        <div class="flex items-center">
          <img
            v-for="star in renderStarsFromRating(
              (hotel.reviewScore / 2).toFixed(1)
            )"
            :key="star"
            :src="star"
            alt="star"
          />
        </div>
        <p>
          {{ (hotel.reviewScore / 2).toFixed(1) }} ({{ hotel.reviewCount }}
          reviews)
        </p>
      </div>
      <span>
        {{ hotelParagraph }}
      </span>
      <span>{{ hotel.priceBreakdown.grossPrice.value.toFixed(2) }}</span>
      <button @click="handleSearch" class="self-start mt-2">
        <router-link
          :to="`/hotel/${hotelId}`"
          class="font-[500] bg-[#2F80ED] text-white rounded-md py-3 px-5"
          >See Availability</router-link
        >
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

const renderStarsFromRating = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push("/src/assets/images/stars/full.svg");
  }

  if (hasHalfStar) {
    stars.push("/src/assets/images/stars/half.svg");
  }

  return stars;
};
</script>
