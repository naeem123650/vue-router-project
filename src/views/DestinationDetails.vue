<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-4 pl-3">
        <div class="card text-left shadow ml-3">
          <img
            class="card-img-top"
            :src="require(`@/assets/${destination.image}`)"
            :alt="destination.name"
          />
        </div>
      </div>
      <div class="col-md-8 pl-5">
        <h4 class="card-title">{{ destination.name }}</h4>
        <p class="card-text">{{ destination.description }}</p>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-12 text-center">
        <h3 class="m-3">Experience in {{ destination.name }} Destination</h3>
      </div>
    </div>
    <div class="row mt-2">
      <div
        class="col-md-3"
        v-for="experience in destination.experiences"
        :key="experience.name"
      >
        <router-link
          :to="{
            name: 'ExperienceDetails',
            params: { experienceslug: experience.slug },
          }"
        >
          <div class="card text-left shadow">
            <img
              class="card-img-top"
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <div class="card-body text-center">
              <h4 class="card-title">{{ experience.name }}</h4>
            </div>
          </div>
        </router-link>
      </div>
      <router-view :key="$router.path"></router-view>
    </div>
    <div class="row">
      <div class="mt-2"></div>
    </div>
  </div>
</template>

<script>
import store from "../../store.js";

export default {
  name: "DestinationDetails",
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>
