import React from 'react'

import Layout from '../components/Layout'
import { Container, Section } from '../styles'
import Employees from '../components/Employees'

const UeberUns = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Über uns</h1>
          <p>
            Seit 2016 entwickeln wir in der Botfabrik kundenindividuelle
            Chatbots und integrieren diese bei Bedarf in bestehende IT- und
            Organisations-Strukturen.
          </p>
          <p>
            Dazu hecken wir Strategien für Chatbots aus, erstellen entsprechende
            Konzepte, implementieren Chatbots, unterstützen bei und verfassen
            Inhalte für Chatbots, integrieren und trainieren diese und stellen
            den Betrieb von Chatbots sicher.
          </p>
          <p>
            Wir sind zu 100% unabhängig und können somit die Tools und
            Technologien einsetzen, die die geforderten Anforderungen und Ziele
            ideal erfüllen.
          </p>
        </Container>
      </Section>
      <Employees />
    </Layout>
  )
}

export default UeberUns
