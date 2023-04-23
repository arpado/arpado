<template>
  <div class="hero-section h-screen w-screen relative" id="hero">
    <!-- <div class="content-box" data-augmented-ui="tl-round br-round border both">
      <h1 class="text-4xl">
        Transforming ideas<br />into<br />digital experiences.
      </h1>
      <p>
        Hi there!<br />I'm a passionate beginner web developer eager to bring your
        ideas to life. I specialize in creating responsive, user-friendly
        websites that are both visually appealing and functional. Whether you're
        looking to establish your online presence, improve your website's
        performance, or bring a new project to life, I'm committed to working
        closely with you to understand your unique needs and deliver a product
        that exceeds your expectations.<br />Let's build something great together!
      </p>
      <div
        class="cta-btn text-3xl p-4"
        data-augmented-ui="tl-round br-round border both"
      >
        Learn More
      </div>
    </div> -->
    <PlanetSection />
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
  overflow: hidden;
}
.content-box {
  width: 500px;
  height: 500px;
  max-width: 80vw;
  /* max-height: fit-content; */
  /* border: 1px solid white; */
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(25%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  -webkit-text-stroke: 0.3px black;
  z-index: 9;
  padding: 2rem;
  /* --aug-border-bottom: 20px;
  --aug-br-inset1: 200px;
  --aug-br-inset2: 10px;
  --aug-br: 20px;
  --aug-inlay-all: 10px; */
}
.text-box,
.cta-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 2rem 0.5rem; */
}
.text-box {
  font-size: 3rem;
  /* line-height: 0; */
}
.cta-btn {
  /* margin-top: 100px; */
  height: 100px;
  width: 200px;
  font-size: 2rem;
  box-shadow: 0 0 10px 0px black;
  text-decoration-style: none;
  /* color: black;
    background-color: yellow;
    border-radius: 5px; */
}
/* .cta-btn:hover {
    cursor: pointer;
    box-shadow: 0 0 20px 2px yellow;
}
.cta-btn > p {
  text-align: center;
} */
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
@media (min-width: 600px) {
  /* .content-box {
    position: absolute;
    top: 25%;
    right: 10%;
  } */
  #hexagon-1 {
    left: -15rem;
  }
}
</style>