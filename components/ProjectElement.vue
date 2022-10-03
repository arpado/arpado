<template>
  <div
    class="project-card"
    @mouseenter="showDetails"
    @mouseleave="hideDetails"
    @click="toggleDeatils"
  >
    <img :src="getPic" alt="" />
    <div class="info-box" ref="infoBox">
      <div class="text-container">
        <h3>{{ page.name }}</h3>
        <br />
        <p>{{ page.description }}</p>
      </div>

      <div class="btn-container">
        <div class="yellow-btn flex-c-c" @click="mainStore.openModal(page)">
          <p>Open Preview</p>
        </div>
        <div class="yellow-btn flex-c-c" @click="mainStore.openLink(page.link)">
          <p>Visit Page</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 'public/images/' + page.image
import { useMainStore } from "@/stores/mainStore.js";

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  props: ["page"],
  methods: {
    showDetails() {
      this.$refs.infoBox.classList.add("visible");
    },
    hideDetails() {
      this.$refs.infoBox.classList.remove("visible");
    },
    toggleDeatils() {
      if (this.$refs.infoBox.classList.contains("visible")) {
        this.$refs.infoBox.classList.remove("visible");
      } else {
        this.$refs.infoBox.classList.add("visible");
      }
    },
  },
  computed: {
    getPic() {
      return "images/" + this.page.image;
    },
  },
};
</script>

<style scoped>
.project-card {
  width: 30%;
  min-width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s ease-out;
  opacity: 0.5;
}
.visible {
  top: 0%;
  opacity: 1;
}
img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
.text-container {
  width: 100%;
  height: 60%;
  overflow-y: auto;
}
.btn-container {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}
.yellow-btn {
  width: 100px;
  height: 50px;
}
</style>