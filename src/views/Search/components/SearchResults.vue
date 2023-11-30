<template>
  <div class="flex flex-col gap-8">
    <div class="flex justify-between gap-8">
      <h1 class="text-2xl font-semibold text-[#181818]">
        {{ hotelsStore.searchQueries.destination?.split(",")[1] }} :
        {{ hotelsStore.totalResults }} search results found
      </h1>
      <div class="flex flex-col border border-gray-300 rounded-md p-2">
        <label for="sortby" class="text-[12px] text-[#828282]">Sort By</label>
        <select
          name="sortby"
          id="sortby"
          class="bg-transparent outline-none"
          v-model="hotelsStore.sortByOption"
          @change="handleSortOptionChange"
        >
          <option value="0" disabled>Sort by</option>
          <option
            v-for="option in sortByOptions"
            :key="option.id"
            :value="option.id"
          >
            {{ option.title }}
          </option>
        </select>
      </div>
    </div>
    <div v-if="hotelsStore.isLoading">
      <LoadingSpinner />
    </div>
    <div v-else-if="hotelsStore.hasNoResults">
      <h1 class="text-2xl font-semibold text-[#181818] mt-8">
        No hotels found
      </h1>
    </div>
    <div v-else-if="hotelsStore.hasResults">
      <div class="flex flex-col gap-8">
        <SearchResultCard
          v-for="hotel in hotels"
          :key="hotel.hotel_id"
          :hotel="hotel.property"
          :hotelParagraph="hotel.accessibilityLabel"
          :hotelId="hotel.hotel_id"
        />
      </div>
      <div class="flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingSpinner from "../../../components/LoadingSpinner.vue";
import { useHotelsStore } from "../../../stores/hotels";
import axios from "axios";
import { ref, onMounted } from "vue";
import SearchResultCard from "./SearchResultCard.vue";
import Pagination from "./Pagination.vue";
import { defineProps } from "vue";

const props = defineProps({
  hotels: {
    type: Array,
    required: true,
  },
});

const hotelsStore = useHotelsStore();

const searchQueries = hotelsStore.searchQueries;

const sortByOptions = ref([]);

const getSortByOptions = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getSortBy",
    params: {
      dest_id: searchQueries.destination?.split(",")[0],
      search_type: "CITY",
      arrival_date: searchQueries.checkIn,
      departure_date: searchQueries.checkOut,
      adults: searchQueries.guests,
      room_qty: searchQueries.rooms,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    sortByOptions.value = response.data.data;
    // save to local storage
    localStorage.setItem("sortByOptions", JSON.stringify(sortByOptions.value));
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  if (localStorage.getItem("sortByOptions")) {
    sortByOptions.value = JSON.parse(localStorage.getItem("sortByOptions"));
  } else {
    getSortByOptions();
  }
});

const handleSortOptionChange = (event) => {
  hotelsStore.sortByOption = event.target.value;
  // save to local storage
  localStorage.setItem("sortByOption", hotelsStore.sortByOption);
  hotelsStore.fetchHotels();
};
</script>
