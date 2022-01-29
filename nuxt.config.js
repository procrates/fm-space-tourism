import smConfig from './sm.json'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Space',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A space tourism website built on Nuxt 2 and prismic with slicemachine' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/prismic',
      {
        endpoint: smConfig.apiEndpoint || '',
      },
    ],
    ['nuxt-sm'],
  ],
  prismic: {
    endpoint: 'https://space-tourism.cdn.prismic.io/api/v2',
    /* apiOptions: {
      routes: [
        {
          type: 'frontpage',
          path: '/:lang/blog/:category?/:uid',
          resolvers: {
            country: 'country',
            category: 'country.category',
          },
        },
      ],
    }, */
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    },
  },

  /* storybook: {
    // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
    stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
  },
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  ignore: [...getStoriesPaths().map((path) => path.replace('../', '~/'))], */
  generate: {
    fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
    exclude: ['/slice-simulator']
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return savedPosition
    }
  },
}
