<template>
  <div class="project-details-container relative">
    <div
      class="project-details absolute flex flex-col justify-between"
      :class="[activeTab === 'details' ? 'selected' : '']"
      :data-augmented-ui="getAugStyle"
    >
      <div
        class="details-btn absolute flex place-content-center"
        @click="setActiveTab('details')"
      >
        <span>Details</span>
      </div>
      <ContentRendererMarkdown
        v-if="details"
        :value="details"
        class="textbox"
      />
      <div class="background-numbers">
        {{ `00${number + startFrom}` }}
      </div>
    </div>

    <div
      class="project-description absolute flex flex-col justify-between"
      :class="[activeTab === 'description' ? 'selected' : '']"
      :data-augmented-ui="getAugStyle"
    >
      <div
        class="description-btn absolute flex place-content-center"
        @click="setActiveTab('description')"
      >
        <span>Description</span>
      </div>
      <ContentRendererMarkdown
        v-if="description"
        :value="description"
        class="textbox"
      />
      <div class="background-numbers">
        {{ `00${number + startFrom}` }}
      </div>
    </div>
    <div class="button-container">
      <a
        :href="page.repo"
        target="_blank"
        class="button button-anim github-btn"
        :data-augmented-ui="getGitButtonStyle"
      >
        <span>GitHub</span>
      </a>
      <a
        :href="page.link"
        target="_blank"
        class="button button-anim website-btn"
        data-augmented-ui="tl-clip tr-clip br-clip both"
      >
        <span>Website</span>
      </a>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from "@vueuse/core";
// import pages from "@/content/webpages.json";

