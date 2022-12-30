<template>
  <i class="fa-solid fa-arrow-left" @click="goBack()"></i>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style></style>
