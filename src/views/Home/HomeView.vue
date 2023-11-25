<template>
  <div class="container">
    <Navbar />
    <Header />
    <CovidStatus />
    <DreamVacation />
  </div>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import Header from "./components/Header.vue";
import CovidStatus from "../../components/CovidStatus.vue";
import DreamVacation from "./components/DreamVacation.vue";
</script>
