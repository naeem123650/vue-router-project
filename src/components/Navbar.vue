<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
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
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import store from "../../store.js";
export default {
  name: "Navbar",
  computed: {
    destinations() {
      return store.destinations;
    },
  },
};
</script>

<style></style>
