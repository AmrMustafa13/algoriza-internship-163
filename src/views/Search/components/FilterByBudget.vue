<template>
  <div class="rounded-md flex flex-col gap-2 border border-[#E2E2E2]">
    <h3 class="text-[#181818] text-[500] bg-[#F2F2F2] p-4">
      Your budget per day
    </h3>
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
  (budgetFilter.value.maxBudget !== Infinity &&
    budgetFilter.value.maxBudget !== null) ||
    ""
);

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

  hotelsStore.fetchHotels();
};
</script>
