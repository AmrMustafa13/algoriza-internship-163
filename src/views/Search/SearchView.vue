<template>
  <div class="relative">
    <div class="absolute w-full text-white px-[2rem]">
      <Navbar />
    </div>
    <SearchHeader />
  </div>
  <div class="container">
    <SearchBar />
    <div v-if="hotelsStore.isLoading">
      <LoadingSpinner />
    </div>
    <div v-else-if="hotelsStore.hasNoResults">
      <h1 class="text-2xl font-semibold text-[#181818] mt-8">
        No hotels found
      </h1>
    </div>
    <div v-else-if="hotelsStore.hasResults">
      {{ hotelsStore.allHotels.length }}
    </div>
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
import LoadingSpinner from "../../components/LoadingSpinner.vue";
import { useHotelsStore } from "../../stores/hotels";

const hotelsStore = useHotelsStore();
</script>
