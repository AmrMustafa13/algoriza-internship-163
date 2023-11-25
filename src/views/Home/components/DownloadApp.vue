<template>
  <div
    class="bg text-white rounded-md flex flex-col items-start justify-center gap-8 overflow-hidden p-16 mb-16 mt-8 relative"
  >
    <img
      src="../../../assets/images/hand.png"
      alt="hand"
      class="h-[150%] absolute right-10 -top-10 -rotate-[20deg]"
    />
    <h2 class="font-semibold text-2xl max-w-xl">
      Download the mobile application for bonus coupons and travel codes
    </h2>
    <button class="font-[500] bg-[#2F80ED] text-white rounded-md py-3 px-5">
      Download Mobile App
    </button>
  </div>
</template>

<script setup></script>

<style>
.bg {
  background-image: url("../../../assets/images/download-app.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 280px;
}
</style>
