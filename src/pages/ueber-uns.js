import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import { Container, Section } from '../styles'
import Employees from '../components/Employees'
import Seo from '../components/Seo'

const UeberUns = ({ location }) => (
  <Layout>
    <Seo
      title="Über uns"
      description="Wer und was ist die Botfabrik? Entwickler von über 30 Chatbots für kleine und grosse Unternehmen. Seit 2016 mit 7 Mitarbeiter in Luzern stationiert."
      slug={location.pathname}
    />

    <Section>
      <Container>
        <h1>Über uns</h1>
        <p>
          Seit 2016 entwickeln wir in der Botfabrik kundenindividuelle Chatbots
          und integrieren diese bei Bedarf in bestehende IT- und
          Organisationsstrukturen.
        </p>
        <p>
          Dazu hecken wir Strategien für Chatbots aus, erstellen entsprechende
          Konzepte, implementieren Chatbots, verfassen Inhalte für Chatbots,
          integrieren und trainieren diese und stellen den Betrieb von Chatbots
          sicher.
        </p>
        <p>
          Wir sind zu 100% unabhängig und können somit die Tools und
          Technologien einsetzen, welche die geforderten Anforderungen und Ziele
          ideal erfüllen.
        </p>
      </Container>
    </Section>
    <StaticImage src="../img/buero.jpg" alt="Büro" layout="fullWidth" />
    <Employees />
  </Layout>
)

export default UeberUns
