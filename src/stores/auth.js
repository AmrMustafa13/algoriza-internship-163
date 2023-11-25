import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const toast = useToast();
  const router = useRouter();

  const user = ref({});
  const isLoggedIn = ref(localStorage.getItem("user") !== null);

  const register = async (userData) => {
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      toast.success("User registered successfully!");
      router.push("/login");
    } else {
      toast.error("Something went wrong!");
    }
  };

  const login = async (userData) => {
    const response = await fetch("http://localhost:8000/users");

    const allUsers = await response.json();

    if (response.ok) {
      const currentUser = allUsers.find(
        (user) =>
          user.email === userData.email && user.password === userData.password
      );
      if (currentUser === undefined) {
        toast.error("Invalid credentials!");
        return;
      }
      user.value = currentUser;
      isLoggedIn.value = true;
      localStorage.setItem("user", JSON.stringify(currentUser));
      toast.success("User logged in successfully!");
      router.push("/");
    } else {
      toast.error("Something went wrong!");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    isLoggedIn.value = false;
    user.value = {};
    toast.success("User logged out successfully!");
    router.push("/login");
  };

  return {
    user,
    isLoggedIn,
    register,
    login,
    logout,
  };
});
