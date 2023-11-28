<template>
  <div class="rounded-md flex flex-col gap-2 border border-[#E2E2E2]">
    <h3 class="text-[#181818] text-[500] bg-[#F2F2F2] p-4">
      Your budget per day
    </h3>
    <div
      class="flex items-center gap-4 rounded-md p-4 m-4 mt-2 bg-white border border-dashed border-[#E2E2E2]"
    >
      <input
        type="text"
        class="w-full outline-none p-2 border border-[#e0e0e0] rounded-md placeholder:text-[#333]"
        placeholder="Min budget"
      />
      <input
        type="text"
        class="w-full outline-none p-2 border border-[#e0e0e0] rounded-md placeholder:text-[#333]"
        placeholder="Max budget"
      />
    </div>
  </div>
</template>

<script setup></script>
