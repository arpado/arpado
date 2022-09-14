<template>
  <div class="projects-container ">
      <ProjectElement v-for="(page, index) in pages" :key="index" :page="page"/>
  </div>
</template>

<script>
// section-unit flex-c-c
import pages from '@/content/webpages.json'
export default {
    data () {
        return {
            pages
        }
    },
}
</script>

<style scoped>
.projects-container {
    width: 100vw;
    min-height: 100vh;
    padding-left: 1rem;
    padding-right: 1rem;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 2rem;
    background-color: black;
}
</style>