<template>
  <Navbar />
  <div v-if="isLoading">
    <LoadingSpinner />
  </div>
  <div class="bg-[#f4f4f4]" v-else>
    <div class="bg-gradient-to-b from-[#F4F4F400] to-[#fff]">
      <div class="container">
        <HotelGallery />
      </div>
    </div>
  </div>
  <div class="container">
    <CovidStatus />
    <Footer />
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

const hotelsStore = useHotelsStore();

const searchQueries = hotelsStore.searchQueries;

const route = useRoute();

const hotelId = route.params.id;

const hotelDetails = ref({});
const isLoading = ref(false);

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
    isLoading.value = false;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchHotelDetails();
});
</script>
