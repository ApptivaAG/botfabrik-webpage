import Layout from '../components/Layout'
import { Container } from '../styles'

const JobsPage = () => (
  <Layout callToAction={false}>
    <section>
      <Container>
        <h1>Jobs</h1>
        <h2 style={{ marginBottom: 0 }}>
          Zur Zeit haben wir keine offenen Stellen.
        </h2>
        <p>
          Wir freuen uns aber auch dann auf Deine Bewerbung, wenn keine Stellen
          vakant sind.
        </p>
        <p>
          Bitte sende Deine Initiativbewerbung an
          <a href="mailto:mensch@botfabrik.ch?subject=Initiativbewerbung bei Botfabrik">
            {' '}
            mensch@botfabrik.ch
          </a>
        </p>
      </Container>
    </section>
  </Layout>
)

export default JobsPage
