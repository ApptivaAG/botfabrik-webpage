import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Container, Section } from '../styles'

const BlogPage = ({ data }) => {
  const { blogs } = data
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Botfabrik Blog</h1>
          <p>Im Botfabrik Blog teilen wir unsere Erfahrung rund um Chatbots.</p>
          {blogs.nodes.map(({ excerpt, frontmatter }) => (
            <div
              key={frontmatter.permalink}
              css={`
                margin-top: 3em;
                margin-bottom: 3em;
              `}
            >
              <Link to={frontmatter.permalink}>
                {/* eslint-disable-next-line react/no-danger */}
                <h2 dangerouslySetInnerHTML={{ __html: frontmatter.title }} />
                <p>{excerpt}</p>
              </Link>
            </div>
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
