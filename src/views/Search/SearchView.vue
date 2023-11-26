<template>
  <div class="relative">
    <div class="absolute w-full text-white px-[2rem]">
      <Navbar />
    </div>
    <SearchHeader />
  </div>
  <div class="container">
    <SearchBar />
    <CovidStatus />
    <Footer />
  </div>
  <CopyRights />
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import SearchHeader from "./components/SearchHeader.vue";
import SearchBar from "../../components/SearchBar.vue";
import CovidStatus from "../../components/CovidStatus.vue";
import Footer from "../../components/Footer.vue";
import CopyRights from "../../components/CopyRights.vue";
</script>

<style lang="scss" scoped></style>
