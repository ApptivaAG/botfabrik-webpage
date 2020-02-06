import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
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

const LinkItemStyled = styled(LinkItem)`
  padding: 1.5em 1em;
  h2 {
    margin: 0;
  }
  p {
    margin-top: 0;
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
                <LinkItemStyled to={permalink} key={permalink}>
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                  <img css="height: 10em;" src={image.publicURL} alt="" />
                </LinkItemStyled>
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
              to="kennenlern-angebot"
            >
              Chatbots kennenlernen
              <br />
              <small>
                Einsatz, Vorteile, Funktion, Technologie von Chatbots
                kennenlernen
              </small>
            </LinkItem>
            <LinkItem
              css={`
                background: white;
                border: 1px solid ${p => p.theme.primary};
              `}
              to="chatbot-check"
            >
              Chatbot-Check
              <br />
              <small>Fragen, Chance und Strategien um Chatbots klären</small>
            </LinkItem>
            <LinkItem
              css={`
                background: white;
                border: 1px solid ${p => p.theme.primary};
              `}
              to="can"
            >
              CAN
              <br />
              <small>Der zuvorkommende Kundendienst-Bot</small>
            </LinkItem>
          </Cols>
        </Container>
      </Section>
    </Layout>
  )
}

export default Dienstleistungen
