<template>
  <div class="maim-container">
    <HeroSection />
    <StorySection />
    <ProjectsSection />
    <ContactElement />
    <FooterElement />
    <ModalView />
  </div>
</template>

<script>
import gsap from "gsap";
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  
}
</script>

<style>
@import "/node_modules/augmented-ui/augmented-ui.min.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Times New Roman', Times, serif;
}
:root {
  --mainYellow: yellow;
}
body {
  color: white;
  overflow-x: hidden;
}

/* general styles */

.section-unit {
  width: 100vw;
  height: 100vh;
  background-color: black;
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
    border-radius: 5px;
    transition: 0.25s ease-out;
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
</style>