<template>
  <div class="contact-section">
    <form
      class="email-form"
      action="https://formsubmit.co/2504b17c1cdcf59e3fd818d8e727da33"
      method="POST"
      name="”EmailForm”"
    >
      <h2>Contacts</h2>
      <hr />
      <label for="name">
        <p>Name</p>
        <input class="message-input" type="text" name="name" required />
      </label>
      <label for="email">
        <p>Email</p>
        <input class="message-input" type="email" name="email" required />
      </label>
      <label for="subject">
        <p>Subject</p>
        <input class="message-input" type="text" name="_subject" />
      </label>
      <label for="message">
        <p>Message</p>
        <textarea
          class="message-input"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <div type="submit" class="submit-btn yellow-btn" @click="submitForm">
        Send Message
      </div>
    </form>
    <div class="about">
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
        bit of MySQL and I'm also familiar with Git, npm, bash, algorithms, data
        structures.
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
        <a href="/pdf/arpad-ozsvar-cv.pdf" target="_blank">HERE</a>.
      </p>
    </div>
    <div class="hexagon-container">
      <div data-augmented-ui="all-hex-alt border" id="hexagon-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async submitForm() {
      try {
        await document.forms[0].submit();
        this.mainStore.openMessageModal("Your message has been sent!");
        document.querySelectorAll(".message-input").value = "";
      } catch (error) {
        this.mainStore.openMessageModal(`Something went wrong Dave: ${error}`);
      }
    },
  },
};
</script>

<style scoped>
.contact-section {
  width: 100vw;
  height: fit-content;
  background-color: black;
  /* position: relative; */
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  /* position: relative; */
}
.email-form,
.about {
  height: fit-content;
  min-height: 80vh;
  min-width: 300px;
  width: 50vw;
  max-width: 400px;
  /* margin-left: 10vw; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
input,
textarea {
  width: 300px;
  margin-top: 10px;
}
.submit-btn {
  width: 150px;
  height: 50px;
  background-color: yellow;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
hr {
  width: 50%;
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
  .contact-section {
  height: 90vh;
  flex-direction: row;
  }
}
@media (min-width: 750px) {
  .hexagon-container {
    display: unset;
  }
}
@media (min-width: 850px) {
 .email-form,
.about {
  min-width: 300px;
  }
}
</style>