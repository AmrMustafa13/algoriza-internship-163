import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import SearchView from "../views/Search/SearchView.vue";
import CheckoutView from "../views/Checkout/CheckoutView.vue";
import HotelDetails from "../views/HotelDetails/HotelDetails.vue";
import MyTripsView from "../views/MyTripsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/hotel/:id",
      name: "hotel",
      component: HotelDetails,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/my-trips",
      name: "my-trips",
      component: MyTripsView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("user") !== null;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth === false)) {
    if (isLoggedIn) {
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
