import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import LinkItem from '../components/LinkItem'
import Seo from '../components/Seo'
import { Cols, Container, Section } from '../styles'

const query = graphql`
  query ServicesPage {
    services: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { regex: "/service/" } } }
      sort: { order: ASC, fields: frontmatter___id }
    ) {
      nodes {
        frontmatter {
          id
          title
          subtitle
          permalink
          image {
            publicURL
          }
        }
      }
    }
  }
`
const Dienstleistungen = ({ location }: PageProps) => {
  const { services } = useStaticQuery<Queries.ServicesPageQuery>(query)
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Dienstleistungen</h1>

          <Cols minWidth="320px">
            {services.nodes.map(({ frontmatter }) => (
              <LinkItem
                key={frontmatter?.permalink}
                to={`${frontmatter?.permalink}/`}
                css="display: flex; flex-direction: column;"
              >
                <h2>{frontmatter?.title}</h2>
                <p>{frontmatter?.subtitle}</p>
                <img
                  css="flex: 1; max-width: 80%; align-self: center; margin-top: 1em; height: 10em;"
                  data-src={frontmatter?.image?.publicURL}
                  className="lozad"
                  loading="lazy"
                  alt={frontmatter?.title ?? 'Keine Beschreibung'}
                  width="240"
                  height="268"
                />
              </LinkItem>
            ))}
          </Cols>
        </Container>
      </Section>
      <Section dark>
        <Container>
          <h2>Weitere Angebote</h2>
          <Cols>
            <LinkItem
              css={`
                background: white;
                border: 1px solid ${(p) => p.theme.primary};
              `}
              to="/dienstleistungen/kennenlern-angebot/"
            >
              <h3>Chatbots kennenlernen</h3>
              <p>
                Einsatz, Vorteile, Funktion, Technologie von Chatbots
                kennenlernen
              </p>
            </LinkItem>
            <LinkItem
              css={`
                background: white;
                border: 1px solid ${(p) => p.theme.primary};
              `}
              to="/dienstleistungen/chatbot-check/"
            >
              <h3>Chatbot-Check</h3>
              <p>Fragen, Chance und Strategien um Chatbots klären</p>
            </LinkItem>
            <LinkItem
              css={`
                background: white;
                border: 1px solid ${(p) => p.theme.primary};
              `}
              to="/dienstleistungen/can/"
            >
              <h3>CAN</h3>

              <p>Der zuvorkommende Kundendienst-Bot</p>
            </LinkItem>
          </Cols>
        </Container>
      </Section>
    </Layout>
  )
}

export default Dienstleistungen

export const Head = ({ location }: PageProps) => {
  return (
    <Seo
      title="Dienstleistungen"
      description="Wir bieten Dienstleistungen rund um die Entwicklung und den Betrieb von Chatbots."
      slug={location.pathname}
    />
  )
}
