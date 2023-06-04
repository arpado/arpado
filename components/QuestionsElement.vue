<template>
  <div>
    <h2>FAQ</h2>
    <hr />
    <div
      class="question-elem"
      v-for="(question, index) in questions"
      :key="index"
    >
      <div class="title-container">
        <h3 @click="toggleElem(index)">{{ question.question }}</h3>
        <div
          data-augmented-ui="all-triangle-down border"
          @click="toggleElem(index)"
          :class="[activeElem === index ? 'active-rotation' : '', 'toggle-btn']"
        ></div>
      </div>
      <div
        :class="[activeElem === index ? 'active-grid' : '', 'text-container']"
      >
        <div>
          <p v-for="(para, index) in question.answer" :key="index">
            {{ para }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questions from "@/content/questions.json";

export default {
  data() {
    return {
      activeElem: 0,
      questions,
    };
  },
  methods: {
    toggleElem(index) {
      this.activeElem = this.activeElem === index ? null : index;
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.question-elem {
  width: 100%;
  margin: 10px auto;
  /* transition: all 0.5s ease-in-out; */
}
.title-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--mainYellow);
}
.toggle-btn {
  /* width: 50px;
    height: 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* --aug-border-bg: var(--mainYellow); */
  cursor: pointer;
  transform: rotateZ(0deg);
  transform-origin: 50% 33%;
  transition: transform 0.5s ease-in-out;
  --aug-border-all: 10px;
}
h3 {
  font-size: 1.1rem;
  width: fit-content;
  max-width: calc(100% - 50px);
  cursor: pointer;
}
hr {
  width: 50%;
  margin: 10px auto;
}
.text-container {
  margin: 0 25px;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-in-out;
}
.text-container > div {
  overflow: hidden;
}
.active-rotation {
  transform: rotateZ(180deg);
}
.active-grid {
  grid-template-rows: 1fr;
}
</style>