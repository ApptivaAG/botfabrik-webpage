import React from 'react'

import Layout from '../components/Layout'
import { Container, Section } from '../styles'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'

const OrderStarterkit = ({ location }) => {
  return (
    <Layout callToAction={false}>
      <Seo title="Starterkit bestellen" slug={location.pathname} />
      <Section>
        <Container>
          <h1>Starterkit bestellen</h1>
          <p>
            Bitte teilen Sie uns ihre Kontaktdaten mit, um mit der Bestellung
            fortzufahren.
          </p>
          <ContactForm subject="Starterkit Bestellung" buttonText="Bestellen" />
        </Container>
      </Section>
    </Layout>
  )
}

export default OrderStarterkit
