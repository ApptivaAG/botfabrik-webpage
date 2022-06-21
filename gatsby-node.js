const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const posts = graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { regex: "/blog-post/" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              permalink
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const { edges } = result.data.allMarkdownRemark

    return edges.forEach(({ node }, index) => {
      const prevId = index === 0 ? null : edges[index - 1].node.id
      const nextId =
        index === edges.length - 1 ? null : edges[index + 1].node.id
      const { id } = node
      createPage({
        path: path.join('/', node.frontmatter.permalink, '/'),
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.jsx`
        ),
        // additional data can be passed via context
        context: {
          id,
          prevId,
          nextId,
        },
      })
    })
  })

  const pages = graphql(`
    query {
      allMarkdownRemark(
        limit: 1000
        filter: {
          frontmatter: { templateKey: { regex: "/faq|page|service/" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              permalink
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { edges } = result.data.allMarkdownRemark

    return edges.forEach(({ node }) => {
      createPage({
        path: path.join('/', node.frontmatter.permalink, '/'),
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.jsx`
        ),
        // additional data can be passed via context
        context: {
          id: node.id,
        },
      })
    })
  })

  return Promise.all([posts, pages])
}
