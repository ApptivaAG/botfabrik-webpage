import { PageProps } from 'gatsby'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, Section } from '../styles'

const TryBubbleChat = ({ location }: PageProps) => (
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

export default TryBubbleChat

export const Head = ({ location }: PageProps) => {
  return (
    <Seo
      title="Bubble Chat ausprobieren"
      description="Probieren sie Bubble Chat aus und überzeugen sie sich von der Leistung von Bubble Chat."
      slug={location.pathname}
    />
  )
}
