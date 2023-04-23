<template>
  <div class="story-section" id="story">
    <div class="text-box slide-in-from-right" id="text-1">
      <h2>SHARE YOUR THOUGHTS-</h2>
      <br />
      <textarea
        name=""
        id=""
        cols="35"
        rows="12"
        placeholder="One of the most prized capabilities, evolutionary assets, and primal urges of humanity/humankind is the possibility to express the most urgent needs, the deepest desires, the most complex ideas, and the innermost fears. The Internet is the culmination of this desire to communicate with the rest of us, speak, and be heard.
      
If you had the chance to say something here, what should it be?"
      ></textarea>
    </div>
    <div class="text-box slide-in-from-left" id="text-2">
      <h2>-WITH STYLE AND GRACE-</h2>
      <br />
      <div>
        <div
          class="harmony"
          ref="harmony"
          @mouseenter="addDiffFont"
          @mouseleave="removeDiffFont"
        >
          <p id="harmony-1" ref="harmony1">Harmony.</p>
          <p id="harmony-2" ref="harmony2">Harmony.</p>
        </div>
        <div
          id="hierarchy"
          @mouseenter="hierarchyHover = true"
          @mouseleave="unsetHierarchy('.hierarchy-letter')"
        >
          <transition-group
            v-if="hierarchyHover"
            tag="p"
            ref="hierarchy"
            appear
            @afterEnter="setHierarchy"
          >
            <span
              v-for="(letter, index) in hierarchy"
              :key="index"
              :data-top="letter.top"
              :data-left="letter.left"
              class="hierarchy-letter"
              ref="hierarchyletter"
              >{{ letter.letter }}</span
            >
          </transition-group>
          <p v-else>Hierarchy.</p>
        </div>
        <div
          class="shapes-forms"
          @mouseenter="addShapeAndForm"
          @mouseleave="removeShapeAndForm"
        >
          <div class="shapes-forms-text">
            <p>Forms and shapes.</p>
          </div>
          <div class="shapes-forms-boxes">
            <div class="shape-box"></div>
            <div class="form-box"></div>
          </div>
        </div>
        <p
          class="size-matters"
          @mouseenter="addSize"
          @mouseleave="removeSize"
          ref="sizeMatters"
        >
          Sometimes size does matter.
        </p>
        <transition-group
          tag="p"
          id="hopping-box"
          @mouseenter="hoppingAnimation"
        >
          <span v-for="(letter, index) in animate" :key="index" class="hopping-letter">{{
            letter
          }}</span></transition-group
        >
        <p class="color-matters">and don't forget the colours.</p>
        <br />
        <p>Speak before even saying anything.</p>
      </div>
      <!-- Style.  (this.$refs.hierarchyletter)  -->
      <!-- A harmonius unity of forms and shapes, all in a single hierarchy for a purpose: to catch attention. It's like the seasoning on a fine meal, too much can be just as bad, as too little. -->
      <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum
        doloremque facilis nesciunt accusantium nostrum inventore atque sint,
        error dolor, quisquam maiores sapiente! Deserunt, facere! -->
    </div>
    <!-- @drag="dragElem" -->
    <div
      class="text-box slide-in-from-right"
      id="text-3"
      :style="{ right: posRight + '%', top: posTop + '%' }"
      ref="draggableBox"
      @dragstart="getDragStart"
      @dragend="setNewDragPos"
      draggable="true"
    >
      <h2 @click="toggleFuncPara">-AND MAKE IT WORK IN YOUR FAVOUR.</h2>
      <br />
      <div class="func-para-container">
        <transition name="closeup">
          <p v-show="funcParaVisible" id="func-para">
            <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          similique optio itaque laudantium perspiciatis provident ipsam saepe
          nemo atque tempore, commodi mollitia explicabo, rem est debitis. -->
            Maybe you want to drag and drop elemnets? Or make a paragraph appear-dissapear when you click on the
            title?
            Static websites are boring. Interactive websites are fun. And really useful websites work for you.
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      hierarchy: [
        { letter: "H", top: "0", left: "50" },
        { letter: "i", top: "1", left: "40" },
        { letter: "e", top: "1", left: "60" },
        { letter: "r", top: "2", left: "30" },
        { letter: "a", top: "2", left: "50" },
        { letter: "r", top: "2", left: "70" },
        { letter: "c", top: "3", left: "20" },
        { letter: "h", top: "3", left: "40" },
        { letter: "y", top: "3", left: "60" },
        { letter: ".", top: "3", left: "80" },
      ],
      animate: [
        "A",
        "n",
        "i",
        "m",
        "a",
        "t",
        "e",
        ",",
        "",
        "b",
        "e",
        "c",
        "a",
        "u",
        "s",
        "e",
        "",
        "y",
        "o",
        "u",
        "",
        "c",
        "a",
        "n",
        ",",
      ],
      hierarchyHover: false,
      dragStartPos: { x: 0, y: 0 },
      dragEndPos: { x: 0, y: 0 },
      posRight: -100,
      posTop: 70,
      funcParaVisible: true,
    };
  },
  methods: {
    addDiffFont() {
      // this.$refs.harmony1.classList.remove('invisible')
      // this.$refs.harmony2.classList.add('invisible')
      this.$refs.harmony1.style.opacity = 0;
      this.$refs.harmony2.style.opacity = 1;
    },
    removeDiffFont() {
      this.$refs.harmony1.style.opacity = 1;
      this.$refs.harmony2.style.opacity = 0;
    },
    setHierarchy(el, done) {
      gsap.timeline().to("#hierarchy", {
        duration: 0.5,
        height: "4rem",
      });
      gsap.timeline().to(el, {
        position: "absolute",
        duration: 0.5,
        onComplete: done,
        top: el.dataset.top + "rem",
        left: el.dataset.left / 2 + "%",
        delay: el.dataset.top * 0.2,
        // stagger: 0.25,
        // onComplete: done
      });
    },
    async unsetHierarchy(el, done) {
      await gsap.timeline().to(el, {
        position: "initial",
        duration: 0.5,
        stagger: 0.2,
      });
      await gsap.timeline().to("#hierarchy", {
        duration: 0.5,
        height: "1rem",
        onComplete: done,
      });
      document.querySelector("#hierarchy").style.height = "initial";
      this.hierarchyHover = false;
    },
    addShapeAndForm() {
      gsap.to(".shapes-forms-text", {
        rotateX: "90deg",
        height: "0",
      });
      gsap.to(".shapes-forms-boxes", {
        rotateX: "0deg",
        height: "1.2rem",
      });
    },
    removeShapeAndForm() {
      gsap.to(".shapes-forms-text", {
        rotateX: "0deg",
        height: "1.2rem",
      });
      gsap.to(".shapes-forms-boxes", {
        rotateX: "-90deg",
        height: "0",
      });
    },
    addSize() {
      this.$refs.sizeMatters.classList.add("size-matters-big");
    },
    removeSize() {
      this.$refs.sizeMatters.classList.remove("size-matters-big");
    },
    hoppingAnimation() {
      // await gsap.timeline().to('#hopping-box', {
      //   height: "2rem",
      //   // duration: 0.5,
      //   // display: "flex",
      //   // alignItems: "center"
      // })
      // gsap.timeline().to('.hopping-letter', {
      //   // "margin-bottom": "-0.5rem",
      //   // opacity: 0,
      //   // alignSelf: "flex-start",
      //   // transform: "translateY(25%)",
      //   // duration: 0.5,
      //   stagger: 0.2
      // })
      gsap.timeline().to('.hopping-letter', {
        // "margin-top": "1rem",
        opacity: 0.5,
        // alignSelf: "flex-end",
        // transform: "translateY(-50%)",
        // duration: 0.5,
        stagger: 0.2,
        // delay: 0.5
      })
      gsap.timeline().to('.hopping-letter', {
        // "margin-bottom": "-0.5rem",
        opacity: 1,
        // alignSelf: "center",
        // transform: "translateY(25%)",
        // duration: 0.5,
        stagger: 0.2,
        delay: 1
      })
      // await gsap.timeline().to('#hopping-box', {
      //   height: "1rem",
      //   // display: "initial"
      // })
    },
    getDragStart(e) {
      this.dragStartPos.x = e.clientX;
      this.dragStartPos.y = e.clientY;
    },
    setNewDragPos(e) {
      this.dragEndPos.x = e.clientX;
      this.dragEndPos.y = e.clientY;
      let differenceX =
        (this.dragStartPos.x / window.innerWidth) * 100 -
        (this.dragEndPos.x / window.innerWidth) * 100;
      let differenceY =
        (this.dragStartPos.y / window.innerHeight) * 100 -
        (this.dragEndPos.y / window.innerHeight) * 100;
      // let newPosX = this.dragStartPos.x - e.clientX/window.innerWidth * 100
      // let newPosY = this.dragStartPos.y - e.clientY
      // console.log(differenceX)
      this.posRight = this.posRight + differenceX;
      this.posTop = this.posTop - differenceY;
      // console.log(this.$refs.draggableBox.style.left)
      // let oldPos = this.$refs.draggableBox.style.right
      // this.$refs.draggableBox.style.right = ""
      // this.$refs.draggableBox.style.right = oldPos + differenceX + "%"
    },
    toggleFuncPara() {
      this.funcParaVisible = !this.funcParaVisible;
    },
    test() {
      console.log("poop");
    },
  },
  async mounted() {
    gsap.to("#text-1", {
      scrollTrigger: {
        trigger: "#text-1",
        start: "top 80%",
      },
      right: "5%",
      duration: 3,
    });
    gsap.to("#text-2", {
      scrollTrigger: {
        trigger: "#text-2",
        start: "top 80%",
      },
      left: "5%",
      duration: 3,
    });
    await gsap.to("#text-3", {
      scrollTrigger: {
        trigger: "#text-3",
        start: "top 80%",
      },
      right: "5%",
      duration: 3,
    });
    this.posRight = 5;
  },
};
</script>

