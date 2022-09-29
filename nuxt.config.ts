import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/fonts/fonts.css'
  ],
  modules: [
    '@pinia/nuxt',
  ],
  build: {
    transpile: ['gsap']
  },
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
