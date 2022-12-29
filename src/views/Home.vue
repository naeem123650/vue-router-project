.
<template>
  <div>
    <div class="row">
      <b4 class="col-md-12 text-center mt-3">
        <h3>All Destinations</h3>
      </b4>
    </div>
    <div class="row">
      <div
        class="col-md-3 text-center mt-3"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          <div class="card text-left shadow">
            <img
              class="card-img-top"
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
            <div class="card-body text-center">
              <h4 class="card-title">{{ destination.name }}</h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store.js";

export default {
  name: "Home",
  computed: {
    destinations() {
      return store.destinations;
    },
  },
};
</script>

<style></style>
