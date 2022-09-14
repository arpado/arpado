<template>
  <div class="hero-section">
    <div data-augmented-ui="all-hex-alt border" id="hexagon-1"></div>
    <div class="content-box">
      <div class="text-box flex-c-c"><p>CONTENT.</p></div>
      <div class="text-box flex-c-c"><p>STYLE.</p></div>
      <div class="text-box flex-c-c"><p>FUNCTIONALITY.</p></div>
      <div class="cta-btn flex-c-c yellow-btn"><p>Get Your Webpage!</p></div>
    </div>
  </div>
</template>

<script>
// section-unit
export default {};
</script>

<style scoped>
.hero-section {
  width: 100vw;
  height: 100vh; 
  background-color: black;
  position: relative;
  overflow: hidden;
}
.content-box {
  width: 500px;
  height: 500px;
  /* border: 1px solid white; */
  position: absolute;
  top: 25%;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.text-box,
.cta-btn{
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-box {
    font-size: 3rem;
}
.cta-btn {
    margin-top: 100px;
    height: 100px;
    width: 200px;
    font-size: 2rem;
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
#hexagon-1 {
  position: absolute;
  top: 15vh;
  left: -15rem;
  --aug-all-width: 80vh;
  --aug-inlay-bg: black;
  --aug-border-bg: yellow;
  --aug-border-all: 60px;
}
</style>