<template>
  <header
    class="text-white flex justify-center items-center flex-col gap-5 rounded-md relative"
  >
    <h1 class="font-bold text-3xl">Enjoy Your Dream Vacation</h1>
    <p class="text-xl max-w-2xl text-center">
      Plan and book our perfect trip with expert advice, travel tips,
      destination information and inspiration from us
    </p>
    <SearchBar />
  </header>
</template>

<script setup>
import SearchBar from "./SearchBar.vue";
</script>

<style scoped>
header {
  background-image: url("../../../assets/images/header.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
}
</style>
