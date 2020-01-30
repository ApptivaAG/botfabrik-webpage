import React from 'react'

import styled from 'styled-components'
import Layout from '../components/Layout'
import { Container, Section } from '../styles'
import ContactForm from '../components/ContactForm'

const Grid = styled.div`
  display: grid;
  margin-top: 4em;
  gap: 1em;

  p {
    margin: 0;
  }
  @media (min-width: 1024px) {
    grid: 1fr / 1fr 2fr;

    form {
      padding-left: 2em;
      border-left: 1px solid #ddd;
    }
  }
`
const ContactInfo = styled.a`
  display: block;
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: 1.4em !important;
`

const Kontakt = () => {
  return (
    <Layout>
      <Section>
        <Container>
          <h1>Kontakt</h1>
          <p>
            Wir sind immer interessiert am Austausch, deshalb zögern sie nicht
            mit uns in Kontakt zu treten.
          </p>
          <Grid>
            <div>
              <p>Telefon</p>
              <ContactInfo href="tel:+41413222626">041 322 26 26</ContactInfo>
              <p>Mail</p>
              <ContactInfo href="mailto:mensch@botfabrik.ch">
                mensch@botfabrik.ch
              </ContactInfo>
              <p>Chatbot</p>
              <ContactInfo>Sprechen sie mit Pit.</ContactInfo>
            </div>
            <ContactForm />
          </Grid>
        </Container>
      </Section>
      <Section dark>
        <Container>
          <h2>Standort</h2>
          <p>
            Die Botfabrik befindet sich in Sempach an der Autobahn A2 und der
            Bahnlinie zwischen Luzern und Sursee.
          </p>
          <address>
            Neuenkirchstrasse 19 <br />
            6203 Sempach <br />
            Station
          </address>

          <iframe
            css="margin-top: 3em;"
            title="Google Maps"
            frameBorder="0"
            height="550px"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?q=Apptiva%20AG,%20Neuenkirchstrasse%2019,%20Sempach%20Station&hl=de&geocode=+&hnear=Apptiva%20AG+Neuenkirchstrasse%2019,+Sempach%20Station&t=m&z=10&iwloc=A&output=embed"
            width="100%"
          />
        </Container>
      </Section>
    </Layout>
  )
}

export default Kontakt
