<template>
  <div>
    <div class="main-container" v-if="pageLoaded">
      <HeaderElement />
      <HeroSection />
      <ProjectsSection />
      <ContactElement />
      <FooterElement />
      <ModalView />
    </div>
    <transition name="fade" mode="in-out">
      <LoaderElement class="loader" v-if="!pageLoaded" />
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
import { useMainStore } from "@/stores/mainStore.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      pageLoaded: false,
    };
  },
  methods: {
    loaderLeave(el) {
      console.log(el);
      gsap.to(el, done, {
        opacity: 0,
        duration: 1,
        done: this.setPageLoad,
      });
    },
    setPageLoad() {
      this.pageLoaded = true;
    },
  },
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  mounted() {
    this.pageLoaded = true;

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 2500);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 5000);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 7500);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 10000);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 20000);
  },
};
</script>

<style>
@import "/node_modules/augmented-ui/augmented-ui.min.css";
@import "/assets/fonts/fonts.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
:root {
  --mainYellow: #a29118;
  --panelbgLightTopLeft: radial-gradient(
    ellipse 75% 95% at 0% 0%,
    #a29118 0%,
    rgba(18, 17, 14, 1) 50%,
    rgba(18, 17, 14, 1) 100%
  );
  --panelbgDarkTopLeft: radial-gradient(
    ellipse 50% 75% at 0% 0%,
    rgba(90, 50, 0, 1) 0%,
    rgba(18, 17, 14, 1) 50%,
    rgba(18, 17, 14, 1) 100%
  );
  --panelbgDarkTop: radial-gradient(
    ellipse 75% 50% at top,
    rgba(90, 50, 0, 1) 0%,
    rgba(18, 17, 14, 1) 50%,
    rgba(18, 17, 14, 1) 100%
  );
}
body {
  color: white;
  overflow-x: hidden;
  font-family: "Times New Roman", Times, serif;
  font-family: "Roboto";
  text-shadow: 0 0 5px black;
  background: black;
  background-image: url("/src/images/bg-stars.jpg");
  /* background-image: url("/images/black-sand-bg.jpeg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
a {
  color: var(--mainYellow);
  text-decoration-style: none;
}
/* general styles */
h1, h2, h3 {
  font-size: 1.3rem;
}
p {
  margin-top: 20px;
}
.section-unit {
  width: 100vw;
  height: 100vh;
  /* background-color: black; */
  position: relative;
  overflow: hidden;
}
.flex-c-c {
  display: flex;
  justify-content: center;
  align-items: center;
}
.yellow-btn {
  color: black;
  background-color: yellow;
  border: 2px solid black;
  border-radius: 5px;
  transition: 0.25s ease-out;
  text-shadow: none;
}
.yellow-btn:hover {
  cursor: pointer;
  box-shadow: 0 0 20px 2px yellow;
}
.yellow-btn > p {
  text-align: center;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  z-index: 980;
}
::-webkit-scrollbar-track {
  background-color: black;
}
::-webkit-scrollbar-thumb {
  background: var(--mainYellow);
  border-radius: 5px;
}
/* .loader-fade-leave-active {
  transition: opacity 0.5s ease;
}
.loader-fade-leave-to {
  opacity: 0;
} */
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
.fade-enter-active,
.fade-leave-active {
  transition: all 1s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.swiper-button-prev,
.swiper-button-next {
  color: var(--mainYellow);
  /* top: var(--swiper-navigation-top-offset,90%); */
  /* z-index: 1; */
}
.swiper-pagination {
  /* top: 87.6% !important;
  width: fit-content;
  left: 50% !important;
  transform: translateX(-50%); */
}
.swiper-pagination-bullet {
  background-color: var(--mainYellow);
  border: 2px solid white;
  width: 20px;
  height: 20px;
  margin: 0 8px;
  /* opacity: 1; */
}
.textbox > h3 {
  text-align: center;
  font-size: 1.3rem;
  margin: 10px;
}
.textbox > p {
  margin-top: 10px;
}
/* button anim */
.button-anim {
text-shadow: 0 0 0px var(--mainYellow);
  transition: 0.5s;
}
.button-anim:hover {
  text-shadow: 0 0 7px rgba(233, 220, 121, 0.5);
  /* background: rgb(162, 145, 24); */
  /* --aug-border-bg: linear-gradient(
    135deg,
    rgba(162, 145, 24, 1) 0%,
    rgba(162, 145, 24, 1) 40%,
    rgba(233, 220, 121, 1) 50%,
    rgba(162, 145, 24, 1) 60%,
    rgba(162, 145, 24, 1) 100%
  ); */
  /* animation: animate-bg 3s; */
}
.button-anim:hover::after {
   background: linear-gradient(
    135deg,
    rgba(162, 145, 24, 1) 0%,
    rgba(162, 145, 24, 1) 40%,
    rgba(233, 220, 121, 1) 50%,
    rgba(162, 145, 24, 1) 60%,
    rgba(162, 145, 24, 1) 100%
  );
  background-size: 300%;
  animation: animate-bg 3s;
  animation-play-state: running;
}
@keyframes animate-bg {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
@media (min-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  h2, h3 {
    font-size: 1.5rem;
  }
  .textbox > h3 {
    /* font-size: 2rem; */
    margin: 20px;
  }
}
/* .textbox {
  overflow-y: auto;
  min-height: 220px;
  height: 80%;
} */

/* section {
  scroll-margin-top: 120px;
} */
</style>