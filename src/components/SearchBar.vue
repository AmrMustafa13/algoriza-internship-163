<template>
  <div
    class="bg-white p-3 rounded-md w-[90%] mx-auto shadow-xl -translate-y-1/2 text-[#4F4F4F] flex justify-between items-center gap-4"
  >
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="destination"
      @change="changeSearchQuery"
    >
      <option value="0" disabled>Where are you going?</option>
      <option
        v-for="destination in allDestinations"
        :key="destination.dest_id"
        :value="destination.dest_id"
      >
        {{ destination.name }}
      </option>
    </select>
    <VueDatePicker
      v-model="checkIn"
      placeholder="Check in date"
      :enable-time-picker="false"
      @update:model-value="changeSearchQuery"
    ></VueDatePicker>
    <VueDatePicker
      v-model="checkOut"
      placeholder="Check out date"
      :enable-time-picker="false"
      @update:model-value="changeSearchQuery"
    ></VueDatePicker>
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="guests"
      @change="changeSearchQuery"
    >
      <option value="0" disabled>Guests</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="rooms"
      @change="changeSearchQuery"
    >
      <option value="0" disabled>Rooms</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button>
      <router-link
        :to="{
          name: 'search',
          query: {
            destination,
            checkIn,
            checkOut,
            guests,
            rooms,
          },
        }"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-2 px-5"
      >
        Search
      </router-link>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import axios from "axios";
import { useSearchStore } from "../stores/search";

const searchStore = useSearchStore();

const searchQueries = searchStore.searchQueries;

const destination = ref(searchQueries.destination || "0");
const checkIn = ref(searchQueries.checkIn);
const checkOut = ref(searchQueries.checkOut);
const guests = ref(searchQueries.guests || "0");
const rooms = ref(searchQueries.rooms || "0");

const allDestinations = ref([]);

const getAllDestinations = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: { query: "man" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    allDestinations.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getAllDestinations();
});

const changeSearchQuery = () => {
  searchStore.updateSearchQueries({
    destination: destination.value,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    guests: guests.value,
    rooms: rooms.value,
  });
};
</script>
