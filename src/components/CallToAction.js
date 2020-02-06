import React from 'react'
import { Link } from 'gatsby'
import { Button, Section, Container } from '../styles'

const CallToAction = () => {
  return (
    <Section css="padding-bottom: 6em;">
      <Container>
        <h2>Interessiert?</h2>
        <p>Wir helfen ihnen gerne bei den Entwicklung eines Chatbots.</p>
        <Button as={Link} to="/kontakt">
          Jetzt Kontakt aufnehmen
        </Button>
      </Container>
    </Section>
  )
}

export default CallToAction
