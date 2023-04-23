<template>
  <div class="projects-section" id="projects">
    <div class="title-container flex-c-c">
      <h2>Projects</h2>
      <hr />
    </div>
    <div
      class="featured-project"
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
    ></div>

    <div
      class="featured-project"
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border"
    ></div>
    <Swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(page, index) in pages" :key="index">
      <h3>{{ page.name }}</h3>
        <br />
        <p>{{ page.description }}</p>
    </SwiperSlide>
  </Swiper>
    <!-- <transition-group > -->
    <!-- <div class="projects-container">
      <ProjectElement
        v-for="(page, index) in pages"
        :key="index"
        :page="page"
        class="project-element"
      />
    </div> -->
    <!-- </transition-group> -->
  </div>
</template>

<script>
// section-unit flex-c-c
import pages from "@/content/webpages.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  data() {
    return {
      pages,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  mounted() {
    gsap.to(".project-element", {
      scrollTrigger: {
        trigger: ".project-element",
        start: "top 80%",
      },
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      ease: "circ.out",
    });
  },
};
</script>

<style scoped>
.projects-section {
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: black;
}
.featured-project {
  min-height: 40vh;
  width: 80vw;
  margin: 10px auto;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  /* background-color: black; */
}
.title-container {
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
}
hr {
  width: 50%;
  margin: 1rem;
}
.project-element {
  opacity: 0;
}
</style>