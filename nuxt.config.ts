// import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/fonts/fonts.css'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/fontaine'
  ],
  build: {
    transpile: ['gsap']
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  content: {
    markdown: {
      anchorLinks: false
    }
  },
  // app: {
  //   baseURL: '/arpado.github.io/'
  // }

  // github pages stuff
  // ssr: false,
  // mode: 'static',
  // router: {
  //    base: '/arpado.github.io/'
  // },
  // generator:{
  //   nojekyll:true
  // },

  // other stuff
  // build: {
  //     transpile: [
  //         '@fortawesome/vue-fontawesome',
  //         '@fortawesome/fontawesome-svg-core',
  //         '@fortawesome/pro-solid-svg-icons',
  //         '@fortawesome/pro-regular-svg-icons',
  //         '@fortawesome/pro-light-svg-icons',
  //         '@fortawesome/free-brands-svg-icons'
  //     ]
  // }
  // buildModules:['@nuxtjs/fontawesome'],
  // fontawesome: {
  //     icons:{
  //      solid:true,
  //      brands:true
  //     }
  //    }
})

// removed from package.json
// "@nuxtjs/composition-api": "^0.33.1",
// "pinia": "^2.0.22",

