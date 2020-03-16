// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueGtag from 'vue-gtag'

if (process.isClient) {
  const WebFont = require('webfontloader')

  WebFont.load({
    google: {
      families: [
        'Merriweather:400,400i,700',
        'Open+Sans:400,600,700&display=swap'
      ]
    }
  })
}

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueGtag, {
    config: { id: 'UA-154867274-1' }
  })
  head.htmlAttrs = { lang: 'pt-BR' }
  head.script.push({
    src:
      'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js',
    body: true
  })
}
