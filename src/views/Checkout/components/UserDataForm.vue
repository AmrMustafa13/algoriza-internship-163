<template>
  <div class="flex flex-col rounded-md bg-white overflow-hidden">
    <header
      class="font-[500] bg-[#2F80ED] text-white flex items-center py-4 px-5 gap-2"
    >
      <img
        src="../../../assets/images/checkout/security-user.svg"
        alt="security-user"
      />
      <p class="text-lg">Room 1</p>
      <span>2 adults, 1 double bed and 1 twin bed, Non-smoking</span>
    </header>
    <form class="px-8 py-10">
      <div class="text-[#181818]">
        <label for="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" />
        <label for="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" />
      </div>
    </form>
  </div>
</template>

<script setup></script>
