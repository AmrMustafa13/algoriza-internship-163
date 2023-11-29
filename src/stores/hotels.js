import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useHotelsStore = defineStore("hotels", () => {
  const searchQueries = ref(
    localStorage.getItem("searchQueries")
      ? JSON.parse(localStorage.getItem("searchQueries"))
      : {}
  );

  const currentPage = ref(1);
  const totalPages = ref(0);
  const totalResults = ref(0);

  const allHotels = ref([]);
  const filteredHotels = ref([]);

  const isLoading = ref(false);

  const sortByOption = ref("");

  const budgetFilter = ref({
    minBudget: 0,
    maxBudget: Infinity,
  });

  const hasResults = computed(() => allHotels.value.length > 0);
  const hasNoResults = computed(() => allHotels.value.length === 0);

  const filterByPropertyName = (propetyName) => {
    filteredHotels.value = allHotels.value.filter((hotel) =>
      hotel.property.name
        .toLowerCase()
        .includes(propetyName.toLowerCase().trim())
    );
  };

  const sortHotelsBy = (sortBy) => {
    sortByOption.value = sortBy;
  };

  const filterByBudget = (budgerObj) => {
    budgetFilter.value = budgerObj;
  };

  const addSearchQuery = (query) => {
    searchQueries.value = { ...searchQueries.value, ...query };
    // save search query to local storage
    localStorage.setItem("searchQueries", JSON.stringify(searchQueries.value));
  };

  const addBudgetFilter = (budgetObj) => {
    budgetFilter.value = { ...budgetFilter.value, ...budgetObj };
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
        page_number: currentPage.value,
        sort_by: sortByOption.value,
        price_min: +budgetFilter.value.minBudget,
        price_max: +budgetFilter.value.maxBudget,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };
    try {
      isLoading.value = true;
      const response = await axios.request(options);
      if (currentPage.value === 1) {
        totalResults.value =
          response.data.data?.meta?.[0]["title"].split(" ")[0];
        totalPages.value = Math.ceil(totalResults.value / 20);
      }
      allHotels.value = response.data.data?.hotels;
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  const changePage = (page) => {
    currentPage.value = page;
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
    filterByPropertyName,
    sortHotelsBy,
    sortByOption,
    filterByBudget,
    filteredHotels,
    addBudgetFilter,
    budgetFilter,
  };
});
