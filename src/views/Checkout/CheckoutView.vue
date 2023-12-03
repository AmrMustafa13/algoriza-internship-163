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
          <UserDataForm :userDataFormInputs="userDataFormInputs" />
          <PaymentOptionsForm
            :paymentOptionsFormInputs="paymentOptionsFormInputs"
          />
          <PrivacyPolicy @addTrip="handleAddTrip" />
        </div>
        <div class="flex-1">
          <div v-if="Object.keys(tempHotel).length">
            <div class="flex flex-col gap-8">
              <HotelCard :hotelDetails="tempHotel" />
              <PriceDetails :hotelDetails="tempHotel" />
            </div>
          </div>
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
import { useToast } from "vue-toastification";

const toast = useToast();

const hotelsStore = useHotelsStore();

const { tempHotel, bookedHotels } = storeToRefs(hotelsStore);

import { ref } from "vue";
import { storeToRefs } from "pinia";

const open = ref(false);

const userDataFormInputs = ref({
  firstName: "",
  lastName: "",
  mobileCode: "+62",
  mobileNumber: "",
});

const paymentOptionsFormInputs = ref({
  cardNumber: "",
  cardName: "",
  cardSecurityCode: "",
  cardBillingZipCode: "",
});

const handleAddTrip = () => {
  if (!Object.keys(tempHotel.value).length) {
    toast.error("Please select a hotel first");
    return;
  }

  if (
    !userDataFormInputs.value.firstName ||
    !userDataFormInputs.value.lastName ||
    !userDataFormInputs.value.mobileNumber
  ) {
    toast.error("Please fill in your personal information");
    return;
  }

  if (
    !paymentOptionsFormInputs.value.cardNumber ||
    !paymentOptionsFormInputs.value.cardName ||
    !paymentOptionsFormInputs.value.cardSecurityCode ||
    !paymentOptionsFormInputs.value.cardBillingZipCode
  ) {
    toast.error("Please fill in your payment information");
    return;
  }

  open.value = true;
  // move temp to booked
  bookedHotels.value.push(tempHotel.value);
  tempHotel.value = {};
  // save it to local storage
  localStorage.setItem("bookedHotels", JSON.stringify(bookedHotels.value));
};

const handleClose = () => {
  open.value = false;
};
</script>
