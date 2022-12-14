export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 5000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'human-resource-frontend-nuxt2',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: '/js/bootstrap.min.js',
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-select', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    // baseURL: 'http://127.0.0.1:5000/api/',
    proxy: true
  },

  proxy: {
    '/api/': { target: 'http://127.0.0.1:5000/', changeOrigin: true }
  },

  auth: {
    localStorage: false,

    strategies: {
      local: {
        token: {
          property: 'data.token'
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data'
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          user: { url: '/api/users/me', method: 'get' }
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },
}
