import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref({});

  const isLoggedIn = computed(() => localStorage.getItem("user") !== null);

  const setUser = (userData) => {
    user.value = userData;
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    user.value = {};
    localStorage.removeItem("user");
  };

  return {
    user,
    isLoggedIn,
    setUser,
    logout,
  };
});
