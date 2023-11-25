<template>
  <div class="container">
    <Navbar />
    <Header />
    <CovidStatus />
    <DreamVacation />
    <Inspiration />
    <PopularHotels />
  </div>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import Header from "./components/Header.vue";
import CovidStatus from "../../components/CovidStatus.vue";
import DreamVacation from "./components/DreamVacation.vue";
import Inspiration from "./components/Inspiration.vue";
import PopularHotels from "./components/PopularHotels.vue";
</script>
