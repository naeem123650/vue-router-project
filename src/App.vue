<template>
  <Navbar />
  <router-view :key="$router.path"></router-view>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>
