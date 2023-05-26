<template>
  <div
    class="button flex place-content-center flex-wrap text-xl p-4 mx-auto my-4"
    data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
.button {
  /* height: 100px; */
  min-width: 200px;
  width: fit-content;
  /* font-size: 1.3rem; */
  box-shadow: 0 0 10px 0px black;
  text-decoration-style: none;
  --aug-inlay-bg: #2a2615;
  color: #a29118;
  text-decoration-style: none;
  cursor: pointer;
  box-shadow: 0 0 10px 0px black;
  font-weight: bold;
}
.button:hover {
  cursor: pointer;
  box-shadow: 0 0 20px 2px yellow;
}
span {
  text-shadow: 1px 1px black;
}
</style>