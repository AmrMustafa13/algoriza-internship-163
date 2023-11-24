<template>
  <div class="container py-4 flex flex-col min-h-screen">
    <nav class="flex items-center gap-1 font-[500] text-lg">
      <img src="../assets/images/logo.png" alt="logo" />
      <router-link to="/">My Dream Place</router-link>
    </nav>
    <form
      class="flex flex-col justify-center my-auto self-center w-1/3 gap-4"
      @submit.prevent="handleSubmit"
    >
      <h1 class="font-semibold text-3xl">Register</h1>
      <label class="font-[500] text-sm" for="email"> Email address</label>
      <input
        type="email"
        id="email"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
        v-model="email"
      />
      <label class="font-[500] text-sm" for="password"> Password </label>
      <input
        type="password"
        id="password"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
        v-model="password"
      />
      <label class="font-[500] text-sm" for="confirmPassword">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        class="bg-[#F2F2F2] rounded-md py-3 px-2"
        v-model="confirmPassword"
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

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const toast = useToast();

const handleSubmit = () => {
  // check if all fields are filled
  if (!email.value || !password.value || !confirmPassword.value) {
    toast.error("Please fill in all fields");
    return;
  }

  const url = "http://localhost:8000/users";

  // check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    toast.error("Please enter a valid email address");
    return;
  }

  // check if password is valid
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordRegex.test(password.value)) {
    toast.error(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number"
    );
    return;
  }

  // check if password and confirm password match
  if (password.value !== confirmPassword.value) {
    toast.error("Passwords do not match");
    return;
  }

  // register user
  const user = {
    email: email.value,
    password: password.value,
  };

  // post request to register user db.json server
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      toast.success("User registered successfully");
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something went wrong");
    });

  // redirect to login page
  router.push("/login");
};
</script>
