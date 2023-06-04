<template>
  <section class="projects-section" id="projects">
    <div class="title-container flex place-content-center">
      <h2>Innovative Ventures I've Embarked On:</h2>
      <hr />
    </div>

    <div
      class="project-slide-in-1 featured-project flex justify-center gap-12 w-11/12 my-4 mx-auto"
      ref="project-1"
    >
      <div class="image-placeholder flex place-content-center">
        <img
          class="project-img"
          src="/images/pizza-parallax-3.jpg"
          alt=""
        />
      </div>
      <ProjectTextElement
        :page="pages[0]"
        :pagesArr="pages"
        :number="0"
        :startFrom="1"
      />
    </div>

    <div
      class="project-slide-in-2 featured-project flex justify-center gap-12 w-11/12 my-4 mx-auto"
      ref="project-2"
    >
      <div class="image-placeholder">
        <img class="project-img" src="/images/planetarium.jpg" alt="" />
      </div>
      <ProjectTextElement
        :page="pages[1]"
        :pagesArr="pages"
        :number="1"
        :startFrom="1"
      />
    </div>

    <div
      class="project-slide-in-3 projects-rest-container flex justify-center gap-12 w-11/12 my-4 mx-auto"
      ref="project-3"
    >
      <!-- @slideChange="onSlideChange" -->
      <!-- :options="swiperOption" -->
      <Swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        class="swiper"
        @slideChange="changeSwiperIndex"
        ref="mySwiper"
        navigation
        :pagination="{ clickable: true }"
      >
        <SwiperSlide
          v-for="(page, index) in shortenPages"
          :key="index"
          class="card"
        >
          <!-- <p>{{ index }}</p> -->
          <img class="project-img" :src="getPic(page)" alt="" />
        </SwiperSlide>
      </Swiper>
      <ProjectTextElement
        :page="pages[activeDescription]"
        :pagesArr="shortenPages"
        :number="activeDescription"
        :startFrom="3"
      />
    </div>
  </section>
</template>

<script>
// section-unit flex-c-c
import pages from "@/content/webpages.json";
import gsap from "gsap";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { EffectCards, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  data() {
    return {
      pages,
      activeDescription: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  async setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = (e) => {
      // console.log("slide change");
      // console.log(e);
    };

    return {
      onSwiper,
      onSlideChange,
      // swiperSlide,
      // Swiper,
      modules: [EffectCards, Pagination, Navigation],
    };
  },
  // mounted() {
  // gsap.to(".project-element", {
  //   scrollTrigger: {
  //     trigger: ".project-element",
  //     start: "top 80%",
  //   },
  //   opacity: 1,
  //   stagger: 0.2,
  //   duration: 0.5,
  //   ease: "circ.out",
  // });
  // }
  mounted() {
    this.setAnimationTrigger();
  },
  methods: {
    getPic(page) {
      return "images/" + page.image;
    },
    changeSwiperIndex(e) {
      this.activeDescription = e.activeIndex;
    },
    setAnimationTrigger() {
      gsap.to(this.$refs["project-1"], {
        scrollTrigger: {
          trigger: this.$refs["project-1"],
          start: "top 75%",
          // markers: true,
        },
        opacity: 1,
        transform: "translateX(0px)",
        duration: 3,
      });
      gsap.to(this.$refs["project-2"], {
        scrollTrigger: {
          trigger: this.$refs["project-2"],
          start: "top 75%",
          // markers: true,
        },
        opacity: 1,
        transform: "translateX(0px)",
        duration: 3,
      });
      gsap.to(this.$refs["project-3"], {
        scrollTrigger: {
          trigger: this.$refs["project-3"],
          // markers: true,
          start: "top 75%",
        },
        opacity: 1,
        transform: "translateX(0px)",
        duration: 3,
      });
    },
  },
  computed: {
    shortenPages() {
      return this.pages.slice(2);
    },
  },
};
</script>

<style scoped>
/* #projects-scroll-to {
  transform: translateY(-120px);
} */
#projects {
  height: fit-content;
  scroll-margin-top: 84px;
}
.projects-section {
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  padding: 2rem 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: black;
  /* overflow-x: hidden;
  overflow-y: visible; */
}
.title-container {
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  /* transform: translateY(-100%); */
  font-size: 2rem;
}
hr {
  width: 50%;
  margin: 1rem auto;
}

.featured-project,
.projects-rest-container {
  /* min-height: 40vh; */
  height: fit-content;
  max-width: 1400px;
  margin: 2rem auto;
  /* width: 80vw; */
  /* margin: 10px auto; */
  /* padding: 1rem; */
  opacity: 0;
  transform: translateX(-100px);
  overflow: visible;
  flex-direction: column;
}
.image-placeholder,
.card {
  /* for large screen */
  width: 100%;
  /* min-height: 400px; */
  /* background-color: silver; */
  border-radius: 10px;
  overflow: hidden;
  max-height: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-img {
  width: 100%;
  object-fit: contain;
  /* height: 100%; */
  border-radius: 10px;
  height: unset;
  max-height: 600px;
}

.swiper {
  width: 100%;
  /* min-height: 400px; */
  /* height: 400px; */
  margin: 0;
}

/* .card {
  min-width: 600px;
  width: 600px;
  height: 400px;
  background: silver;
  border-radius: 10px;
} */
/* .card img {
  width: 600px;
} */

@media (min-width: 640px) {
  .projects-section {
    padding: 2rem 1rem;
  }
  .image-placeholder,
  .card {
    /* width: 600px; */
    min-width: 450px;
    /* width: inherit;
  margin: 0 auto; */
  }
  .swiper {
    /* width: 600px; */
    min-width: 450px;
  }
}
@media (min-width: 1024px) {
  .featured-project,
  .projects-rest-container {
    /* flex-direction: row; */
  }
  .project-slide-in-1,
.project-slide-in-3 {
  flex-direction: row-reverse;
}
.project-slide-in-2 {
  flex-direction: row;
}
}

/* .text-placeholder {
  width: 600px;
  height: 400px;
} */

/* .swiper-pagination-bullets {
  background-color: white !important;
  opacity: 1;
} */
/* .project-element {
  opacity: 0;
} */
.projects-rest-container {
  /* width: 100vw; */
}
/* .projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  background-color: black;
} */
</style>