<template>
  <div class="outer-container">
    <div class="inner-container">
      <LogoElement />
      <VerticalMenu />
    </div>
  </div>
</template>

<script>
import LogoElement from './LogoElement.vue'
import VerticalMenu from './VerticalMenu.vue'
export default {};
</script>

<style scoped>
.outer-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 84px;
    padding: 16px 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 991;
    /* From https://css.glass */
/* From https://css.glass */
background: rgba(255, 255, 59, 0.12);
/* border-radius: 16px; */
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.6px);
-webkit-backdrop-filter: blur(6.6px);
}
.inner-container {
    max-width: 1800px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>