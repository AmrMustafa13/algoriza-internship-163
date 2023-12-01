<template>
  <div class="bg-[#f4f4f4]">
    <div class="container">
      <Navbar />
      <div class="flex flex-col gap-7 mx-[205px]">
        <h1 class="text-[#1a1a1a] text-3xl font-semibold">My trips</h1>
        <div v-if="bookedHotels.length > 0">
          <div class="flex flex-col gap-6 min-h-screen mb-8">
            <div
              v-for="hotel in bookedHotels"
              :key="hotel.hotel_id"
              class="rounded-md p-5 flex gap-5 bg-white"
            >
              <div
                class="flex-1 w-[285px] h-[200px] overflow-hidden rounded-md"
              >
                <img
                  src="../assets/images/hotel-gallery/1.webp"
                  alt="main"
                  class="object-cover w-full h-full"
                />
              </div>
              <div class="flex-[2] flex flex-col gap-7">
                <div>
                  <h3 class="text-[#1a1a1a] font-[500] text-xl">
                    {{ hotel.hotel_name }}
                  </h3>
                  <div class="flex gap-2 items-center">
                    <div class="flex items-center">
                      <img src="../assets/images/stars/full.svg" alt="star" />
                      <img src="../assets/images/stars/full.svg" alt="star" />
                      <img src="../assets/images/stars/full.svg" alt="star" />
                      <img src="../assets/images/stars/full.svg" alt="star" />
                      <img src="../assets/images/stars/half.svg" alt="star" />
                    </div>
                    <p class="text-sm text-[#4f4f4f]">4.5 (1200 reviews)</p>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex flex-col gap-2 text-sm text-[#4f4f4f]">
                    <span class="text-[#EB5757]"> Non refundable </span>
                    <span
                      >Check in:
                      {{ new Date(hotel.arrival_date).toDateString() }}</span
                    >
                    <span
                      >Check out:
                      {{ new Date(hotel.departure_date).toDateString() }}</span
                    >
                    <span>
                      {{
                        new Date(hotel.departure_date).getDate() -
                        new Date(hotel.arrival_date).getDate()
                      }}
                      night stay</span
                    >
                  </div>
                  <div class="flex justify-between items-end">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center justify-end">
                        <div>
                          <span
                            class="text-sm font-[500] text-[#EB5757] rounded-md line-through"
                          >
                            $150
                          </span>
                        </div>
                        <span
                          class="text-lg font-[500] px-2 rounded-md text-[#333]"
                        >
                          $130
                        </span>
                      </div>
                      <div>
                        <span class="text-sm text-[#333] font-light"
                          >Includes taxes and fees</span
                        >
                      </div>
                      <button class="mt-4">
                        <router-link
                          :to="`/hotel/${hotel.hotel_id}`"
                          class="font-[500] bg-[#2F80ED] text-white rounded-md py-3 px-5"
                        >
                          View trip detalis
                        </router-link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="mb-8 min-h-screen">
          <p class="text-[#333] text-xl font-[500] text-center">
            No trips booked
          </p>
        </div>
      </div>
      <CovidStatus />
      <Footer />
    </div>
  </div>
  <CopyRights />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import CovidStatus from "../components/CovidStatus.vue";
import Footer from "../components/Footer.vue";
import CopyRights from "../components/CopyRights.vue";
import { useHotelsStore } from "../stores/hotels";
import { storeToRefs } from "pinia";

const hotelsStore = useHotelsStore();

const { bookedHotels } = storeToRefs(hotelsStore);

console.log(bookedHotels.value);
</script>
