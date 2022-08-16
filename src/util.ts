const baseOrSlugUrl = (baseUrl, slug) => new URL(slug || '', baseUrl).href

const addSlashToEnd = (url) => (url.endsWith('/') ? url : `${url}/`)
const addSlashToStart = (url) => (url.startsWith('/') ? url : `${url}/`)

export const compose = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  )

export const composeUrl = compose(addSlashToEnd, baseOrSlugUrl)

export const surroundWithSlashes = compose(addSlashToStart, addSlashToEnd)

export const isBrowser = typeof window !== 'undefined'
