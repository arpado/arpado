<template>
  <div>
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
        placeholder="...by which I may refer you."
        v-model="name"
      />

      <label for="form_email">Your Email Address:</label>
      <input
        class="message-input"
        type="email"
        name="form_email"
        id="form_email"
        placeholder="...where I may send my reply to."
        v-model="email"
      />

      <label for="form_subject">Subject:</label>
      <input
        class="message-input"
        type="text"
        name="form_subject"
        id="form_subject"
        placeholder="...of the email you wish to send."
        v-model="subject"
      />

      <label for="form_message">Message:</label>
      <textarea
        class="message-input"
        name="message"
        id="form_message"
        cols="30"
        rows="10"
        placeholder="...question, opinion ot anything else you wish to share. Thank you for your feedback!"
        v-model="message"
      ></textarea>

      <!-- <input type="submit" value="Send Message"> -->
      <!-- <ButtonElement  text="Send Message" type="submit" /> -->
      <div class="flex justify-center">
      <button
        type="submit"
        class="submit-button button-anim"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both"
      >
        Send Message
      </button>
      </div>
      <!-- @click.prevent="submitForm" -->
      <!-- class="submit-btn yellow-btn" -->
      <!-- @click="submitForm" -->
      <!-- type="submit" -->
    </form>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
h2 {
  /* margin-bottom: 20px; */
}
hr {
  width: 50%;
  margin: 20px auto;
}
form {
  margin: auto;
}
label {
  margin-top: 20px;
}
input,
textarea {
  /* width: 300px; */
  width: 100%;
  margin: 10px 0 30px;
  padding: 0.3rem;
  color: black;
  border-radius: 5px;
}
.submit-button {
  /* height: 100px; */
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  /* max-width: 400px; */
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
</style>