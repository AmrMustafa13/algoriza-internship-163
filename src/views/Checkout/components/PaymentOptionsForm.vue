<template>
  <div class="flex flex-col rounded-md bg-white overflow-hidden">
    <header
      class="font-[500] bg-[#2F80ED] text-white flex items-center py-4 px-5 gap-2"
    >
      <img
        src="../../../assets/images/checkout/card-tick.svg"
        alt="security-user"
      />
      <p class="text-lg">Payment Options</p>
    </header>
    <form class="px-8 py-10 flex flex-col gap-4">
      <div class="flex gap-2">
        <div
          class="p-2 rounded-md bg-[#F2F2F2] flex items-center justify-center w-[60px] h-[40px]"
        >
          <img
            class="w-full object-contain h-full"
            src="../../../assets/images/checkout/credit.png"
            alt="credit"
          />
        </div>
        <div
          class="p-2 rounded-md bg-[#F2F2F2] flex items-center justify-center w-[60px] h-[40px]"
        >
          <img
            class="w-full object-contain h-full"
            src="../../../assets/images/checkout/visa.png"
            alt="visa"
          />
        </div>
        <div
          class="p-2 rounded-md bg-[#F2F2F2] flex items-center justify-center w-[60px] h-[40px]"
        >
          <img
            class="w-full object-contain h-full"
            src="../../../assets/images/checkout/express.png"
            alt="express"
          />
        </div>
        <div
          class="p-2 rounded-md bg-[#F2F2F2] flex items-center justify-center w-[60px] h-[40px]"
        >
          <img
            class="w-full object-contain h-full"
            src="../../../assets/images/checkout/discover.png"
            alt="discover"
          />
        </div>
      </div>
      <div class="text-[rgb(24,24,24)] w-[80%]">
        <div class="flex flex-col gap-2">
          <label for="nameoncard">Name on Card</label>
          <div class="flex items-center gap-2">
            <input
              type="text"
              name="nameoncard"
              id="nameoncard"
              class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4 w-full"
            />
            <img
              src="../../../assets/images/checkout/tick-circle.svg"
              alt="tick-circle"
            />
          </div>
        </div>
      </div>
      <div class="text-[rgb(24,24,24)] w-[80%]">
        <div class="flex flex-col gap-2">
          <label for="cardnumber">Debit/Credit Card Number</label>
          <div class="flex items-center gap-2">
            <input
              type="text"
              name="cardnumber"
              id="cardnumber"
              class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4 w-full"
            />
            <img
              src="../../../assets/images/checkout/tick-circle.svg"
              alt="tick-circle"
            />
          </div>
        </div>
      </div>
      <div class="text-[#181818] flex gap-4 w-[80%]">
        <div class="flex flex-col gap-2">
          <label for="mobilecode" class="whitespace-nowrap"
            >Expiration Date</label
          >
          <div class="flex items-center gap-4">
            <select
              name="month"
              id="month"
              class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4"
            >
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
            </select>
            <select
              name="year"
              id="year"
              class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4"
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <img
              src="../../../assets/images/checkout/tick-circle.svg"
              alt="tick-circle"
            />
          </div>
        </div>
      </div>
      <div class="text-[#181818] flex gap-4 w-[80%]">
        <div class="flex gap-4 w-full items-center">
          <div class="flex flex-col gap-2 w-full">
            <label for="securitycode" class="whitespace-nowrap"
              >Security Code</label
            >
            <input
              type="text"
              name="securitycode"
              id="securitycode"
              class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4"
            />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="securitycode" class="whitespace-nowrap"
              >Billing Zip Code</label
            >
            <div class="flex gap-2 items-center w-full">
              <input
                type="text"
                name="billingcode"
                id="billingcode"
                class="border-[#4F4F4F]/20 border-2 rounded-md py-2 px-4 w-full"
              />
              <img
                src="../../../assets/images/checkout/tick-circle.svg"
                alt="tick-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup></script>
