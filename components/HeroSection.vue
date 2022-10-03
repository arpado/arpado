<template>
  <div class="hero-section flex-c-c" id="hero">
    <div class="content-box">
      <div class="text-box flex-c-c animate-in" id="title-box-1">
        <p>Content.</p>
      </div>
      <div class="text-box flex-c-c animate-in" id="title-box-2">
        <p>Style.</p>
      </div>
      <div class="text-box flex-c-c animate-in" id="title-box-3">
        <p>Functionality.</p>
      </div>
      <a href="#email-form">
        <div class="cta-btn flex-c-c yellow-btn animate-in">
          <p>Get Your Webpage!</p>
        </div>
      </a>
    </div>
    <div data-augmented-ui="all-hex-alt border" id="hexagon-1"></div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    gsap.to(".animate-in", {
      opacity: 1,
      duration: 2,
      stagger: 1,
    });
  },
};
</script>

<style scoped>
.hero-section {
  width: 100vw;
  height: 100vh;
  /* background-color: black; */
  position: relative;
  overflow: hidden;
}
.content-box {
  width: 500px;
  height: 500px;
  /* border: 1px solid white; */
  /* position: absolute;
  top: 25%;
  right: 10%; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  -webkit-text-stroke: 0.3px black;
}
.text-box,
.cta-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-box {
  font-size: 3rem;
  /* line-height: 0; */
}
.cta-btn {
  margin-top: 100px;
  height: 100px;
  width: 200px;
  font-size: 2rem;
  box-shadow: 0 0 10px 0px black;
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
  .content-box {
    position: absolute;
    top: 25%;
    right: 10%;
  }
  #hexagon-1 {
    left: -15rem;
  }
}
</style>