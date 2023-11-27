import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useHotelsStore = defineStore("hotels", () => {
  const searchQueries = ref({});

  const allHotels = ref([]);
  const isLoading = ref(false);

  const hasResults = computed(() => allHotels.value.length > 0);
  const hasNoResults = computed(() => allHotels.value.length === 0);

  const addSearchQuery = (query) => {
    searchQueries.value = { ...searchQueries.value, ...query };
  };

  const fetchHotels = async () => {
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        dest_id: searchQueries.value.destination.split(",")[0],
        search_type: "CITY",
        arrival_date: searchQueries.value.checkIn,
        departure_date: searchQueries.value.checkOut,
        adults: searchQueries.value.guests,
        room_qty: searchQueries.value.rooms,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    try {
      isLoading.value = true;
      const response = await axios.request(options);
      allHotels.value = response.data.data?.hotels;
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    searchQueries,
    addSearchQuery,
    fetchHotels,
    allHotels,
    isLoading,
    hasResults,
    hasNoResults,
  };
});
