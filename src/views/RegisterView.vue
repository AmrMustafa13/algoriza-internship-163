<template>
  <div class="container py-4 flex flex-col min-h-screen">
    <nav class="flex items-center gap-1 font-[500] text-lg">
      <img src="../assets/images/logo.png" alt="logo" />
      <router-link to="/">My Dream Place</router-link>
    </nav>
    <form class="flex flex-col justify-center my-auto self-center w-1/3 gap-4">
      <h1 class="font-semibold text-3xl">Register</h1>
      <label class="font-[500] text-sm" for="email"> Email address</label>
      <input
        type="email"
        id="email"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
      />
      <label class="font-[500] text-sm" for="password"> Password </label>
      <input
        type="password"
        id="password"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
      />
      <label class="font-[500] text-sm" for="confirmPassword">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
      />
      <button
        type="submit"
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-3"
      >
        Submit
      </button>
      <p>
        Already have an account?
        <router-link to="/login" class="text-[#2F80ED]">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
