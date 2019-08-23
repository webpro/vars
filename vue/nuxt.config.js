import manifest from './static/manifest.json';

manifest.start_url = `${manifest.start_url}?standalone=true`;
manifest.icons = manifest.icons.map(icon => {
  icon.src = `/${icon.src}`;
  return icon;
});

export default {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: '%s',
    meta: [
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      { name: 'theme-color', content: '#333333' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['~/static/global.css'],

  loading: {
    color: '#333333'
  },

  manifest,

  modules: ['@nuxtjs/pwa'],

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
