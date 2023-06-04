<template>
  <div class="wrapper">
    <div class="section-container">
      <AboutElement
        class="about fade-in"
        id="about"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
      />
        
      <QuestionsElement
        class="faq fade-in"
        id="faq"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
      />

      <ContactElement
        class="email-form fade-in"
        id="email-form"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
      />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to(".fade-in", {
      scrollTrigger: {
        trigger: ".fade-in",
        start: "top 75%",
        // markers: true,
      },
      opacity: 1,
      duration: 1,
      stagger: 0.5,
    });
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  min-height: 90vh;
  background-color: black;
  background-image: url("/src/images/black-sand-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-container {
  width: 100%;
  max-width: 1600px;
  height: fit-content;
  min-height: 100%;
  /* margin: 0 auto; */
  /* position: relative; */
  /* overflow: hidden; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center; */
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-areas:
    "about"
    "faq"
    "form"; */
  gap: 1rem;
  padding: 3rem 1rem;
  /* position: relative; */
}
.email-form,
.about,
.faq {
  height: fit-content;
  min-height: 100%;
  /* min-width: 300px; */
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  /* margin-left: 10vw; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: 0;
  --aug-inlay-bg: radial-gradient(
    ellipse 75% 50% at top,
    rgba(90, 50, 0, 1) 0%,
    rgba(18, 17, 14, 1) 50%,
    rgba(18, 17, 14, 1) 100%
  );
  padding: 2rem;
  scroll-margin-top: 84px;
}
.email-form {
  max-width: 600px;
}
/* .email-form {
  grid-area: form;
}
.about {
  grid-area: about;
}
.faq {
  grid-area: faq;
} */

@media (min-width: 650px) {
  /* .email-form {
    margin-left: 4%;
  }
  .about {
    margin-right: 4%;
  } */
}
@media (min-width: 768px) {
  /* .hexagon-container {
    display: unset;
  } */
  .section-container {
    /* height: 90vh; */
    /* flex-direction: row-reverse; */
    /* grid-template-areas:
      "about faq"
      "form form"; */
  }
  .email-form,
  .about,
  .faq {
    /* min-width: 300px; */
    /* width: 80vw; */
  }
}
@media (min-width: 1366px) {
  .section-container {
    /* height: 90vh; */
    /* flex-direction: row-reverse;
    grid-template-areas: "about form faq"; */
  }
  .email-form,
  .about,
  .faq {
    /* max-width: 1300px; */
  }
}
</style>