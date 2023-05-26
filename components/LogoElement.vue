<template>
  <div class="logo-container flex place-content-center">
      <div class="logo-elem triangle" data-augmented-ui="all-triangle-up border"></div>
      <!-- <span class="text-6xl">rpad</span> -->
      <div class="logo-elem circle"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo-container {
  height: fit-content;
  width: fit-content;
  /* top: 10px;
  left: 20px;
  position: fixed; */
  z-index: 999;
}
.logo-elem {
    width: 50px;
    height: 50px;
    background-color: white;
}
.circle {
    border-radius: 50%;
    transform: translateX(-20px);
}
</style>