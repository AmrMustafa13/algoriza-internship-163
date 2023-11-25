<template>
  <div
    class="bg-white p-3 rounded-md w-[90%] mx-auto shadow-xl -translate-y-1/2 text-[#4F4F4F] flex justify-between items-center gap-4"
  >
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="destination"
    >
      <option value="0" disabled>Where are you going?</option>
      <option value="1">India</option>
      <option value="2">USA</option>
      <option value="3">UK</option>
    </select>
    <VueDatePicker
      v-model="checkIn"
      placeholder="Check in date"
      :enable-time-picker="false"
    ></VueDatePicker>
    <VueDatePicker
      v-model="checkOut"
      placeholder="Check out date"
      :enable-time-picker="false"
    ></VueDatePicker>
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="guests"
    >
      <option value="0" disabled>Guests</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <select
      class="border border-gray-300 rounded-md px-4 py-2 w-full"
      v-model="rooms"
    >
      <option value="0" disabled>Rooms</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button>
      <router-link
        to="/search"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-2 px-5"
      >
        Search
      </router-link>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const destination = ref("0");
const checkIn = ref("");
const checkOut = ref("");
const guests = ref("0");
const rooms = ref("0");
</script>
