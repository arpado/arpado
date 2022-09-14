<template>
  <div class="footer-container">
      <div class="link-bar">
        <!-- <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        <font-awesome-icon icon="fa-brands fa-google-plus-g" />
        <font-awesome-icon icon="fa-brands fa-github" /> -->
        <!-- <font-awesome-icon :icon="['fa', 'facebook-f']" class="icon alt"/> -->
        <!-- <font-awesome-icon :icon="['fab', 'github']" class="icon alt"/> -->
        <!-- <a href=""><img class="icon" src="/assets/font-awesome/github.svg" alt=""></a> -->

      </div>
      <div class="copyright">
          <p>Made by Arpad O.</p>
          <p>Copyright, 2022.</p>
      </div>
  </div>
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF, faLinkedinIn, faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
// library.add(faFacebookF)
// library.add(faLinkedinIn)
// library.add(faGithub)
// library.add(faGooglePlusG)
export default {

}
</script>

<style>
.footer-container {
    width: 100%;
    height: 10vh;
    padding: 1rem;
    background-color: black;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.link-bar {
    color: white;
    font-size: 2rem;
}
.link-bar > * {
    margin-right: 1rem;
}
</style>