<template>
  <div class="container">
    <Navbar />
    <Header />
    <CovidStatus />
  </div>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import Header from "./components/Header.vue";
import CovidStatus from "../../components/CovidStatus.vue";
</script>
