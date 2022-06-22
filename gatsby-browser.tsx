// IE/Edge polyfill needed for plugin "gatsby-remark-images-medium-zoom"
import '@fastly/performance-observer-polyfill/polyfill'
// Lazy loading images
import lozad from 'lozad'

import type { GatsbyBrowser } from 'gatsby'

export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = () => {
  const observer = lozad()
  observer.observe()
}
