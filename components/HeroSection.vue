<template>
  <div class="hero-section h-screen w-screen relative" id="hero">
    <div class="content-box" data-augmented-ui="tl-round br-round border both">
      <h1 class="text-2xl sm:text-4xl text-center w-full">
        Transforming ideas<br />into<br />digital experiences.
      </h1>
      <div class="my-4 mx-2 md:text-lg">
        <p>
          Elevate your online presence with expertly crafted, captivatingly
          animated, and seamlessly responsive websites that forge meaningful
          connections between you, your product, and the audience you value
          most!
        </p>
        <p>
          I'm here to assist you in achieving your goals! Would you like to
          explore further? Feel free to click on the buttons below for more
          information!
        </p>
        <!-- <p>Crafted lines of code, <br />Worldwide presence established,<br /> Digital success.</p> -->
      </div>

      <!-- <ButtonElement text="Learn More" /> -->

      <div class="btn-container flex mx-auto">
        <a
          href="#about"
          class="button button-anim about-btn"
          data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
        >
          <span>About me</span>
        </a>
        <a
          href="#projects"
          class="button button-anim projects-btn"
          data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
        >
          <span>My projects</span>
        </a>
      </div>
    </div>
    <PlanetSection />
    <!-- <ButtonElement class="cta-btn text-3xl p-4 mx-auto my-4" id="projects-btn" text="Projects" /> -->
  </div>
</template>

<script>
import gsap from "gsap";
import { useWindowSize } from "@vueuse/core";

export default {
  mounted() {
    // gsap.to(".animate-in", {
    //   opacity: 1,
    //   duration: 2,
    //   stagger: 1,
    // });
  },
};
</script>

<style scoped>
.hero-section {
  /* width: 100vw;
  height: 100vh; */
  /* background-color: black; */
  /* position: relative; */
  /* overflow: hidden; */
  text-shadow: 0 0 2px white;
  background-image: url("/src/images/bg-stars.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.content-box {
  height: fit-content;
  min-height: 500px;
  width: 600px;
  max-width: 90vw;
  /* max-height: fit-content; */
  /* border: 1px solid white; */
  position: absolute;
  top: calc(50% + 42px);
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(0, 0, 0, 0.7); */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  -webkit-text-stroke: 0.3px black;
  z-index: 9;
  padding: 1rem;
  margin: 0 auto;
  /* --aug-border-bottom: 20px;
  --aug-br-inset1: 200px;
  --aug-br-inset2: 10px;
  --aug-br: 20px;
  --aug-inlay-all: 10px; */
  --aug-inlay-bg: var(--panelbgLightTopLeft);
  --aug-inlay-opacity: 0.7;
}
.text-box {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 2rem 0.5rem; */
}
.text-box {
  /* font-size: 3rem; */
  /* line-height: 0; */
}

.animate-in {
  opacity: 0;
}
#hexagon-1 {
  position: absolute;
  top: 15vh;
  left: -25rem;
  --aug-all-width: 80vh;
  --aug-inlay-bg: black;
  --aug-border-bg: yellow;
  --aug-border-all: 60px;
  z-index: -1;
}
#title-box-1 {
  font-family: "EB Garamond";
}
#title-box-2 {
  font-family: "Tangerine";
  font-size: 4rem;
}
#title-box-3 {
  font-family: "Orbitron";
  font-size: 2.5rem;
}
#projects-btn {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}
.btn-container {
  flex-direction: column;
}
.button {
  width: 190px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* --aug-tl: 45px; */
  cursor: pointer;
  color: var(--mainYellow);
  font-size: 1.3rem;
  font-weight: bold;
  --aug-inlay-bg: #2a2615;
  margin-top: 20px;
}
.about-btn {
  --aug-br: initial;
  transform: translateX(0px);
}
.about-btn > span {
  transform: translateX(0px);
}
.projects-btn {
  --aug-tl: initial;
  transform: translateX(0px);
}
.projects-btn > span {
  transform: translateX(0px);
}

@media (min-width: 480px) {
  .btn-container {
    flex-direction: row;
  }
  .about-btn {
    --aug-br: 70px;
    --aug-tr: 0px;
    transform: translateX(30px);
  }
  .about-btn > span {
    transform: translateX(-15px);
  }
  .projects-btn {
    --aug-bl: 0px;
    --aug-tl: 70px;
    transform: translateX(-30px);
  }
  .projects-btn > span {
    transform: translateX(15px);
  }
}
@media (min-width: 768px) {
  .content-box {
    position: absolute;
    /* top: 50%; */
    left: 0%;
    transform: translate(25%, -50%);
    padding: 2rem;
  }
  #hexagon-1 {
    left: -15rem;
  }
}
@media (min-width: 1600px) {
  .content-box {
    transform: translate(15vw, -50%);
  }
}
</style>