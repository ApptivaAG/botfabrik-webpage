import React from 'react'

import Layout from '../components/Layout'
import { Container, Section } from '../styles'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'

const TryStarterkit = ({ location }) => {
  return (
    <Layout callToAction={false}>
      <Seo title="Starterkit ausprobieren" slug={location.pathname} />
      <Section>
        <Container>
          <h1>Starterkit ausprobieren</h1>
          <p>
            Bitte teilen sie uns ihre Kontaktdaten mit, damit wir ihren Chatbot
            erstellen und ihnen die Zugangsdaten zusenden können.
          </p>
          <ContactForm subject="Starterkit ausprobieren" />
        </Container>
      </Section>
    </Layout>
  )
}

export default TryStarterkit
