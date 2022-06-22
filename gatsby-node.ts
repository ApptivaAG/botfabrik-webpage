import path from 'path'
import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions

  const posts = await graphql<Queries.GatsbyNodeBlogsQuery>(`
    query GatsbyNodeBlogs {
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
  `).then((result) => {
    if (result.errors) {
      // eslint-disable-next-line no-console
      result.errors.forEach((e: any) => console.error(e.toString()))
      throw Error(`Error while getting blog posts: ${result.errors}`)
    }
    if (result.data === undefined) {
      throw Error('Error: Blog posts query in gatsby-node returned undefined.')
    }
    return result.data.allMarkdownRemark.edges
  })

  posts.forEach(({ node }, index) => {
    const prevId = index === 0 ? null : posts[index - 1].node.id
    const nextId = index === posts.length - 1 ? null : posts[index + 1].node.id
    const { id } = node
    if (node.frontmatter?.permalink == null) {
      throw Error(`Error: Permalink no defined for blog post ${id}`)
    }
    createPage({
      path: path.join('/', node.frontmatter.permalink, '/'),
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.tsx`
      ),
      // additional data can be passed via context
      context: {
        id,
        prevId,
        nextId,
      },
    })
  })

  const pages = await graphql<Queries.GatsbyNodePagesQuery>(`
    query GatsbyNodePages {
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
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    if (result.data === undefined) {
      throw Error('Error: Pages query in gatsby-node returned undefined.')
    }

    return result.data.allMarkdownRemark.edges
  })

  pages.forEach(({ node }) => {
    if (node.frontmatter?.permalink == null) {
      throw Error(`Error: Permalink no defined for page ${node.id}`)
    }

    createPage({
      path: path.join('/', node.frontmatter.permalink, '/'),
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.tsx`
      ),
      // additional data can be passed via context
      context: {
        id: node.id,
      },
    })
  })
}
