import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useHotelsStore = defineStore("hotels", () => {
  const searchQueries = ref({});

  const currentPage = ref(1);
  const totalPages = ref(0);
  const totalResults = ref(0);

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
      totalResults.value = response.data.data?.meta?.[0]["title"].split(" ")[0];
      totalPages.value = Math.ceil(totalResults.value / 20);
      allHotels.value = response.data.data?.hotels;
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  const changePage = (page) => {
    currentPage.value = page;
  };

  const paginateHotels = async () => {
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
        page_number: currentPage.value,
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
    currentPage,
    totalPages,
    totalResults,
    allHotels,
    isLoading,
    hasResults,
    hasNoResults,
    changePage,
    paginateHotels,
  };
});
