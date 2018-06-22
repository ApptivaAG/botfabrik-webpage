import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'

const IndexPage = ({ data }) => (
  <Layout>
    <section>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>

        {data.blogs.edges.map(({ node }) => (
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        ))}
      </Container>
    </section>
  </Layout>
)

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage {
    blogs: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fixed(height: 150, width: 300) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
                # sqip(numberOfPrimitives: 8, blur: 6) {
                #   dataURI
                # }
              }
            }
            date(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  }
`
