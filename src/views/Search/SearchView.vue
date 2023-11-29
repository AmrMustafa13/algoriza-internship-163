<template>
  <div class="relative">
    <div class="absolute w-full text-white px-[2rem]">
      <Navbar />
    </div>
    <SearchHeader />
  </div>
  <div class="container">
    <SearchBar />
    <div class="flex justify-between gap-8">
      <div class="flex-1 flex flex-col gap-8">
        <SearchByPropertyName />
        <FilterByBudget />
        <FilterByRating />
      </div>
      <div class="flex-[3]" v-if="hotelsStore.filteredHotels.length > 0">
        <SearchResults :hotels="hotelsStore.filteredHotels" />
      </div>
      <div class="flex-[3]" v-else>
        <SearchResults :hotels="hotelsStore.allHotels" />
      </div>
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
import SearchResults from "./components/SearchResults.vue";
import SearchByPropertyName from "./components/SearchByPropertyName.vue";
import FilterByBudget from "./components/FilterByBudget.vue";
import FilterByRating from "./components/FilterByRating.vue";

import { useHotelsStore } from "../../stores/hotels";

const hotelsStore = useHotelsStore();
</script>
