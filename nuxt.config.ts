// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '株式会社 MAG',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'css/fonts.css' },
        { rel: 'stylesheet', href: 'css/bootstrap.weber.css' },
        { rel: 'stylesheet', href: 'css/fx.css' },
        { rel: 'stylesheet', href: 'css/custom.css' },
        { rel: 'stylesheet', href: 'css/index.css' }
      ],
      script: [
        { src: 'https://maps.googleapis.com/maps/api/js?key=' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js' },
        { src: 'js/jquery-2.1.4.min.js' },
        { src: 'js/bootstrap.min.js' },
        { src: 'js/jquery.validate.min.js' },
        { src: 'js/custom.js' },
        { src: 'js/index.js' },
      ],
    },
  },
  devtools: { enabled: true },
  plugins: [
  ]
})
