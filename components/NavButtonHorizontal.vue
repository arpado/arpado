<template>
  <a class="wrapper" :href="button.href">
    <span>{{ button.name }}</span>
  </a>
</template>

<script>
export default {
  props: ["button", "index"],
};
</script>

<style scoped>
.wrapper {
    position: relative;
     display: inline-block;
  text-decoration: none;
  color:var(--mainYellow);
  /* height: 50px; */
  /* width: 150px; */
  /* padding: 10px; */
  /* margin-top: 10px; */
  font-size: 1.5rem;
  margin: 0 20px;
  /* background-color: rgba(0,0,0,0.9); */
  display: flex;
  justify-content: center;
  align-items: center;
  /* --aug-bl-inset2: 30%;
  --aug-br-inset1: 30%;
  --aug-t-extend1: 30%; */
    /* transition: transform 1s ease-in-out; */

}
.wrapper::after {
    content: '';
    width: 100%;
    height: 2px;
    background: var(--mainYellow);
    position: absolute;
    bottom: 0;
    transform: rotateY(90deg);
    transition: transform 0.2s ease-out;
}
.wrapper:hover::after {
    transform: rotateY(0deg);
}
</style>