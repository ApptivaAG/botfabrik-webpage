import React from 'react'

import Layout from '../components/Layout'
import { Container, Section } from '../styles'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'

const TryBubbleChat = ({ location }) => {
  return (
    <Layout callToAction={false}>
      <Seo title="Bubble Chat ausprobieren" slug={location.pathname} />
      <Section>
        <Container>
          <h1>Bubble Chat ausprobieren</h1>
          <p>
            Bitte teilen sie uns ihre Kontaktdaten mit, damit wir ihren Chatbot
            erstellen und ihnen die Zugangsdaten zusenden können.
          </p>
          <ContactForm subject="Bubble Chat ausprobieren" />
        </Container>
      </Section>
    </Layout>
  )
}

export default TryBubbleChat
