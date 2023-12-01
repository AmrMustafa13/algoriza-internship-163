import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useHotelsStore = defineStore("hotels", () => {
  const searchQueries = ref(
    localStorage.getItem("searchQueries")
      ? JSON.parse(localStorage.getItem("searchQueries"))
      : {}
  );

  const currentPage = ref(localStorage.getItem("currentPage") || 1);
  const totalPages = ref(localStorage.getItem("totalPages") || 0);
  const totalResults = ref(localStorage.getItem("totalResults") || 0);

  const allHotels = ref(
    localStorage.getItem("hotels")
      ? JSON.parse(localStorage.getItem("hotels"))
      : []
  );

  const isLoading = ref(false);

  const sortByOption = ref(
    localStorage.getItem("sortByOption") || "popularity"
  );

  const budgetFilter = ref(
    JSON.parse(localStorage.getItem("budgetFilter")) || {
      minBudget: 0,
      maxBudget: Infinity,
    }
  );

  const fixedBudgetFilter = ref(
    budgetFilter.value.minBudget + "-" + budgetFilter.value.maxBudget
  );

  const propertyNameFilter = ref("");

  const ratingFilter = ref(0);

  const hasResults = computed(() => allHotels.value.length > 0);
  const hasNoResults = computed(() => allHotels.value.length === 0);
  const filteredHotels = computed(() => {
    if (propertyNameFilter.value !== "" && ratingFilter.value !== 0) {
      return allHotels.value.filter(
        (hotel) =>
          hotel.property.name
            .toLowerCase()
            .includes(propertyNameFilter.value.toLowerCase()) &&
          hotel.property.reviewScore / 2 >= ratingFilter.value
      );
    }

    if (propertyNameFilter.value !== "") {
      return allHotels.value.filter((hotel) =>
        hotel.property.name
          .toLowerCase()
          .includes(propertyNameFilter.value.toLowerCase())
      );
    }

    if (ratingFilter.value !== 0) {
      return allHotels.value.filter(
        (hotel) => hotel.property.reviewScore / 2 >= ratingFilter.value
      );
    }

    return allHotels.value;
  });

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
    // save to local storage
    localStorage.setItem("budgetFilter", JSON.stringify(budgetFilter.value));
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
        adults: +searchQueries.value.guests,
        room_qty: +searchQueries.value.rooms,
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
        // save to local storage
        localStorage.setItem("totalResults", totalResults.value);
        localStorage.setItem("totalPages", totalPages.value);
      }
      allHotels.value = response.data.data?.hotels;
      // save to local storage
      localStorage.setItem("hotels", JSON.stringify(allHotels.value));
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  const changePage = (page) => {
    currentPage.value = page;
    // save to local storage
    localStorage.setItem("currentPage", currentPage.value);
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
    filteredHotels,
    propertyNameFilter,
    ratingFilter,
    sortByOption,
    filterByBudget,
    addBudgetFilter,
    budgetFilter,
    fixedBudgetFilter,
  };
});
