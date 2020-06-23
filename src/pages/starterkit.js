import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { Container, Section, Button } from '../styles'
import Seo from '../components/Seo'
import checkmark from '../img/checkmark.svg'
import toolbox from '../img/toolbox.jpg'
import ButtonList from '../components/ButtonList'

const BUBBLE_LINK = (
  <a target="_blank" rel="noopener noreferrer" href="https://bubblecms.io/de">
    Bubble CMS
  </a>
)

const basicFeatures = [
  'WebClient (Avatars & Farben anpassbar)',
  'Integration in die bestehende Webseite',
  <label htmlFor="bubbleCMS">Bearbeitung der Inhalte mit {BUBBLE_LINK}</label>,
  'NLP mit Google Dialogflow',
  'Absichtserkennung durch KI',
  'Smalltalk Skills',
  'Spracheingabe',
  'Analytics',
]

const FieldSet = styled.fieldset`
  border: none;
  padding-block-start: 0em;
`

const Feature = styled.p`
  margin-block-start: 0em;
  margin-block-end: 0.5em;
`

const FeatureInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  ${({ checked }) =>
    checked
      ? checked &&
        css`
            content: url("${checkmark}");
        `
      : css`
          width: 0.3em !important;
          height: 0.3em !important;
          outline: 2px solid #009fdc;
          box-shadow: none;
          font-size: 2em;
        `}
`

const Price = styled.p`
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;
  margin: 1em 0em 0em 0em;
`
const PriceInfo = styled.p`
  text-align: center;
  margin: 0em 0em 1em;
`

const Starterkit = ({ location }) => {
  return (
    <Layout callToAction={false}>
      <Seo
        title="Starterkit"
        description="Der einfache Einstieg in die Chatbot-Welt?"
        slug={location.pathname}
      />

      <Section>
        <Container>
          <h1>Starterkit</h1>
          <p>
            Möchten Sie erstmal nur einen sehr simplen Chatbot z.B. zum
            beantworten von häufig gestellten Fragen erstellen, sich aber alle
            Möglichkeiten zur Erweiterungen offen halten? Dann ist das
            Starterkit genau das richtige für Sie.
          </p>
          <p>
            Durch die zahlreichen Chatbots, die wir inzwischen entwickelt haben,
            ist ein Grundgerüst entstanden, das wir oft als Basis für neue
            Chatbots verwenden. Intern nennen wir dieses Grundgerüst die
            <b> Botengine</b>. Diese deckt wesentliche Grundfunktionen eines
            Chatbots ab und ist beliebig erweiterbar. Zusammen mit dem ebenfalls
            von uns entwickelten <a href="https://bubblecms.io">BubbleCMS</a>{' '}
            können bereits simple Chatbots realisiert, und deren Inhalte
            komfortabel gepflegt werden.
          </p>
          <p>
            Diese Sammlung an Basisfunktionen bieten wir nun als unser
            <b> Starterkit </b> an.
          </p>
          <img src={toolbox} alt="toolbox" css="float:right;width:50%" />
          <h2>Funktionen</h2>
          <FieldSet>
            {basicFeatures.map(f => (
              <Feature key={f}>
                <label htmlFor={f}>
                  <FeatureInput checked readOnly type="checkbox" name={f} />
                  &nbsp; {f}
                </label>
              </Feature>
            ))}
          </FieldSet>
          <h2>Preis</h2>
          <p>CHF 19.- pro Monat</p>
          <h2 css="margin-top:20px">Klingt interessant?</h2>
          <ButtonList justify="left">
            <Button
              as={Link}
              to="https://bubblecms.io/de/sign-up/"
              css="margin: 0.5em"
            >
              Jetzt gratis ausprobieren
            </Button>
            <Button as={Link} to="/preisrechner" css="margin: 0.5em">
              Bestellen
            </Button>
          </ButtonList>
          <h2>Gewünschtes Feature nicht vorhanden?</h2>
          <p>
            Nichts ist unmöglich! Gerne offerieren wir Ihnen erweiterte
            Funktionen.
          </p>
          <Button as={Link} to="/preisrechner" css="margin: 0.5em">
            Offerte anfordern
          </Button>
        </Container>
      </Section>
    </Layout>
  )
}

export default Starterkit
