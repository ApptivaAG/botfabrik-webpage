import React from 'react'

import Layout from '../components/Layout'
import { Container, Section } from '../styles'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'

const OrderBubbleChat = ({ location }) => {
  return (
    <Layout callToAction={false}>
      <Seo title="Bubble Chat bestellen" slug={location.pathname} />
      <Section>
        <Container>
          <h1>Bubble Chat bestellen</h1>
          <p>
            Bitte teilen sie uns ihre Kontaktdaten mit, um mit der Bestellung
            fortzufahren.
          </p>
          <ContactForm
            subject="Bubble Chat Bestellung"
            buttonText="Bestellen"
          />
        </Container>
      </Section>
    </Layout>
  )
}

export default OrderBubbleChat
