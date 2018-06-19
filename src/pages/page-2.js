import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'

const SecondPage = () => (
  <Layout>
    <section>
      <Container>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </section>
  </Layout>
)

export default SecondPage
