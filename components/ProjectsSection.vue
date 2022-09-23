<template>
  <div class="projects-section">
    <h2>Some of my projects so far:</h2>
    <hr />
    <div class="projects-container">
      <ProjectElement
        v-for="(page, index) in pages"
        :key="index"
        :page="page"
      />
    </div>
  </div>
</template>

<script>
// section-unit flex-c-c
import pages from "@/content/webpages.json";
export default {
  data() {
    return {
      pages,
    };
  },
};
</script>

<style scoped>
.projects-section {
  width: 100vw;
  min-height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  /* background-color: black; */
}
hr {
  width: 25%;
}
</style>