import React from 'react'
import Layout from '../components/Layout'
import { Container } from '../styles'

const NotFoundPage = () => (
  <Layout>
    <section>
      <Container>
        <h1>Nicht gefunden...</h1>
        <p>Diese URL existiert leider (nicht) mehr.</p>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