<style scoped>
.func-para-container {
  position: relative;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
}
.closeup-enter-from,
.closeup-leave-to {
  /* top: -100px; */
  opacity: 0.5;
  transform: translateY(-100%);
}
.closeup-enter-to,
.closeup-leave-from {
  opacity: 1;
  /* top: 0; */
  transform: translateY(0%);
}
.closeup-enter-active,
.closeup-leave-active {
  transition: all 1s ease-in-out;
  /* position: absolute; */
}
.story-section {
  width: 100vw;
  height: 125vh;
  background-color: black;
  position: relative;
  overflow: hidden;
}
.text-box {
  font-size: 1rem;
  position: absolute;
  width: 300px;
}
#text-1 {
  top: 10%;
  right: -100%;
}
#text-2 {
  top: 40%;
  left: -100%;
}
#text-2:hover,
#text-3:hover {
  cursor: pointer;
}
textarea {
  font-family: "Roboto";
  font-size: 1rem;
  color: white;
  background-color: transparent;
  border: hidden;
  resize: none;
}
textarea::placeholder {
  color: white;
}
/* textarea::-webkit-resizer {
  display: none;
} */
/* individuals */
.harmony {
  /* transition: all 2s linear; */
  position: relative;
  width: fit-content;
  height: fit-content;
}
#harmony-1 {
  transition: all 2s ease-in;
  opacity: 1;
}
#harmony-2 {
  transition: all 2s ease-in;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  font-family: "Tangerine";
  font-size: 1.7rem;
  font-weight: 700;
}
/*.newfont {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif !important;
  font-size: 8rem; 
}*/

