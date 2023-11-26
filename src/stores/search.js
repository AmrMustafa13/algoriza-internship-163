import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  // save the search queries in the store
  const searchQueries = ref({});
  const searchResults = ref([]);

  // computed property to check if the search results are empty
  const hasResults = computed(() => searchResults.value.length > 0);

  // function to add a search query to the store
  const updateSearchQueries = (queries) => {
    searchQueries.value = queries;
  };

  // function to add search results to the store
  const addSearchResults = (results) => {
    searchResults.value = results;
  };

  return {
    searchQueries,
    searchResults,
    hasResults,
    updateSearchQueries,
    addSearchResults,
  };
});
