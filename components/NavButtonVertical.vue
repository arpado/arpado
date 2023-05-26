<template>
  <a
    class="wrapper"
    :href="button.href"
    @click="$emit('closeMenu')"
  >
    <span>{{ button.name }}</span>
  </a>
</template>

<script>
    // :style="{ transform: `translateY(${(index * 70) + 70}px)` }"
// 
// data-augmented-ui="
//   bl-clip-x br-clip-x t-clip-x both
// "
export default {
  name: "DropdownItem",
  props: ["button", "index"],
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  right: 0;
  text-decoration: none;
  color:var(--mainYellow);
  height: 50px;
  width: 150px;
  /* padding: 10px; */
  /* margin-top: 10px; */
  font-size: 2rem;
  background-color: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  /* --aug-bl-inset2: 30%;
  --aug-br-inset1: 30%;
  --aug-t-extend1: 30%; */
}
</style>