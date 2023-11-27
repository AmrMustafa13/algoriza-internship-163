<template>
  <div class="flex flex-col rounded-md bg-white overflow-hidden">
    <header
      class="font-[500] bg-[#F2C94C] text-[#333] flex items-center py-4 px-5 gap-2"
    >
      <p class="text-lg">Important information about your booking</p>
    </header>
    <div class="px-5 py-10 flex flex-col gap-8">
      <ol class="text-[15px]">
        <li>
          1. This rate is non-refundable. If you change or cancel your booking
          you will not get a refund or credit to use for a future stay.
        </li>
        <li>2. Stay extensions will require a new reservation.</li>
        <li>3. Front desk staff will greet guests on arrival.</li>
        <li>
          4. No refunds will be issued for late check-in or early check-out.
        </li>
      </ol>
      <p class="text-sm text-[#4f4f4f]">
        By clicking the button below, I acknowledge that I have reviewed the
        <span class="text-[#2F80ED]">Privacy Statement</span> and have reviewd
        and accept the
        <span class="text-[#2F80ED]">Rules and Restrictions</span> and
        <span class="text-[#2F80ED]">Terms of Use</span>.
      </p>
      <button
        class="font-[500] bg-[#2F80ED] text-white rounded-md py-2 px-5 self-start"
      >
        Complete Booking
      </button>
      <div class="flex items-center gap-2">
        <img
          src="../../../assets/images/checkout/lock-circle.svg"
          alt="lock-circle"
        />
        <span class="text-sm text-[#4F4F4F]"
          >We use secure transmission and encrypted storage to protect your
          personal information.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>
