<template>
  <div class="contact-section">
    <div data-augmented-ui="all-hex-alt border" id="hexagon-2"></div>
    <form
      class="email-form"
      action="https://formsubmit.co/2504b17c1cdcf59e3fd818d8e727da33"
      method="POST"
      name="”EmailForm”"
    >
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
  height: 100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.email-form {
  height: fit-content;
  min-height: 80vh;
  min-width: 300px;
  width: 50vw;
  max-width: 500px;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
input,
textarea {
  width: 250px;
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
#hexagon-2 {
  position: absolute;
  bottom: 15vh;
  right: -15rem;
  --aug-all-width: 80vh;
  --aug-inlay-bg: black;
  --aug-border-bg: yellow;
  --aug-border-all: 60px;
}
</style>