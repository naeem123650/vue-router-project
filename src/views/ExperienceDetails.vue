<template>
  <div>
    <div class="row ml-1 mt-3 mr-1">
      <div class="col-md-12">
        <div class="card text-left shadow">
          <div class="card-body">
            <div class="row m-3">
              <div class="col-md-4 pl-3">
                <div class="card text-left shadow ml-3">
                  <img
                    class="card-img-top"
                    :src="require(`@/assets/${experience.image}`)"
                    :alt="experience.name"
                  />
                </div>
              </div>
              <div class="col-md-8 pl-5">
                <h4 class="card-title">{{ experience.name }}</h4>
                <p class="card-text">{{ experience.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store.js";
export default {
  name: "ExperienceDetails",
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceslug: {
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
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceslug
      );
    },
  },
};
</script>
