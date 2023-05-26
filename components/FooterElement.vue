<template>
  <div class="footer-container-outer">
    <div class="footer-container-inner">
      <div class="link-bar">
        <!-- <a href="facebook.com">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
      </a> -->
        <a
          href="https://www.linkedin.com/in/%C3%A1rp%C3%A1d-ozsv%C3%A1r-774482251/"
          target="_blank"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </a>
        <!-- <font-awesome-icon icon="fa-brands fa-google-plus-g" /> -->
        <a href="https://github.com/arpado" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <!-- <font-awesome-icon :icon="['fa', 'facebook-f']" class="icon alt"/> -->
        <!-- <font-awesome-icon :icon="['fab', 'github']" class="icon alt"/> -->
        <!-- <a href=""><img class="icon" src="/assets/font-awesome/github.svg" alt=""></a> -->
      </div>
      <div class="copyright">
        <span>Made by Arpad O.</span>
        <br />
        <span>Copyright, 2022.</span>
      </div>
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
export default {};
</script>

<style>
.footer-container-outer {
  width: 100%;
  background-color: black;
  padding: 16px 5%;
}
.footer-container-inner {
  width: 100%;
  max-width: 1800px;
  /* height: 10vh; */
  /* padding: 1rem; */
  margin: 0 auto;
  /* border: 1px solid white; */
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