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
  'Integration in ihre Webseite',
  <label htmlFor="bubbleCMS">Bearbeitung der Inhalte mit {BUBBLE_LINK}</label>,
  'Einsatz von KI (Künstliche Intelligenz)',
  'Einsatz von NLP (Natural Language Processing)',
  'Trainiert mit Smalltalk-Fähigkeiten',
  'Sprach- und Texteingabe',
  'Analytics und Chatbot KPIs',
  'Flexibel erweiterbar',
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
            Durch die zahlreichen Chatbots, die wir inzwischen entwickelt haben,
            ist ein Grundgerüst entstanden, das wir oft als Basis für neue
            Chatbots verwenden. Es deckt die wesentlichen Funktionen eines
            Chatbots ab und ist beliebig erweiterbar.
          </p>
          <p>
            Einen Teil dieser Basisfunktionen bieten wir als Starterkit an.
            Dieses öffnet ihnen den Weg in die Chatbot Welt. Mit dem Starterkit
            lassen sich z.B. häufig gestellte Fragen auf einfache Art und Weise
            beantworten.
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

          <h2 css="margin-top:20px">Klingt interessant?</h2>
          <p>
            Sie erhalten das Starterkit zum unschlagbaren Preis von{' '}
            <b css="font-size:1.2em">CHF 19.- pro Monat.</b>
          </p>
          <ButtonList justify="left">
            <Button as={Link} to="/starterkit-bestellen" css="margin: 0.5em">
              Jetzt bestellen
            </Button>
            <Button as={Link} to="/starterkit-ausprobieren" css="margin: 0.5em">
              Jetzt gratis ausprobieren
            </Button>
          </ButtonList>
          <br />
          <br />
        </Container>
      </Section>
      <Section css="padding-bottom: 6em;" dark>
        <Container>
          <h2>Haben sie Fragen?</h2>
          <p>Gerne beraten wir sie rund um das Thema Chatbot-Entwicklung.</p>
          <Button as={Link} to="/kontakt">
            Jetzt Kontakt aufnehmen
          </Button>
        </Container>
      </Section>
    </Layout>
  )
}

export default Starterkit
