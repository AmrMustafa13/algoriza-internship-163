import WelcomeModal from '../../components/WelcomeModal.vue';

<template>
  <div class="container">
    <Navbar />
    <Header />
    <SearchBar />
    <CovidStatus />
    <DreamVacation />
    <Inspiration />
    <PopularHotels />
    <DownloadApp />
    <Explore />
    <Footer />
  </div>
  <CopyRights />
  <Teleport to="#welcome-modal">
    <WelcomeModal />
  </Teleport>
</template>

<script setup>
import Navbar from "../../components/Navbar.vue";
import Header from "./components/Header.vue";
import SearchBar from "../../components/SearchBar.vue";
import CovidStatus from "../../components/CovidStatus.vue";
import DreamVacation from "./components/DreamVacation.vue";
import Inspiration from "./components/Inspiration.vue";
import PopularHotels from "./components/PopularHotels.vue";
import DownloadApp from "./components/DownloadApp.vue";
import Explore from "./components/Explore.vue";
import Footer from "../../components/Footer.vue";
import CopyRights from "../../components/CopyRights.vue";
import WelcomeModal from "../../components/WelcomeModal.vue";
</script>
