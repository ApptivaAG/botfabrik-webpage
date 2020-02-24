/* eslint-disable no-alert */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import Layout from '../components/Layout'
import BlogLinkItem from '../components/BlogLinkItem'
import { Container, Section, Cols, Button } from '../styles'
import Seo from '../components/Seo'
import checkmark from '../img/checkmark.svg'

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

const PriceAlternative = styled.p`
  text-align: center;
  font-size: 0.8em;
  margin: 0em 0em 2em;
`

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

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0 1em 0;
  outline: none;
  color: #777777;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: border-box;
`
// eslint-disable-next-line react/jsx-props-no-spreading
const Textarea = props => <Input as="textarea" {...props} />

const BASE_PRICE = 199

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
    displayName: 'Benutzerdefinierte Aktionen',
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
    name: 'teams',
    displayName: 'Microsoft Teams Client',
    price: 50,
  },
  {
    name: 'slack',
    displayName: 'Slack Client',
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

const blogPostQuery = graphql`
  query BlogPostByTitle {
    blog: markdownRemark(
      frontmatter: { title: { eq: "Was kostet ein Chatbot?" } }
    ) {
      excerpt(pruneLength: 140)
      id
      frontmatter {
        title
        permalink
        date(formatString: "DD.MM.YYYY")
        image {
          childImageSharp {
            fixed(width: 260) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

class Preisrechner extends React.Component {
  constructor(props) {
    super(props)
    const initialState = { price: BASE_PRICE, name: '', email: '', message: '' }
    additionalFeatures.forEach(f => {
      initialState[f.name] = false
    })
    this.state = initialState
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  /* Here’s the juicy bit for posting the form submission */
  handleSubmit(e) {
    const { email, name } = this.state
    if (email === '' || name === '') {
      // eslint-disable-next-line no-undef
      alert('Ups, ein zwingendes Feld ist noch nicht ausgefüllt.')
      // eslint-disable-next-line react/destructuring-assignment
    } else if (this.state['bot-field'] === undefined) {
      const body = encode({
        'form-name': 'contact-preisrechner',
        subject: 'Kontaktformular Preisrechner botfabrik.ch',
        ...this.state,
      })
      // eslint-disable-next-line no-undef
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then(() => {
          // eslint-disable-next-line no-undef
          alert(
            'Danke! Wir haben ihre Nachricht erhalten und melden uns so bald wie möglich bei ihnen.'
          )
          this.setState({ name: '', email: '', message: '' })
        })
        .catch(error => {
          console.error('Error', error)
          // eslint-disable-next-line no-undef
          alert(
            `Leider hat dies nicht funktioniert. Entschuldigen sie die Umstände. Wenn Sie uns auf info@apptiva.ch ein Email schicken, melden wir uns sofort bei ihnen.`
          )
        })
    }
    e.preventDefault()
  }

  render() {
    const { price, name, email, message } = this.state

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
            <form
              name="contact-preisrechner"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <Cols minWidth="20em">
                <div>
                  <h2>Basispaket</h2>
                  <FieldSet>
                    {basicFeatures.map(f => (
                      <Feature key={f}>
                        <label htmlFor={f}>
                          <FeatureInput
                            checked
                            readOnly
                            type="checkbox"
                            name={f}
                          />
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
                          <FeatureInput
                            // eslint-disable-next-line react/destructuring-assignment
                            checked={this.state[f.name]}
                            id={f.name}
                            type="checkbox"
                            name={f.name}
                            onClick={this.handleClick}
                            onChange={() => {}}
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
              <PriceAlternative>
                Sind sie eher an einem fixen Projektpreis interessiert?
                <br />
                Kein Problem, melden sie sich einfach via Kontaktformular bei
                uns.
              </PriceAlternative>
              <br />
              <br />
              <p hidden>
                <label htmlFor="bot-field">
                  Nicht ausfüllen:{' '}
                  <input
                    type="text"
                    name="bot-field"
                    onChange={this.handleChange}
                  />
                </label>
                <input type="text" name="subject" />
              </p>
              <p>
                <label htmlFor="name">
                  Ihr Name (Pflichtfeld){' '}
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label htmlFor="email">
                  Ihre Email-Adresse (Pflichtfeld){' '}
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label htmlFor="message">
                  Ihre Nachricht{' '}
                  <Textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p css="text-align: right;">
                <Button type="submit">Jetzt Offerte einholen</Button>
              </p>
            </form>
            <br />
            <br />
            <StaticQuery
              query={blogPostQuery}
              render={data => (
                <BlogLinkItem
                  frontmatter={data.blog.frontmatter}
                  excerpt={data.blog.excerpt}
                />
              )}
            />
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default Preisrechner
