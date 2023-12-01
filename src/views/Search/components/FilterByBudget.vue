<template>
  <div class="rounded-md flex flex-col gap-2 border border-[#E2E2E2]">
    <h3 class="text-[#181818] text-[500] bg-[#F2F2F2] p-4">
      Your budget per day
    </h3>
    <div class="text-sm text-[#333] pt-4 px-4 flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="0-200"
          name="fixed-budget"
          value="0-200"
          v-model="fixedBudgetFilter"
          @change="changeFixedBudget"
          :checked="fixedBudgetFilter === '0-200'"
        />
        <label for="0-200">$ 0 - $ 200</label>
      </div>
      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="200-500"
          name="fixed-budget"
          value="200-500"
          v-model="fixedBudgetFilter"
          @change="changeFixedBudget"
          :checked="fixedBudgetFilter === '200-500'"
        />
        <label for="200-500">$ 200 - $ 500</label>
      </div>
      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="500-1000"
          name="fixed-budget"
          value="500-1000"
          v-model="fixedBudgetFilter"
          @change="changeFixedBudget"
          :checked="fixedBudgetFilter === '500-1000'"
        />
        <label for="500-1000">$ 500 - $ 1000</label>
      </div>
      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="1000-2000"
          name="fixed-budget"
          value="1000-2000"
          v-model="fixedBudgetFilter"
          @change="changeFixedBudget"
          :checked="fixedBudgetFilter === '1000-2000'"
        />
        <label for="1000-2000">$ 1000 - $ 2000</label>
      </div>
      <div class="flex items-center gap-2">
        <input
          type="radio"
          id="2000-5000"
          name="fixed-budget"
          value="2000-5000"
          v-model="fixedBudgetFilter"
          @change="changeFixedBudget"
          :checked="fixedBudgetFilter === '2000-5000'"
        />
        <label for="2000-5000">$ 2000 - $ 5000</label>
      </div>
    </div>
    <span class="text-[#4F4F4F] text-sm px-4 pt-2">Set your own budget</span>
    <div
      class="flex flex-col gap-4 rounded-md p-4 m-4 mt-2 bg-white border border-dashed border-[#E2E2E2]"
    >
      <form class="flex items-center gap-4">
        <input
          type="text"
          class="w-full outline-none p-2 border border-[#e0e0e0] rounded-md placeholder:text-[#333]"
          placeholder="Min budget"
          v-model="minBudget"
          name="minBudget"
          @keydown.enter.exact.prevent="handleSubmit"
          @change="changeBudgetFilter"
        />
        <input
          type="text"
          class="w-full outline-none p-2 border border-[#e0e0e0] rounded-md placeholder:text-[#333]"
          placeholder="Max budget"
          v-model="maxBudget"
          name="maxBudget"
          @keydown.enter.exact.prevent="handleSubmit"
          @change="changeBudgetFilter"
        />
      </form>
      <span class="text-[#4F4F4F] text-sm">Press Enter to filter</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useHotelsStore } from "../../../stores/hotels";
import { useToast } from "vue-toastification";
import { storeToRefs } from "pinia";

const toast = useToast();

const hotelsStore = useHotelsStore();

const { budgetFilter } = storeToRefs(hotelsStore);

const minBudget = ref(budgetFilter.value.minBudget || "");
const maxBudget = ref(
  (budgetFilter.value.maxBudget !== Infinity && budgetFilter.value.maxBudget) ||
    ""
);

const { fixedBudgetFilter } = storeToRefs(hotelsStore);

const changeFixedBudget = (e) => {
  hotelsStore.budgetFilter = {
    minBudget: +e.target.value.split("-")[0],
    maxBudget: +e.target.value.split("-")[1],
  };
  // save to local storage
  localStorage.setItem(
    "budgetFilter",
    JSON.stringify({
      minBudget: +e.target.value.split("-")[0],
      maxBudget: +e.target.value.split("-")[1],
    })
  );

  minBudget.value = "";
  maxBudget.value = "";

  hotelsStore.fetchHotels();
};

const changeBudgetFilter = (e) => {
  hotelsStore.addBudgetFilter({
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = () => {
  if (minBudget.value !== "" && maxBudget.value !== "") {
    if (+minBudget.value > +maxBudget.value) {
      toast.error("Min budget cannot be greater than max budget");
      return;
    } else {
      hotelsStore.addBudgetFilter({
        minBudget: minBudget.value,
        maxBudget: maxBudget.value,
      });
    }
  } else if (minBudget.value !== "" && maxBudget.value === "") {
    hotelsStore.addBudgetFilter({
      minBudget: minBudget.value,
      maxBudget: Infinity,
    });
  } else if (maxBudget.value !== "" && minBudget.value === "") {
    hotelsStore.addBudgetFilter({
      minBudget: 0,
      maxBudget: maxBudget.value,
    });
  } else {
    hotelsStore.addBudgetFilter({
      minBudget: 0,
      maxBudget: Infinity,
    });
  }

  fixedBudgetFilter.value = "";

  hotelsStore.fetchHotels();
};
</script>
