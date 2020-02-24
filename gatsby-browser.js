// IE/Edge polyfill needed for plugin "gatsby-remark-images-medium-zoom"
require('@fastly/performance-observer-polyfill/polyfill')

// Lazy loading images
const lozad = require('lozad')

exports.onRouteUpdate = () => {
  const observer = lozad()
  observer.observe()
}
