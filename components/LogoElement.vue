<template>
  <div class="logo-container flex place-content-center"  @click="refreshPage">
    <!-- @mouseenter="startAnimation" @mouseleave="reverseAnimation" -->
      <div class="logo-elem triangle" data-augmented-ui="all-triangle-up border" ></div>
      <!-- <span class="text-6xl">rpad</span> -->
      <!-- @mouseenter="startAnimation" @mouseleave="reverseAnimation" -->
      <div class="logo-elem circle" ></div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// import gsap from "gsap";

// const animation = ref(null);

//     const startAnimation = (element) => {
//       animation.value = gsap.from(element, {
//         duration: 1,
//         backgroundColor: 'yellow',
//         onComplete: () => {
//           animation.value.set(element, { backgroundColor: 'blue', onComplete: () => {} });
//         },
//       });
//     };

//     const reverseAnimation = (element) => {
//       animation.value.reverse().onComplete(() => {
//         animation.value.set(element, { backgroundColor: 'yellow', onComplete: () => {} });
//       });
//     };

// const tl = gsap.timeline()

// const animateBg = () => {
//   tl.to('.logo-elem', {
//         background: 'var(--mainYellow)',
//         duration: 1,
//       });
//     }

const refreshPage = () => {
  window.scrollTo(0, 0);
  navigateTo('/')
};

</script>

<style scoped>
.logo-container {
  height: fit-content;
  width: fit-content;
  /* top: 10px;
  left: 20px;
  position: fixed; */
  z-index: 999;
  cursor: pointer;
}
.logo-container:nth-child(1):hover,
.logo-container:nth-child(2):hover {
    background-color: var(--mainYellow);

}
.logo-elem {
    width: 50px;
    height: 50px;
    background-color: white;
    transition: background-color 500ms;
}
/* .logo-elem:hover {
    background-color: var(--mainYellow);
} */
.circle {
    border-radius: 50%;
    transform: translateX(-20px);
}
</style>