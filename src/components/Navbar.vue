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
      <li>
        <router-link to="/discover">Discover</router-link>
      </li>
      <li>
        <router-link to="/activities">Activities</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <div class="flex justify-between items-center gap-2">
      <img src="../assets/images/notification.png" alt="notification" />
      <img src="../assets/images/profile.png" alt="profile" />
    </div>
  </nav>
</template>

<script setup></script>
