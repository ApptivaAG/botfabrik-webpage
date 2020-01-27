import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Container, Section } from '../styles'

const BlogPage = ({ data }) => {
  const { blogs } = data
  return (
    <Layout>
      <section>
        <Container>
          <h1>Botfabrik Blog</h1>
          <p>Im Botfabrik Blog teilen wir unsere Erfahrung rund um Chatbots.</p>
        </Container>
      </section>
      <Section>
        <Container>
          {blogs.nodes.map(({ excerpt, frontmatter }) => (
            <Link to={frontmatter.permalink}>
              <h2>{frontmatter.title}</h2>
              <p>{excerpt}</p>
            </Link>
          ))}
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogPage

export const blogPageQuery = graphql`
  query BlogPage {
    blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      nodes {
        excerpt(pruneLength: 140)
        id
        frontmatter {
          title
          permalink
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
