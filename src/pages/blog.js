/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import LinkItemDefault from '../components/LinkItem'
import { Container, Section } from '../styles'

const LinkItem = styled(LinkItemDefault)`
  display: grid;
  gap: 1em 3em;
  margin-bottom: 1em;
  grid: 'title' 'excerpt' 'image' 'date';
  @media (min-width: 768px) {
    grid: 'title image' 'excerpt image' 1fr 'date image';
  }
  h2,
  p {
    margin: 0;
  }
`

const BlogPage = ({ data }) => {
  const { blogs } = data
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Botfabrik Blog</h1>
          <p>Im Botfabrik Blog teilen wir unsere Erfahrung rund um Chatbots.</p>
          {blogs.nodes.map(({ excerpt, frontmatter }) => {
            return (
              <LinkItem
                to={frontmatter.permalink}
                key={frontmatter.permalink}
                align="left"
              >
                <h2
                  css="grid-area: title"
                  dangerouslySetInnerHTML={{ __html: frontmatter.title }}
                />
                {frontmatter.image && (
                  <Img
                    css="grid-area: image; justify-self: center;"
                    fixed={frontmatter.image.childImageSharp.fixed}
                  />
                )}
                <p css="grid-area: excerpt">{excerpt}</p>
                <p
                  css={`
                    grid-area: date;
                    @media (max-width: 768px) {
                      justify-self: right;
                    }
                  `}
                >
                  <small>{frontmatter.date}</small>
                </p>
              </LinkItem>
            )
          })}
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
          image {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
