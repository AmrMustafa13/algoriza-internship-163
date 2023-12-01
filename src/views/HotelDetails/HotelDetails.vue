<template>
  <div class="container">
    <Navbar />
  </div>
  <div v-if="isLoading">
    <LoadingSpinner />
  </div>
  <div class="bg-[#f4f4f4] pb-16" v-else>
    <div class="bg-gradient-to-b from-[#F4F4F400] to-[#fff]">
      <div class="container">
        <HotelGallery :hotelImgs="hotelImgs" />
      </div>
    </div>
    <div class="container">
      <div class="flex justify-between gap-10 py-8">
        <HotelOverview
          :hotelDetails="hotelDetails"
          :hotelDescription="hotelDescription"
        />
        <HotelMap :hotelDetails="hotelDetails" />
      </div>
      <AvailableRooms
        :availableRooms="availableRooms"
        :hotelDetails="hotelDetails"
      />
    </div>
  </div>
  <div class="bg-[#f4f4f4]">
    <div class="container">
      <CovidStatus />
      <Footer />
    </div>
  </div>
  <CopyRights />
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { useHotelsStore } from "../../stores/hotels";
import { onMounted, ref } from "vue";
import LoadingSpinner from "../../components/LoadingSpinner.vue";
import Navbar from "../../components/Navbar.vue";
import HotelGallery from "./components/HotelGallery.vue";
import CovidStatus from "../../components/CovidStatus.vue";
import Footer from "../../components/Footer.vue";
import CopyRights from "../../components/CopyRights.vue";
import HotelOverview from "./components/HotelOverview.vue";
import HotelMap from "./components/HotelMap.vue";
import AvailableRooms from "./components/AvailableRooms.vue";

const hotelsStore = useHotelsStore();

const searchQueries = hotelsStore.searchQueries;

const route = useRoute();

const hotelId = route.params.id;

const hotelDetails = ref({});
const hotelDescription = ref("");
const availableRooms = ref([]);
const isLoading = ref(false);
const hotelImgs = ref([]);

const getHotelDescription = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo",
    params: {
      hotel_id: hotelId,
      languagecode: "en-us",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    hotelDescription.value = response.data.data[0].description;
  } catch (error) {
    console.error(error);
  }
};

const getAvailableRooms = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getRoomList",
    params: {
      hotel_id: hotelId,
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
    availableRooms.value = response.data.data.rooms;
    console.log(availableRooms.value);
    isLoading.value = false;
  } catch (error) {
    console.error(error);
  }
};

const fetchHotelDetails = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
    params: {
      hotel_id: hotelId,
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
    isLoading.value = true;
    const response = await axios.request(options);
    console.log(response.data.data);
    hotelDetails.value = response.data.data;
    hotelImgs.value = Object.values(response.data.data.rooms)[0].photos;
    getHotelDescription();
    getAvailableRooms();
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchHotelDetails();
});
</script>
