<template>
  <div class="container">
    <Navbar />
    <CovidStatus />
    <Footer />
  </div>
  <CopyRights />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import CovidStatus from "../components/CovidStatus.vue";
import Footer from "../components/Footer.vue";
import CopyRights from "../components/CopyRights.vue";
</script>
