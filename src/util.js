// eslint-disable-next-line import/prefer-default-export
export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)))
