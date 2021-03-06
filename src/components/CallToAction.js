import React from 'react'
import { Link } from 'gatsby'
import { Button, Section, Container } from '../styles'

const CallToAction = ({ dark }) => (
  <Section css="padding-bottom: 6em;" dark={dark}>
    <Container>
      <h2>Interessiert?</h2>
      <p>Wir helfen ihnen gerne bei der Entwicklung eines Chatbots.</p>
      <Button as={Link} to="/kontakt/">
        Jetzt Kontakt aufnehmen
      </Button>
    </Container>
  </Section>
)

export default CallToAction
