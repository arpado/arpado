<template>
  <div class="hero-section h-screen w-screen relative" id="hero">
    <div class="content-box" data-augmented-ui="tl-round br-round border both">
      <h1 class="text-2xl sm:text-4xl text-center w-full">
        Transforming ideas<br />into<br />digital experiences.
      </h1>
      <div class="my-2">
        <p>Hi there!</p>
        <p>
          I'm a passionate beginner web developer eager to bring your ideas to
          life. I specialize in creating responsive, user-friendly websites that
          are both visually appealing and functional.
        </p>
        <p>
          Whether you're looking to establish your online presence, improve your
          website's performance, or bring a new project to life, I'm committed
          to working closely with you to understand your unique needs and
          deliver a product that exceeds your expectations.
        </p>
        <p>Let's build something great together!</p>
      </div>
      <ButtonElement text="Learn More" />
    </div>
    <PlanetSection />
    <!-- <ButtonElement class="cta-btn text-3xl p-4 mx-auto my-4" id="projects-btn" text="Projects" /> -->
  </div>
</template>

<script>
import gsap from "gsap";

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