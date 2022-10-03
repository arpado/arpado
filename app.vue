<template>
  <div>
    <div class="maim-container" v-if="pageLoaded">
      <VerticalMenu />
      <HeroSection />
      <StorySection />
      <ProjectsSection />
      <ContactElement />
      <FooterElement />
      <ModalView />
    </div>
      <!-- <div > -->
    <transition name="fade" mode="in-out">
        <LoaderElement class="loader" v-if="!pageLoaded" />
    </transition>
      <!-- </div> -->
  </div>
</template>

<script>
import gsap from "gsap";
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
// name="loader-fade">
// @before-leave="loaderLeave"

export default {
  data() {
    return {
      pageLoaded: false,
    };
  },
  methods: {
    loaderLeave(el) {
      console.log(el)
      gsap.to(el, done, {
        opacity: 0,
        duration: 1,
        done: this.setPageLoad
      })
    },
    setPageLoad() {
      this.pageLoaded = true
    },
  },
  mounted() {
    // this.loaderLeave('.loader');
    this.pageLoaded = true;
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
  --mainYellow: yellow;
}
body {
  color: white;
  overflow-x: hidden;
  font-family: "Times New Roman", Times, serif;
  font-family: "Roboto";
  text-shadow: 0 0 5px black;
  background: black;
  background-image: url("/images/black-sand-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
a {
  color: yellow;
}
/* general styles */

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
</style>