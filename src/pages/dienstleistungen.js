import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { Container, Section } from '../styles'

const Angebot = ({ to, children }) => (
  <h3>
    <Link to={to}>{children}</Link>
  </h3>
)

const Dienstleistungen = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Dienstleistungen</h1>
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
