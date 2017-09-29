const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '../'),
  srcDir: __dirname,
  modulesDir: path.join(__dirname, '../node_modules'),
  buildDir: path.join(__dirname, '.nuxt'),

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-postcss-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // Now it doesn't work.
    // But rename "postcss.config.js" to "postcss.conf.js" and enable next line, it works
    postcss: require('./postcss.conf.js'),
  }
}
