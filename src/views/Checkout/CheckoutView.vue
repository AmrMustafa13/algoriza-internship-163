<template>
  <div class="bg-white">
    <div class="container">
      <Navbar />
    </div>
  </div>
  <div class="bg-[rgb(244,244,244)]">
    <div class="container">
      <h1 class="font-semibold text-3xl text-[#1A1A1A] pt-8 mb-10">
        Secure your reservation
      </h1>
      <CovidStatus />
      <div class="flex justify-between gap-8 pb-32">
        <div class="flex-[2] flex flex-col gap-8">
          <UserDataForm />
          <PaymentOptionsForm />
          <PrivacyPolicy @addTrip="handleAddTrip" />
        </div>
        <div class="flex-1 flex flex-col gap-8">
          <HotelCard :hotelDetails="tempHotel" />
          <PriceDetails />
        </div>
      </div>
    </div>
  </div>
  <Teleport to="#booking-modal">
    <BookingModal :open="open" @close="handleClose" />
  </Teleport>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import CovidStatus from "../../components/CovidStatus.vue";
import UserDataForm from "./components/UserDataForm.vue";
import PaymentOptionsForm from "./components/PaymentOptionsForm.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import HotelCard from "./components/HotelCard.vue";
import PriceDetails from "./components/PriceDetails.vue";
import BookingModal from "../../components/BookingModal.vue";
import { useHotelsStore } from "../../stores/hotels";

const hotelsStore = useHotelsStore();

const { tempHotel } = storeToRefs(hotelsStore);

import { ref } from "vue";
import { storeToRefs } from "pinia";

const open = ref(false);

const handleAddTrip = () => {
  open.value = true;
};

const handleClose = () => {
  open.value = false;
};
</script>
