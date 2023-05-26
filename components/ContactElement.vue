<template>
  <div class="wrapper">
    <div class="contact-section">
      <!-- <div class="hexagon-container">
      <div data-augmented-ui="all-hex-alt border" id="hexagon-2"></div>
    </div> -->
      <div
        class="about fade-in"
        id="about"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
      >
        <h2>About me</h2>
        <hr />
        <p>
          I am one of the many self-taught programmers who seized the
          opportunity to delve into coding and web development during the Great
          Pandemics.
        </p>
        <p>
          My proficiency lies within the Vue ecosystem, encompassing Vue3,
          Nuxt3, Pinia, and Router. However, since web development heavily
          relies on the foundation of HTML, CSS, and JavaScript, I have acquired
          a profound understanding of these technologies as well. In addition, I
          have a working knowledge of MySQL, Git, npm, bash scripting,
          algorithms, and data structures.
        </p>
        <p>
          I offer a wide range of services, including the creation of one-page
          websites and small web applications. I excel in crafting fully
          responsive designs and optimizing websites for high search engine
          rankings with effective SEO techniques. If you're satisfied with the
          final product, I can even handle website hosting and maintenance for
          you.
        </p>
        <hr />
        <p>
          You can find my resume
          <a href="/pdf/arpad-ozsvar-cv.pdf" target="_blank">here</a>.
        </p>
      </div>

      <div
        class="email-form fade-in"
        id="email-form"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
      >
        <h2>Contacts</h2>
        <hr />
        <form @submit.prevent="submitForm">
          <!-- action="2504b17c1cdcf59e3fd818d8e727da33"
        method="POST"
        name="EmailForm" -->
          <label for="form_name">Your Name:</label>
          <input
            class="message-input"
            type="text"
            name="form_name"
            id="form_name"
            placeholder="Hi, I'm Arpad, what is your name?"
            v-model="name"
          />

          <label for="form_email">Your Email Address:</label>
          <input
            class="message-input"
            type="email"
            name="form_email"
            id="form_email"
            placeholder="So that I may reply..."
            v-model="email"
          />

          <label for="form_subject">Email Subject:</label>
          <input
            class="message-input"
            type="text"
            name="form_subject"
            id="form_subject"
            v-model="subject"
          />

          <label for="form_message">Message Body:</label>
          <textarea
            class="message-input"
            name="message"
            id="form_message"
            cols="30"
            rows="10"
            v-model="message"
          ></textarea>

          <!-- <input type="submit" value="Send Message"> -->
          <!-- <ButtonElement  text="Send Message" type="submit" /> -->
          <button
            type="submit"
            class="submit-button"
            data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
          >
            Send Message
          </button>
          <!-- @click.prevent="submitForm" -->
          <!-- class="submit-btn yellow-btn" -->
          <!-- @click="submitForm" -->
          <!-- type="submit" -->
        </form>
      </div>

      <div
        class="faq fade-in"
        id="faq"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
      >
        <h2>About me</h2>
        <hr />
        <h3>Who am I?</h3>
        <p>
          I am on of the many self-thought programmers, who took the chance to
          learn the ropes of coding during the Great Pandemics.
        </p>
        <hr />
        <h3>What do I do?</h3>
        <p>
          I'm proficient with the Vue ecosystem (Vue3, Nuxt3, Pinia and Router),
          but as web development relies heavily on plain old JavaScript, I have
          aquired a deep understanding of HTML-CSS-JavaScript too, plus a little
          bit of MySQL and I'm also familiar with Git, npm, bash, algorithms,
          data structures.
        </p>
        <hr />
        <h4>How may I help you?</h4>
        <p>
          I can deliver anything ranging from one page websites to small web
          applications, and make your site fully responsive and indexed high on
          the list of search engines with SEO. When you are satisfied I can even
          host and maintain your website for you.
        </p>
        <hr />
        <p>
          You can find my resume
          <a href="/pdf/arpad-ozsvar-cv.pdf" target="_blank">here</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const loading = useNuxtApp().$toast.loading("Please wait...");
      const response = await fetch(
        "https://formsubmit.co/ajax/2504b17c1cdcf59e3fd818d8e727da33",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            subject: this.subject,
            email: this.email,
            message: this.message,
            // _replyto: this.email,
            // _cc: '',
            // _bcc: '',
            // _template: 'table',
          }),
        }
      );

      if (response.ok) {
        useNuxtApp().$toast.remove(loading);
        useNuxtApp().$toast.success("Email sent!", {
          delay: 400,
        });
        this.name = this.subject = this.email = this.message = "";
      } else {
        useNuxtApp().$toast.remove(loading);
        useNuxtApp().$toast.error("Failed to send email.");
      }
    },
  },
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
  background-image: url("images/black-sand-bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-section {
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
  display: grid;
  grid-template-areas:
    "about"
    "faq"
    "form";
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
  max-width: 400px;
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
  grid-area: form;
}
.about {
  grid-area: about;
}
.faq {
  grid-area: faq;
}
.email-form > h2,
.about > h2,
.faq > h2 {
  margin-bottom: 20px;
}
form {
  margin: auto;
}
label {
  margin-top: 10px;
}
input,
textarea {
  /* width: 300px; */
  width: 100%;
  margin: 10px 0 15px;
  padding: 0.3rem;
  color: black;
  border-radius: 5px;
}
.submit-button {
  /* height: 100px; */
  min-width: 200px;
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 20px auto;
  font-size: 1.3rem;
  box-shadow: 0 0 10px 0px black;
  text-decoration-style: none;
  --aug-inlay-bg: #2a2615;
  color: #a29118;
  text-decoration-style: none;
  cursor: pointer;
  box-shadow: 0 0 10px 0px black;
  font-weight: bold;
  text-shadow: 1px 1px black;
}
/* .submit-btn {
  width: 150px;
  height: 50px;
  background-color: yellow;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
} */
hr {
  width: 50%;
  margin: 10px auto;
}
.hexagon-container {
  width: 400px;
  height: fit-content;
  overflow: hidden;
  display: none;
}
#hexagon-2 {
  /* position: absolute; */
  /* bottom: 15vh;
  right: -15rem; */
  --aug-all-width: 80vh;
  --aug-inlay-bg: black;
  --aug-border-bg: yellow;
  --aug-border-all: 60px;
}
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
  .contact-section {
    /* height: 90vh; */
    /* flex-direction: row-reverse; */
    grid-template-areas:
      "about faq"
      "form form";
  }
  .email-form,
  .about,
  .faq {
    min-width: 300px;
  }
}
@media (min-width: 1366px) {
  .contact-section {
    /* height: 90vh; */
    flex-direction: row-reverse;
    grid-template-areas: "about form faq";
  }
  .email-form,
  .about,
  .faq {
    width: 30vw;
  }
}
</style>