<template>
  <div class="border border-[#e0e0e0] rounded-md p-4 flex gap-4">
    <div class="flex-1">
      <img
        :src="hotel.photoUrls[0].replace('square60', 'square800')"
        :alt="hotel.name"
        class="rounded-md object-cover w-full h-[200px]"
      />
    </div>
    <div class="text-sm text-[#4f4f4f] flex flex-col flex-[2]">
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-[#1a1a1a] text-[500] text-xl">{{ hotel.name }}</h2>
        <div v-if="hotel.priceBreakdown.benefitBadges.length">
          <span
            class="text-sm font-[500] bg-[#EB5757] py-1 px-2 rounded-md text-white"
            >{{ hotel.priceBreakdown.benefitBadges[0].text }}</span
          >
        </div>
      </div>
      <div class="flex gap-2 items-center mb-2">
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
      <div class="flex justify-between items-center gap-32">
        <span>
          {{ hotelParagraph }}
        </span>
        <div v-if="hotel.priceBreakdown.strikethroughPrice">
          <span
            class="text-sm font-[500] bg-[#219653] py-1 px-2 rounded-md text-white whitespace-nowrap"
          >
            {{
              (
                ((hotel.priceBreakdown.strikethroughPrice.value -
                  hotel.priceBreakdown.grossPrice.value) /
                  hotel.priceBreakdown.strikethroughPrice.value) *
                100
              ).toFixed(0) + "% off"
            }}
          </span>
        </div>
      </div>

      <div class="flex justify-between items-end">
        <button @click="handleSearch" class="self-end my-4">
          <router-link
            :to="`/hotel/${hotelId}`"
            class="font-[500] bg-[#2F80ED] text-white rounded-md py-3 px-5"
            >See Availability</router-link
          >
        </button>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-end">
            <div v-if="hotel.priceBreakdown.strikethroughPrice">
              <span
                class="text-sm font-[500] text-[#EB5757] rounded-md line-through"
              >
                ${{ hotel.priceBreakdown.strikethroughPrice.value.toFixed(0) }}
              </span>
            </div>
            <span class="text-lg font-[500] py-1 px-2 rounded-md text-[#333]">
              ${{ hotel.priceBreakdown.grossPrice.value.toFixed(0) }}
            </span>
          </div>
          <div>
            <span class="text-sm text-[#333] font-light"
              >Includes taxes and fees</span
            >
          </div>
        </div>
      </div>
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
