<template>
  <div class="projects-section">
    <h2>Some of my projects so far:</h2>
    <hr />
    <!-- <transition-group > -->
      <div class="projects-container">
        <ProjectElement
          v-for="(page, index) in pages"
          :key="index"
          :page="page"
          class="project-element"
        />
      </div>
    <!-- </transition-group> -->
  </div>
</template>

<script>
// section-unit flex-c-c
import pages from "@/content/webpages.json";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      pages,
    };
  },
  mounted() {
      gsap.to('.project-element', {
          scrollTrigger: {
              trigger: '.project-element',
              start: 'top 80%',
          },
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: "circ.out"
      })
  }
};
</script>

<style scoped>
.projects-section {
  width: 100vw;
  min-height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  /* background-color: black; */
}
hr {
  width: 25%;
}
.project-element {
    opacity: 0;
}
</style>