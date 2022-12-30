<template>
  <div>
    <div class="card text-left shadow text-center mt-2">
      <div class="card-body">
        <h4 class="card-title">The page you are looking for is not found.</h4>
        <p class="card-text">
          <router-link :to="{ name: 'Home' }">
            Go Home
            <i class="fa-solid fa-arrow-left"></i
          ></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
