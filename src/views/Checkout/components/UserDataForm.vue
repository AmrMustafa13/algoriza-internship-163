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
    <form class="px-8 py-10 flex flex-col gap-4">
      <div class="text-[#181818] flex gap-4 w-[80%]">
        <div class="flex flex-col gap-2 w-full">
          <label for="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4"
          />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <label for="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4"
          />
        </div>
      </div>
      <div class="text-[#181818] flex gap-4 w-[80%]">
        <div class="flex flex-col gap-2">
          <label for="mobilecode" class="whitespace-nowrap"
            >Mobile Number</label
          >
          <div
            class="flex items-center border-[#4F4F4F]/20 border-2 rounded-md bg-[#f2f2f2] overflow-hidden px-2"
          >
            <img src="../../../assets/images/flag.png" alt="flag" />
            <select name="code" id="mobilecode" class="py-2 px-4 outline-none">
              <option value="+62">+62</option>
              <option value="+63">+63</option>
              <option value="+64">+64</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-2 self-end w-full">
          <input
            type="text"
            name="number"
            id="number"
            class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4 w-full"
          />
        </div>
      </div>
      <div class="flex items-center gap-2">
        <input type="checkbox" id="save" name="save" value="save" />
        <label for="save">Receive text alerts about this trip.</label>
      </div>
    </form>
  </div>
</template>

<script setup></script>
