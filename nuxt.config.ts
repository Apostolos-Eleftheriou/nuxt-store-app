// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Nuxt Store App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt Store App' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https:/fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig: {
    // this wont be exposed to the front end so i cant use it there
    currencyKey: process.env.CURRENCY_API_KEY,
    // if i want to expose certain variables in the front end i can do it like this ↓
    // public: {
    //   currencyKey: process.env.CURRENCY_API_KEY
    // }
  }
})
