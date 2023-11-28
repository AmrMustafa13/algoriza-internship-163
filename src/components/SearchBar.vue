<template>
  <div
    class="bg-white p-3 rounded-md w-[90%] mx-auto shadow-xl -translate-y-1/2 text-[#4F4F4F] flex justify-between items-center gap-4"
  >
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="destination"
      @change="changeSearchQuery"
      name="destination"
    >
      <option value="0" disabled>Where are you going?</option>
      <option
        v-for="destination in destinationOptions"
        :key="destination.dest_id"
        :value="destination.dest_id + ',' + destination.name"
      >
        {{ destination.name }}
      </option>
    </select>
    <input
      type="text"
      name="checkIn"
      placeholder="Check in date"
      onfocus="(this.type='date')"
      onblur="(this.type='text')"
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="checkIn"
      @change="changeSearchQuery"
    />
    <input
      type="text"
      name="checkOut"
      placeholder="Check out date"
      onfocus="(this.type='date')"
      onblur="(this.type='text')"
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="checkOut"
      @change="changeSearchQuery"
    />
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="guests"
      @change="changeSearchQuery"
      name="guests"
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
      name="rooms"
    >
      <option value="0" disabled>Rooms</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button
      @click="handleSearch"
      class="font-[500] bg-[#2F80ED] text-white rounded-md py-2 px-5"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useHotelsStore } from "../stores/hotels";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();

const toast = useToast();

const hotelsStore = useHotelsStore();

const searchQueries = hotelsStore.searchQueries;

const destination = ref(searchQueries.destination || "0");
const checkIn = ref(searchQueries.checkIn);
const checkOut = ref(searchQueries.checkOut);
const guests = ref(searchQueries.guests || "0");
const rooms = ref(searchQueries.rooms || "0");

const destinationOptions = ref([]);

const getDestinationOptions = async () => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
    params: { query: "egypt" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    destinationOptions.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getDestinationOptions();
});

const changeSearchQuery = (e) => {
  hotelsStore.addSearchQuery({
    [e.target.name]: e.target.value,
  });
};

const handleSearch = async () => {
  if (
    !destination.value ||
    !checkIn.value ||
    !checkOut.value ||
    !guests.value ||
    !rooms.value
  ) {
    toast.error("Please fill all the fields");
    return;
  }

  hotelsStore.fetchHotels();
  router.push("/search");
};
</script>
