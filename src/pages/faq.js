import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import { Container, Section, Cols } from '../styles'

const FaqItem = styled.div`
  padding: 1em;
  background: ${p => p.theme.lightBg};
`

const FaqPage = ({ data }) => {
  const { faqs } = data
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Häufig gestellte Fragen</h1>
          <p>Was wir immer mal wieder gefragt werden.</p>
          <Cols>
            {faqs.nodes.map(({ frontmatter }) => (
              <FaqItem key={frontmatter.permalink}>
                <Link to={frontmatter.permalink}>
                  <h2 css="font-size: 1.2em;">{frontmatter.question}</h2>
                </Link>
              </FaqItem>
            ))}
          </Cols>
        </Container>
      </Section>
    </Layout>
  )
}

export default FaqPage

export const faqPageQuery = graphql`
  query FaqPage {
    faqs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "faq" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          question
          permalink
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
