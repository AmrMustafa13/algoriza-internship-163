<template>
  <nav class="container flex justify-between items-center py-4">
    <div class="flex items-center gap-1 font-[500] text-lg">
      <img src="../assets/images/logo.png" alt="logo" />
      <router-link to="/">My Dream Place</router-link>
    </div>
    <ul class="flex justify-between items-center gap-12">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>Discover</li>
      <li>Activities</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div
      class="flex justify-between items-center gap-2"
      v-if="authStore.isLoggedIn"
    >
      <img src="../assets/images/notification.png" alt="notification" />
      <img src="../assets/images/profile.png" alt="profile" />
    </div>
    <button v-if="!authStore.isLoggedIn">
      <router-link
        to="/login"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-3 px-5"
      >
        Sign In
      </router-link>
    </button>
  </nav>
</template>

<script setup>
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>
