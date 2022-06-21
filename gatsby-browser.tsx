// IE/Edge polyfill needed for plugin "gatsby-remark-images-medium-zoom"
import '@fastly/performance-observer-polyfill/polyfill'
// Lazy loading images
import lozad from 'lozad'

export const onRouteUpdate = () => {
  const observer = lozad()
  observer.observe()
}
