import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Container, Section, Cols } from '../styles'
import LinkItem from '../components/LinkItem'
import Seo from '../components/Seo'

const FaqPage = ({ data, location }) => {
  const { faqs } = data
  return (
    <Layout>
      <Seo
        title="Häufig gestellte Fragen"
        description="Was wir immer mal wieder gefragt werden."
        slug={location.pathname}
      />

      <Section>
        <Container>
          <h1>Häufig gestellte Fragen</h1>
          <p>Was wir immer mal wieder gefragt werden.</p>
          <Cols>
            {faqs.nodes.map(({ frontmatter }) => (
              <LinkItem
                align="left"
                to={frontmatter.permalink}
                key={frontmatter.permalink}
              >
                <h2 css="margin: 0; font-size: 1em;">{frontmatter.question}</h2>
              </LinkItem>
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
