<template>
  <div class="container py-4 flex flex-col min-h-screen">
    <nav class="flex items-center gap-1 font-[500] text-lg">
      <img src="../assets/images/logo.png" alt="logo" />
      <router-link to="/">My Dream Place</router-link>
    </nav>
    <form
      class="flex flex-col justify-center my-auto self-center w-1/3 gap-4"
      @submit.prevent="handleSubmit"
    >
      <h1 class="font-semibold text-3xl">Sign In</h1>
      <label class="font-[500] text-sm" for="email"> Email address</label>
      <input
        type="email"
        id="email"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
        v-model="email"
      />
      <label class="font-[500] text-sm" for="password"> Password </label>
      <input
        type="password"
        id="password"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
        v-model="password"
      />
      <button
        type="submit"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-3"
      >
        Sign In
      </button>
      <p>
        Don't have an account?
        <router-link to="/register" class="text-[#2F80ED]"
          >Register</router-link
        >
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const router = useRouter();

const email = ref("");
const password = ref("");

const toast = useToast();

const handleSubmit = () => {
  if (email.value === "" || password.value === "") {
    toast.error("Please fill in all fields");
    return;
  }

  const url = "http://localhost:8000/users";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const user = data.find(
        (user) => user.email === email.value && user.password === password.value
      );

      if (user) {
        authStore.login(user);
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    });
};
</script>
