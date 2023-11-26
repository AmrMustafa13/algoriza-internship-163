<template>
  <div class="bg-black fixed inset-0 bg-opacity-30" v-if="open">
    <div
      class="bg-white rounded-lg text-[#181818] w-96 flex flex-col text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 gap-8"
    >
      <img
        src="../assets/images/welcome-modal.svg"
        alt="welcome-card"
        class="w-[240px] mx-auto"
      />
      <h1 class="text-xl font-semibold">Welcome to My Dream Place</h1>
      <p class="text-[#4F4F4F]">
        You can now enjoy your travel experience with easy access to resources
        and more
      </p>
      <button
        @click="open = false"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-2 px-5"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(true);
</script>
