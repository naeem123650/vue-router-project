<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        >Travel Gallery</router-link
      >
      <button
        class="navbar-toggler d-lg-none text-white"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'Home' }"
              >Home
            </router-link>
          </li>
          <li
            class="nav-item"
            v-for="destination in destinations"
            :key="destination"
          >
            <router-link
              class="nav-link"
              :to="{
                name: 'DestinationDetails',
                params: { slug: destination.slug },
              }"
              >{{ destination.name }}</router-link
            >
          </li>
          <li class="nav-item">
            <span class="nav-link">
              <GoBack />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import store from "../../store.js";
import GoBack from "@/components/GoBack";

export default {
  name: "Navbar",
  components: {
    GoBack,
  },
  computed: {
    destinations() {
      return store.destinations;
    },
  },
};
</script>

<style></style>
