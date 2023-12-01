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
      :min="today.toISOString().split('T')[0]"
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
      :min="tomorrow.toISOString().split('T')[0]"
    />
    <input
      type="text"
      name="guests"
      placeholder="Guests"
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="guests"
      @change="changeSearchQuery"
    />

    <input
      type="text"
      name="rooms"
      placeholder="Rooms"
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="rooms"
      @change="changeSearchQuery"
    />
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
const guests = ref(searchQueries.guests || "");
const rooms = ref(searchQueries.rooms || "");

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

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
    // filter search type to only cities
    destinationOptions.value = response.data.data.filter(
      (destination) => destination.search_type === "city"
    );
    // save to local storage
    localStorage.setItem(
      "destinationOptions",
      JSON.stringify(destinationOptions.value)
    );
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  // get destination options from local storage
  const destinationOptionsFromLocalStorage = JSON.parse(
    localStorage.getItem("destinationOptions")
  );
  // if destination options are not in local storage, fetch them
  if (!destinationOptionsFromLocalStorage) {
    getDestinationOptions();
  } else {
    destinationOptions.value = destinationOptionsFromLocalStorage;
  }
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

  if (checkIn.value > checkOut.value) {
    toast.error("Check in date must be before check out date");
    return;
  }

  hotelsStore.fetchHotels();
  router.push("/search");
};
</script>