/* #hierarchy, */
.size-matters,
.color-matters,
.shapes-forms {
  transition: all 2s ease;
}
.size-matters-big {
  font-size: 1.4rem;
}
.hopping-letter {
  display: inline-block;
  min-width: 0.3rem;
}
.color-matters:hover {
  color: yellow;
}
/* .invisible {
    transition: all 2s ease;

  opacity: 0;
  z-index: -1;
} */
#hierarchy {
  position: relative;
}
.shapes-forms-text {
  transform-origin: bottom;
}
.shapes-forms-boxes {
  width: 100px;
  height: 0px;
  background-color: yellow;
  transform: rotateX(-90deg);
  transform-origin: top;
}
/*.shapes-forms > *:hover {
  transform: rotateX(90deg);
}
.hierarchy-active {
  position: relative;
  height: 4rem;
  transition: top 2s ease 0s;
}
.hierarchy-active > * {
  position: absolute;
}
.hierarchy-active span:nth-child(1) {
  top: 0;
  left: 0;
  transform: translateX(5rem);
}
.hierarchy-active span:nth-child(2) {
  top: 25%;
  left: 4.5rem;
}
.hierarchy-active span:nth-child(3) {
  top: 25%;
  left: 5.5rem;
}
.hierarchy-active span:nth-child(4) {
  top: 50%;
  left: 4rem;
}
.hierarchy-active span:nth-child(5) {
  top: 50%;
  left: 5rem;
}
.hierarchy-active span:nth-child(6) {
  top: 50%;
  left: 6rem;
}
.hierarchy-active span:nth-child(7) {
  top: 75%;
  left: 3.5rem;
}
.hierarchy-active span:nth-child(8) {
  top: 75%;
  left: 4.5rem;
}
.hierarchy-active span:nth-child(9) {
  top: 75%;
  left: 5.5rem;
}
.hierarchy-active span:nth-child(10) {
  top: 75%;
  left: 6.5rem;
}*/
@media (min-width: 1000px) {
  .story-section {
    height: 100vh;
  }
}
</style>