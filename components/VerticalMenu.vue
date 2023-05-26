<template>
  <div class="container menu">
    <transition-group
      @enter="mainStore.enter"
      @afterEnter="mainStore.afterEnter"
      @leave="mainStore.onLeave"
      
    >
      <NavButtonVertical
        v-show="mainStore.menuVisible"
        v-for="(button, index) in mainStore.buttons"
        :key="button.name"
        :button="button"
        :index="index"
        :data-index="index"
        @close-menu="mainStore.toggleMenu"
      />
    </transition-group>
    <!-- <div
    appear
      class="btn-toggle-menu"
      data-augmented-ui="
  tl-clip tr-clip br-clip-x bl-clip-x both"
      @click="toggleMenu"
    >
      <div
        data-augmented-ui="all-triangle-down border"
        :class="{ 'arrow-rotated': arrowRotated }"
      ></div>
      :class="{ 'bars-rotated': barsRotated }"
    </div> -->
     <div
      class="btn-toggle-menu"
      
      @click="mainStore.toggleMenu"
    >
      <div class="hamb-bar" id="hamb-bar-top"></div>
      <div class="hamb-bar" id="hamb-bar-middle"></div>
      <div class="hamb-bar" id="hamb-bar-bottom"></div>
    </div>
  </div>
</template>

<script>
// import gsap from "gsap";
import { useMainStore } from '@/stores/mainStore.js'

export default {
  setup() {
    const mainStore = useMainStore()
    return { mainStore }
  },
  data() {
    return {
      // buttons: [
      //   {
      //     name: "Hero",
      //     href: "#hero",
      //   },

      //   {
      //     name: "Projects",
      //     href: "#projects",
      //   },
      //   {
      //     name: "Message",
      //     href: "#email-form",
      //   },
      //   {
      //     name: "About",
      //     href: "#about",
      //   },
      //   {
      //     name: "FAQ",
      //     href: "#faq",
      //   },
      // ],
      // menuVisible: false,
      // barsRotated: false,
    };
  },
  methods: {
    // toggleMenu() {
    //   this.mainStore.menuVisible = !this.mainStore.menuVisible;
    //   // this.barsRotated = !this.barsRotated;
    //   if (this.mainStore.menuVisible) {
    //     gsap.to('#hamb-bar-top', {
    //       transform: 'translate3D(0px, 16.5px, 0px) rotateZ(45deg)'
    //     })
    //     gsap.to('#hamb-bar-middle', {
    //       transform: 'rotateZ(45deg)'
    //     })
    //     gsap.to('#hamb-bar-bottom', {
    //       transform: 'translate3D(0px, -16.5px, 0px) rotateZ(-45deg)'
    //     })
    //     gsap.to('.hamb-bar', {
    //       backgroundColor: 'var(--mainYellow)'
    //     })
    //   }
    //   else {
    //     gsap.to('#hamb-bar-top', {
    //       transform: 'translate3D(0px, 0px, 0px) rotateZ(0deg)'
    //     })
    //      gsap.to('#hamb-bar-middle', {
    //       transform: 'rotateZ(0deg)'
    //     })
    //      gsap.to('#hamb-bar-bottom', {
    //       transform: 'translate3D(0px, 0px, 0px) rotateZ(0deg)'
    //     })
    //     gsap.to('.hamb-bar', {
    //       backgroundColor: 'white'
    //     })
    //   }
    // },
    // enter(el) {
    //   el.style.transform = `translateY(-${el.dataset.index * 50 + 150}px)`;
    // },
    // afterEnter(el, done) {
    //   gsap.to(el, {
    //     transform: `translateY(${el.dataset.index * 50 + 70}px)`,
    //     delay: el.dataset.index * 0.2,
    //   });
    // },
    // onLeave(el, done) {
    //   gsap.to(el, {
    //     transform: `translateY(-${el.dataset.index * 50 + 150}px)`,
    //     delay: (this.mainStore.buttons.length - el.dataset.index) * 0.2 - 0.2,
    //     onComplete: done,
    //   });
    // },
  },
};
</script>

<style scoped>
.container {
  height: fit-content;
  width: fit-content;
  /* top: 10px;
  right: 20px;*/
  position: relative; 
  z-index: 999;
}
.btn-toggle-menu {
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* position: fixed; */
  color: white;
  /* top: 10px;
  right: 30px; */
  /* --aug-bl-inset2: 30%;
  --aug-br-inset1: 30%; */
}
.btn-toggle-menu:hover {
  cursor: pointer;
}
/* .btn-toggle-menu > * {
  transition: all 1s cubic-bezier(0.54, 0.54, 0.54, 0.54);
} */
.hamb-bar {
  width: 100%;
  height: 5px;
  background-color: white;
  border-radius: 10px;
  transform-origin: center;
  /*transition: all 1s cubic-bezier(0.54, 0.54, 0.54, 0.54); */
}
/* .bars-rotated {
  position: absolute;
  transform: rotateZ(45deg);
} */
</style>