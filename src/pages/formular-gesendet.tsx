import { navigate, PageProps } from 'gatsby'
import GoogleTag from '../components/GoogleTag'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, Section } from '../styles'

const FormularGesendet = () => (
  <Layout callToAction={false}>
    <Section>
      <Container>
        <h1>Danke!</h1>
        <p>
          Wir haben Ihre Nachricht erhalten und melden uns so bald wie möglich
          bei Ihnen.
        </p>
        <p>
          <a css="cursor: pointer;" onClick={() => navigate(-1)}>
            Zurück
          </a>
        </p>
      </Container>
    </Section>
  </Layout>
)

export default FormularGesendet

export const Head = ({ location }: PageProps) => {
  return (
    <>
      <Seo
        title="Formular gesendet"
        description="Vielen Danke für Ihre Kontaktaufnahme."
        slug={location.pathname}
      />
      <GoogleTag />
    </>
  )
}
