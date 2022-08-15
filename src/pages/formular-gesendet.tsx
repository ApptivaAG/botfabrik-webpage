import { Link, PageProps } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, Section } from '../styles'

const FormularGesendet = ({ location }: PageProps) => (
  <Layout callToAction={false}>
    <Seo
      title="Formular gesendet"
      description="Vielen Danke für Ihre Kontaktaufnahme."
      slug={location.pathname}
    />
    <Section>
      <Container>
        <h1>Danke!</h1>
        <p>
          Wir haben Ihre Nachricht erhalten und melden uns so bald wie möglich
          bei Ihnen.
        </p>
        <p>
          <Link to="/kontakt/">Zurück</Link>
        </p>
      </Container>
    </Section>
  </Layout>
)

export default FormularGesendet