export default {
  data() {
    return {
      activeTab: "description",
      detailsError: null,
      descriptionError: null,
      detailsReady: false,
      descriptionReady: false,
    };
  },
  props: ["page", "pagesArr", "number", "startFrom"],
  methods: {
    setActiveTab(name) {
      this.activeTab = name;
    },
  },
  computed: {
    getAugStyle() {
      if (this.width > 480) {
        return "tl-2-clip-x tr-clip-x br-2-clip-x bl-clip both";
      } else {
        // return "tl-clip-x tr-clip-x br-2-clip-x bl-clip both";
        return "tl-clip tr-clip-y br-2-clip-y bl-clip both";
      }
    },
    getGitButtonStyle() {
      if (this.width > 480) {
        return "tl-clip br-clip both";
      } else {
        // return "tl-clip br-clip bl-clip both"
        return "tl-clip br-clip both";
      }
    },
  },
  async setup(props) {
    console.log(props.pagesArr);
    const { width, height } = useWindowSize();
    const pagesArr = toRef(props, "pagesArr");
    let number = toRef(props, "number");
    let details = toRef(props, "details");
    let description = toRef(props, "description");
    let detailsError = null;
    let descriptionError = null;

    // if (props.page.details) {
    try {
      details = await queryContent(
        props.pagesArr[props.number].details
      ).findOne();
    } catch (error) {
      console.log(error);
      detailsError = error;
    }
    // }
    //  if (props.page.description) {
    try {
      description = await queryContent(
        props.pagesArr[props.number].description
      ).findOne();
    } catch (error) {
      console.log(error);
      descriptionError = error;
    }
    // }

    return {
      width,
      height,
      details,
      description,
    };
  },
  watch: {
    async number(value, oldvalue) {
      this.details = await queryContent(this.pagesArr[value].details).findOne();
      this.description = await queryContent(
        this.pagesArr[value].description
      ).findOne();
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.project-details-container {
  width: 100%;
  min-height: 400px;
}
.project-details,
.project-description {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  /* height: 100%; */
  /* background: rgb(20, 19, 19); */
  /* min-height: 400px; */
  height: 100%;
  padding: 1rem 2.5rem 1rem 1rem;
  /* --aug-inlay-bg: rgb(99,69,1); */
  --aug-border-all: 2px;
  --aug-inlay-bg: var(--panelbgDarkTopLeft);
  --aug-inlay-all: 0;
  --aug-tr1: 1rem;
  --aug-tl1: 1rem;
  /* try */
  --aug-tr-inset2: 0rem;
  --aug-tr1: 2rem;
  --aug-tr1-height: 2rem;
  --aug-br-extend2: 190px;
  --aug-br-inset2: 33px;
  --aug-br: 50px;
  --aug-br1: 2rem;
}
.project-description {
  /* --aug-tr-inset2: 45%;
  --aug-tl-inset1: 0rem; */
  /* --aug-tr-extend1: 8rem;
  --aug-tl-extend2: calc(100% - 20rem); */
  z-index: 3;
  --aug-tr-inset1: 0rem;
  --aug-tr-extend2: 0px;
  --aug-br-extend1: calc(100% - 220px);
}
.project-details {
  /* --aug-tr-inset2: 0rem;
  --aug-tl-inset1: 45%; */
  /* --aug-tr-extend1: 0rem;
  --aug-tl-extend2: calc(100% - 12rem); */
  z-index: 2;
  --aug-tr-inset1: 8rem;
  --aug-tr-extend2: 120px;
  --aug-br-extend1: calc(100% - 320px);
}
.details-btn,
.description-btn {
  height: fit-content;
  width: 1.5rem;
  top: unset;
  right: 0;
  color: var(--mainYellow);
  text-shadow: 1px 1px 1px #12110e;
  /* background-color: #12110E; */
  cursor: pointer;
  writing-mode: vertical-lr;
  font-weight: bold;
  transition: 0.5s;
}
.description-btn {
  right: 0.5rem;
  top: 2.3rem;
  /* left: 1rem; */
}
.details-btn {
  right: 0.5rem;
  top: 10.5rem;
}
.details-btn:hover,
.description-btn:hover {
  cursor: pointer;
}
.textbox {
  overflow-y: auto;
  min-height: 220px;
  height: 85%;
}
/* .textbox > h3 {
  text-align: center;
  font-size: 2rem;
} */
.background-numbers {
  font-size: 2.3rem;
  font-weight: bold;
  opacity: 0.3;
  line-height: normal;
  position: absolute;
  bottom: 1rem;
  right: 260px;
  /* left: 0rem; */
  /* transform: rotateZ(315deg); */
}
.selected {
  z-index: 10;
}
.button-container {
  position: absolute;
  bottom: -12px;
  /* right: 50%;
  transform: translateX(50%); */
  right: 0;
  transform: translateX(0px);
  width: fit-content;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 15;
}
.button {
  width: 150px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* --aug-tl: 45px; */
  cursor: pointer;
  color: var(--mainYellow);
  --aug-inlay-bg: #2a2615;
  font-weight: bold;
}

.github-btn {
  /* --aug-tl: 15px;
  --aug-br: 70px;
  transform: translateX(20%); */
  --aug-tl: 30px;
  --aug-br: 70px;
  transform: translateX(50px);
}
.github-btn > span {
  transform: translateX(-18px);
}
.website-btn {
  --aug-tl: 70px;
  transform: translateX(-10%);
}
.website-btn > span {
  transform: translateX(20px);
}
@media (min-width: 480px) {
  .project-details-container {
    min-height: 400px;
  }
  .project-details,
  .project-description {
    height: 100%;
    padding: 3rem 1.5rem;
    --aug-border-all: 4px;
    --aug-tr2: 1rem;
    --aug-tr-extend2: 0%;
    --aug-tl-inset1: unset;
    --aug-tl1: 2rem;
    --aug-br-extend2: 200px;
    --aug-br-inset2: 33px;
    --aug-br: 50px;
    --aug-br1: 3rem;
    --aug-tr-inset1: unset;
    --aug-br-extend1: initial;
  }
  .project-description {
    --aug-tr-inset2: 7rem;
    --aug-tl-extend2: calc(100% - 18rem);
  }
  .project-details {
    --aug-tr-inset2: 0rem;
    --aug-tl-extend2: calc(100% - 11rem);
  }
  .details-btn,
  .description-btn {
    width: 7rem;
    height: 1.5rem;
    /* width: 50%; */
    top: 0.5rem;
    right: unset;
    writing-mode: initial;
  }
  .details-btn {
    right: 1rem;
  }
  .description-btn {
    left: unset;
    right: 8rem;
  }
  .background-numbers {
    font-size: 6rem;
    bottom: 0;
    left: 1rem;
    transform: rotateZ(0deg);
  }
  .button-container {
    bottom: 0;
    right: 0;
    transform: translateX(0px);
    width: 340px;
    height: 75px;
  }
  .button {
    width: 190px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    /* --aug-tl: 45px; */
    cursor: pointer;
    color: var(--mainYellow);
    --aug-inlay-bg: #2a2615;
  }
  .github-btn {
    --aug-tl: 45px;
    --aug-br: 70px;
    transform: translateX(55px);
  }
  .github-btn > span {
    transform: translateX(-13px);
  }
  .website-btn {
    --aug-tl: 70px;
    transform: translateX(0px);
  }
}
</style>