import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import { Container, Section, Cols } from '../styles'
import LinkItem from '../components/LinkItem'

const query = graphql`
  query {
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
const Dienstleistungen = () => {
  const { services } = useStaticQuery(query)
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Dienstleistungen</h1>

          <Cols minWidth="16em">
            {services.nodes.map(
              ({ frontmatter: { title, subtitle, permalink, image } }) => (
                <LinkItem
                  to={permalink}
                  key={permalink}
                  css="display: flex; flex-direction: column;"
                >
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                  <img
                    css="flex: 1; max-width: 90%; align-self: center; margin-top: 1em; height: 10em;"
                    src={image.publicURL}
                    alt=""
                  />
                </LinkItem>
              )
            )}
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
                border: 1px solid ${p => p.theme.primary};
              `}
              to="/dienstleistungen/kennenlern-angebot"
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
                border: 1px solid ${p => p.theme.primary};
              `}
              to="/dienstleistungen/chatbot-check"
            >
              <h3>Chatbot-Check</h3>
              <p>Fragen, Chance und Strategien um Chatbots klären</p>
            </LinkItem>
            <LinkItem
              css={`
                background: white;
                border: 1px solid ${p => p.theme.primary};
              `}
              to="/dienstleistungen/can"
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
