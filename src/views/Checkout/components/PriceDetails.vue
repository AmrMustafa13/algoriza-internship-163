<template>
  <div class="flex flex-col rounded-md bg-white overflow-hidden">
    <header
      class="font-[500] bg-[#85E0AB] text-[#333] flex items-center py-4 px-5 gap-2"
    >
      <p class="text-lg">Price Details</p>
    </header>
    <div class="px-5 py-4 flex flex-col gap-4">
      <ul class="text-sm text-[#4f4f4f] flex flex-col gap-3">
        <li>
          <span>1 room X 2 nights</span>
          <span>$ 120.32</span>
        </li>
        <li>
          <span>Tax and service fees</span>
          <span>$ 8.32</span>
        </li>
      </ul>
      <div
        class="flex items-center justify-between gap-2 border-t border-[#E0E0E0] pt-4"
      >
        <span>Total</span>
        <span class="font-semibold text-xl"
          >$
          {{
            hotelDetails.composite_price_breakdown.gross_amount.value.toFixed(0)
          }}
        </span>
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
