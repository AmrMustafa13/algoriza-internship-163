<template>
  <div class="flex justify-between gap-5 py-5">
    <div class="flex-[2]">
      <img
        src="../../../assets/images/hotel-gallery/1.webp"
        alt="main"
        class="rounded-md h-[450px] w-full object-cover"
      />
    </div>
    <div class="flex-1 flex flex-col gap-5">
      <div>
        <img
          src="../../../assets/images/hotel-gallery/2.webp"
          alt="sec"
          class="rounded-md h-[215px] w-full object-cover"
        />
      </div>
      <div>
        <img
          src="../../../assets/images/hotel-gallery/3.webp"
          alt="third"
          class="rounded-md h-[217px] w-full object-cover"
        />
      </div>
    </div>
  </div>
  <div>
    <ul class="flex gap-2">
      <li class="p-2 border-b-4 border-[#2F80ED] cursor-pointer">Overview</li>
      <li class="p-2 cursor-pointer" @click="scrollTo('#available-rooms')">
        Rooms
      </li>
    </ul>
  </div>
</template>

<script setup>
const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  element.scrollIntoView({ behavior: "smooth" });
};
</script>
