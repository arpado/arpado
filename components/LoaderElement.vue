<template>
    <div class="container flex-c-c">
      <div data-augmented-ui="all-hex-alt border" id="hexagon-loader"></div>
    </div>
</template>

<script>
export default {
  //   data: () => ({
  //     loading: false,
  //   }),
  //   methods: {
  //     start() {
  //       this.loading = true;
  //     },
  //     finish() {
  //       this.loading = false;
  //     },
  //   },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: black;
}
#hexagon-loader {
  --aug-all-width: 200px;
  --aug-inlay-bg: black;
  --aug-border-bg: yellow;
  --aug-border-all: 30px;
  animation: spin 2s infinite ease-in-out;
}
@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>