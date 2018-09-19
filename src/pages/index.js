import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContainerDefault from '../components/Container'
import Seo from '../components/Seo'
import Chatbot from '../components/Chatbot'

const Container = ContainerDefault.extend`
  display: grid;
  grid-template: 'Content Chatbot' auto / 1fr 300px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo />

    <section>
      <Container>
        <Chatbot />
        <div>
          <h1>Individuelle Chatbots von A-Z</h1>
          <ul>
            <li>Konzept</li>
            <li>Inhalt und Texte</li>
            <li>Umsetzung</li>
            <li>Integration</li>
            <li>Training</li>
          </ul>

          {data.blogs.edges.map(({ node }) => (
            <Link key={node.frontmatter.path} to={node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          ))}
        </div>
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
