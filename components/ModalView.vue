<template>
  <transition name="modalanimation" :duration="300">
    <div class="modal-container" v-if="mainStore.showModal" @click.self="mainStore.closeModal">
      <div class="modal-content-box">
        <img :src="getPic" alt="">
      </div>
      <div class="modal-close" @click="mainStore.closeModal">
        +
      </div>
    </div>
  </transition>
</template>

<script>
import { useMainStore } from "@/stores/mainStore.js";

export default {
  setup() {
    const mainStore = useMainStore();
    return { mainStore };
  },
  computed: {
    getPic() {
      return "/images/" + this.mainStore.modalContent.image;
    },
  },
  mounted() {
    document.addEventListener("keydown", this.mainStore.closeModalOnEscape);
  },
  unmounted() {
    document.removeEventListener("keydown", this.mainStore.closeModalOnEscape);
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  font-size: 0.75rem;
}
/* .main-console {
  width: 95%;
  height: 95%;
  transition: all 0.3s linear;
  transition-delay: 0.3s;
} */
.modal-content-box {
  width: 80%;
  height: 80%;
  overflow-x: auto;
  /* display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem; */
}
/* .project-title {
  grid-row: 1/2;
  grid-column: 1/11;
}
.project-image {
  grid-row: 2/7;
  grid-column: 1/13;
  height: 100%;
  width: 100%;
  max-width: fit-content;
  overflow-y: hidden;
  overflow-x: auto;
  justify-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.project-image > :only-child {
  height: 100%;
}
.project-description {
  grid-row: 7/10;
  grid-column: 1/13;
  overflow-y: auto;
}
.project-size {
  grid-row: 10/11;
  grid-column: 1/5;
}
.project-created {
  grid-row: 10/11;
  grid-column: 5/9;
}
.project-modified {
  grid-row: 10/11;
  grid-column: 9/13;
}
.project-language {
  grid-row: 11/12;
  grid-column: 1/5;
}
.project-link {
  width: 200px;
  height: 50px;
  padding: 0 0.5rem;
  grid-row: 12/13;
  grid-column: 1/13;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  text-align: center;
  --aug-inlay-opacity: 0.9;
  --aug-inlay-bg: black;
  --aug-inlay-all: 0px;
}
.project-link:hover {
  cursor: pointer;
} */
.modal-close {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 2vh;
  right: 4vh;
  border: 2px solid white;
  border-radius: 50%;
  font-size: 4rem;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(45deg);
  cursor: pointer;
  /* font-family: monospace; */
}
.modal-close:hover {
  cursor: pointer;
}
.modal-close > p {
  transform: rotateZ(45deg);
}
.modalanimation-enter-active,
.modalanimation-leave-active {
  transition: all 0.3s linear;
}
.modalanimation-enter-from,
.modalanimation-leave-to {
  opacity: 0;
}
@media (min-width: 600px) {
  .modal-container {
    font-size: 1rem;
  }
  /* .main-console {
    width: 80%;
    height: 80%;
  }
  .project-image {
    grid-row: 2/10;
    grid-column: 1/11;
  }
  .project-description {
    grid-row: 10/13;
    grid-column: 1/11;
  }
  .project-size {
    grid-row: 2/4;
    grid-column: 11/13;
  }
  .project-created {
    grid-row: 4/6;
    grid-column: 11/13;
  }
  .project-modified {
    grid-row: 6/8;
    grid-column: 11/13;
  }
  .project-language {
    grid-row: 8/10;
    grid-column: 11/13;
  }
  .project-link {
    width: 100%;
    height: fit-content;
    padding: 1rem;
    grid-row: 10/13;
    grid-column: 11/13;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    --aug-inlay-opacity: 0.9;
    --aug-inlay-bg: black;
    --aug-inlay-all: 0px;
  } */
}
</style>