<template>
  <nav class="flex justify-between items-center py-4">
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
      <div class="relative">
        <img
          src="../assets/images/profile.png"
          alt="profile"
          @click="dropDownOpen = !dropDownOpen"
          class="cursor-pointer"
        />
        <ul
          v-if="dropDownOpen"
          class="text-[#4F4F4F] rounded-lg bg-white absolute right-0 top-full flex flex-col gap-2 min-w-max"
        >
          <li
            class="flex items-center gap-2 border-b-2 pb-2 px-2 border-[#4f4f4f]/20"
          >
            <img src="../assets/images/user-dropdown/manage.svg" alt="manage" />
            <span>Manage Account</span>
          </li>
          <li class="border-b-2 pb-2 px-2 border-[#4f4f4f]/20">
            <router-link to="/my-trips" class="flex items-center gap-2">
              <img
                src="../assets/images/user-dropdown/my-trips.svg"
                alt="my-trips"
              />
              <span>My Trips</span>
            </router-link>
          </li>
          <li
            class="flex items-center gap-2 border-b-2 pb-2 px-2 border-[#4f4f4f]/20"
          >
            <img src="../assets/images/user-dropdown/wallet.svg" alt="wallet" />
            <span>Reward and Wallet</span>
          </li>
          <li
            class="flex items-center gap-2 border-b-2 pb-2 px-2 cursor-pointer border-[#4f4f4f]/20"
            @click="authStore.logout"
          >
            <img src="../assets/images/user-dropdown/logout.svg" alt="logout" />
            <span>Sign Out</span>
          </li>
        </ul>
      </div>
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
import { ref } from "vue";

const dropDownOpen = ref(false);

const authStore = useAuthStore();
</script>
