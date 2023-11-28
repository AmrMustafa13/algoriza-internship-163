<template>
  <div
    class="bg-black fixed inset-0 bg-opacity-30"
    v-if="open"
    @click.self="$emit('close')"
  >
    <div
      class="bg-white rounded-lg text-[#181818] w-96 flex flex-col text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 gap-8"
    >
      <div
        class="w-[240px] h-[200px] flex justify-center items-center mx-auto bg-[#6FCF9733] p-10 rounded-md"
      >
        <img
          src="../assets/images/booking-success.png"
          alt="welcome-card"
          class="w-full mx-auto object-contain"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-semibold">Booking Successful</h1>
        <p class="text-[#4F4F4F]">
          Congratulations your reservation has been made. You will be notified 2
          days prior the date.
        </p>
      </div>
      <button
        @click="handleClick"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-2 px-5"
      >
        View Trip
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const emit = defineEmits(["close"]);

const router = useRouter();

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});

const handleClick = () => {
  emit("close");
  router.push("/my-trips");
};
</script>
