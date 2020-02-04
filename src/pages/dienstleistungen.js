import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import Layout from '../components/Layout'
import { Container, Section, Cols } from '../styles'

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

const Angebot = ({ to, children }) => (
  <h3>
    <Link to={to}>{children}</Link>
  </h3>
)

const Item = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1em;
  background: ${p => p.theme.lightBg};
  color: black;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`

const service = (permalink, title, subtitle, image) => {
  return (
    <Link key={permalink} to={permalink}>
      <Item>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <img css="height: 10em;" src={image.publicURL} alt="" />
      </Item>
    </Link>
  )
}

const Dienstleistungen = () => {
  const { services } = useStaticQuery(query)
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Dienstleistungen</h1>

          <Cols minWidth="16em">
            {services.nodes.map(
              ({ frontmatter: { title, subtitle, permalink, image } }) =>
                service(permalink, title, subtitle, image)
            )}
          </Cols>
          {/* <h2>Workshops zur Erarbeitung von Chatbot-Inhalten</h2>
          <h2>Chatbot-Entwicklung</h2>
          <h2>Technische und organisatorische Integration von Chatbots</h2>
          <h2>Optimierung und Training von Chatbots</h2>
          <h2>Betrieb von Chatbots</h2> */}
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Weitere Angebote</h2>
          <Angebot to="kennenlern-angebot">
            Chatbots kennenlernen
            <br />
            <small>
              Einsatz, Vorteile, Funktion, Technologie von Chatbots kennenlernen
            </small>
          </Angebot>
          <Angebot to="chatbot-check">
            Chatbot-Check
            <br />
            <small>Fragen, Chance und Strategien um Chatbots klären</small>
          </Angebot>
          <Angebot to="can">
            CAN
            <br />
            <small>Der zuvorkommende Kundendienst-Bot</small>
          </Angebot>
        </Container>
      </Section>
    </Layout>
  )
}

export default Dienstleistungen
