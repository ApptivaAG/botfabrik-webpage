import { graphql, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import LinkItem from '../components/LinkItem'
import Seo from '../components/Seo'
import { Cols, Container, Section } from '../styles'
import { surroundWithSlashes } from '../util'

const FaqPage = ({ data, location }: PageProps<Queries.FaqPageQuery>) => {
  const { faqs } = data
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Häufig gestellte Fragen</h1>
          <p>Was wir immer mal wieder gefragt werden.</p>
          <Cols>
            {faqs.nodes.map(({ frontmatter }) => (
              <LinkItem
                align="left"
                to={surroundWithSlashes(frontmatter?.permalink)}
                key={frontmatter?.permalink}
              >
                <h2 css="margin: 0; font-size: 1em;">
                  {frontmatter?.question}
                </h2>
              </LinkItem>
            ))}
          </Cols>
        </Container>
      </Section>
    </Layout>
  )
}

export default FaqPage

export const Head = ({ location }: PageProps) => {
  return (
    <Seo
      title="Häufig gestellte Fragen"
      description="Häufig gestellte Fragen zu Chatbots, der Funktionsweise von Chatbots, der Entwicklung von Chatbots und zur Botfabrik."
      slug={location.pathname}
    />
  )
}

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
