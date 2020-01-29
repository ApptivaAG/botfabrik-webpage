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
            In der Botfabrik entwickeln wir kundenindividuelle Bots und Chatbots
            und integrieren diese bei Bedarf in die bestehende IT Struktur. Wir
            sind zu 100% unabhängig und können somit die Tools und Technologien
            einsetzen, die die geforderten Anforderungen und Ziele ideal
            erfüllen.
          </p>
        </Container>
      </Section>
      <Employees />
    </Layout>
  )
}

export default UeberUns
