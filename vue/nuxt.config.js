export default {
  head: {
    titleTemplate: '%s',
    meta: [],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['~/static/global.css'],

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'VARS - Vue',
    short_name: 'vars-vue',
    description: 'HackerNews clone built with Nuxt.js',
    theme_color: '#2F495E',
    start_url: '/'
  },

  devModules: [],

  plugins: [],

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`);
        }
      }
    },
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type);
      }
    }
  }
};
