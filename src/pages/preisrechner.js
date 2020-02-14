import React from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import { Container, Section, Cols } from '../styles'
import Seo from '../components/Seo'
import ContactFormPreisrechner from '../components/ContactFormPreisrechner'
import checkmark from '../img/checkmark.svg'

const Price = styled.p`
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;
  margin: 1em 0em 0em 0em;
`
const PriceInfo = styled.p`
  text-align: center;
  margin: 0em;
`

const FieldSet = styled.fieldset`
  border: none;
  padding-block-start: 0em;
`

const Feature = styled.p`
  margin-block-start: 0em;
  margin-block-end: 0.5em;
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  ${({ checked }) =>
    checked
      ? checked &&
        css`
     {
        content: url("${checkmark}");
     }`
      : css`
           {
            width: 0.3em !important;
            height: 0.3em !important;
            outline: 2px solid #009fdc;
            box-shadow: none;
            font-size: 2em;
          }
        `}
`

const BASE_PRICE = 199

const BUBBLE_LINK = (
  <a target="_blank" rel="noopener noreferrer" href="https://bubblecms.io">
    Bubble CMS
  </a>
)

const basicFeatures = [
  'WebClient (Avatars & Farben anpassbar)',
  'Integration in die bestehende Webseite',
  <label htmlFor="bubbleCMS">
    {BUBBLE_LINK} für die Bearbeitung der Inhalte
  </label>,
  'NLP mit Google Dialogflow',
  'Absichtserkennung durch künstliche Intelligenz',
  'Smalltalk Skills',
  'Spracheingabe',
  'Hosting in der Schweiz bei Swisscom',
  'Analytics',
]

const additionalFeatures = [
  {
    name: 'language',
    displayName: 'Mehrsprachigkeit',
    price: 30,
  },
  {
    name: 'live-agent',
    displayName: 'Integration Live-Agents',
    price: 150,
  },
  {
    name: 'custom-actions',
    displayName: 'Ausführung benutzerdefinierter Aktionen',
    price: 80,
  },
  {
    name: 'facebook',
    displayName: 'Facebook Client',
    price: 50,
  },

  {
    name: 'whatsapp',
    displayName: 'WhatsApp Client',
    price: 50,
  },
  {
    name: 'swiss-data',
    displayName: 'Daten in der Schweiz',
    price: 100,
  },
  {
    name: 'on-premises',
    displayName: 'On-Premises Installation',
    price: 250,
  },
]

class Preisrechner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { price: BASE_PRICE }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { price } = this.state
    this.setState({ [e.target.name]: e.target.checked })
    additionalFeatures
      .filter(f => f.name === e.target.name)
      .map(f =>
        e.target.checked
          ? this.setState({ price: price + f.price })
          : this.setState({ price: price - f.price })
      )
  }

  render() {
    const { price } = this.state
    return (
      <Layout callToAction={false}>
        <Seo title="Preisrechner" description="Wie viel kostet ein Bot?" />

        <Section>
          <Container>
            <h1>Preisrechner</h1>
            <p>
              Hier können sie herausfinden, wie viel ein Chatbot mit den von
              ihnen gewünschten Funktionen pro Monat kostet.
            </p>
            <Cols minWidth="20em">
              <div>
                <h2>Basispaket</h2>
                <FieldSet>
                  {basicFeatures.map(f => (
                    <Feature key={f}>
                      <label htmlFor={f}>
                        <Input checked readOnly type="checkbox" name={f} />
                        &nbsp; {f}
                      </label>
                    </Feature>
                  ))}
                </FieldSet>
              </div>
              <div>
                <h2>Zusätzliche Funktionen</h2>
                <FieldSet>
                  {additionalFeatures.map(f => (
                    <Feature key={f.name}>
                      <label htmlFor={f.name}>
                        <Input
                          // eslint-disable-next-line react/destructuring-assignment
                          checked={this.state[f.name]}
                          id={f.name}
                          type="checkbox"
                          name={f.name}
                          onClick={this.handleClick}
                        />
                        &nbsp; {f.displayName}
                      </label>
                    </Feature>
                  ))}
                </FieldSet>
              </div>
            </Cols>
            <Price>CHF {price}</Price>
            <PriceInfo>pro Monat</PriceInfo>
            <br />
            <br />
            <ContactFormPreisrechner />
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default Preisrechner
