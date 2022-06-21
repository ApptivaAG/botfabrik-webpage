/* eslint-disable no-alert */
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import fetch from 'unfetch'

import BlogLinkItem from '../components/BlogLinkItem'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Button, Cols, Container, Section } from '../styles'

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.9em;
  border: 1px solid rgb(0, 159, 220);
  padding: 0.5em;
`

const ItemDescription = styled.p`
  color: rgb(0, 159, 220);
  font-weight: 500;
`

const ItemFeatures = styled.ul`
  text-align: left;
  font-size: 0.9em;
  padding-inline-start: 30px;
  padding-bottom: 1em;
`

const ItemPrice = styled.div`
  margin-top: auto;
  padding: 0.5em;
  font-weight: 500;
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

const BASE_PRICE = 19

const lightWeightFeatures = [
  'Integriert in ihre Webseite',
  'Angepasst an ihr Corporate Design',
  'Statische Inhalte (Frage / Antwort)',
  'Trainiert mit Smalltalk-Fähigkeiten',
  'Konversation mit Unterstützung von künstlicher Intelligenz',
  'Workshop zur Erarbeitung von Inhalten',
]

const middleWeightFeatures = [
  'Aufbauend auf Leichtgewicht',
  'Dynamische Inhalte',
  'Entscheidungsbäume',
  'Integration Messaging Apps (z.B. Facebook Messenger, WhatsApp)',
  'Live Chat mit Kundendienst (z.B. via Slack, Microsoft Teams, Skype for Business)',
  'Aktionen ausführen (z.B. Tickets erfassen, E-Mails versenden)',
  'Unterstützung durch unsere Chatbot Architekten',
]

const heavyWeightFeatures = [
  'Aufbauend auf Mittelgewicht',
  'Schnittstellen zu ihren Systemen (CRM, ERP)',
  'Benutzer identifizieren; benutzerspezifische Aktionen ausführen',
  'Installation im eigenen Rechencenter',
  'Integration in proprietäre Chatsysteme (z.B. eigene Mobile-App)',
  'Mehrsprachigkeit',
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
            gatsbyImageData(width: 260, layout: FIXED)
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
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
        subject: 'Kontaktformular Preisgestaltung botfabrik.ch',
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
          // eslint-disable-next-line no-console
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
    const { name, email, message } = this.state

    return (
      <Layout callToAction={false}>
        <Seo
          title="Preisrechner"
          description="Wie viel kostet ein Bot?"
          slug="preisrechner"
        />
        <Section>
          <Container>
            <h1>Preisgestaltung</h1>
            <p>
              Wir behandeln jeden Chatbot als Unikat. Dies machen wir, weil wir
              glauben, dass jeder Chatbot optimal an seinen Auftraggeber
              angepasst sein muss, damit er seine Aufgabe gut erfüllen kann. Wir
              geben ihrem Chatbot eine Persönlichkeit, die zu ihrem
              einzigartigen Unternehmen passt. Die Individualität der Bots hat
              einen direkten Einfluss auf den Preis. Um ihnen eine Idee über die
              Preisgestaltung zu vermitteln, haben wir hier drei Beispiele
              zusammengestellt.
            </p>
            <br />
            <br />
            <form
              name="contact-preisrechner"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <Cols minWidth="240px">
                <ItemBox>
                  <h2>Leichtgewicht</h2>
                  <ItemDescription>
                    Häufig gestellte Fragen automatisiert beantworten
                  </ItemDescription>
                  <ItemFeatures>
                    {lightWeightFeatures.map(f => (
                      <li key={f}>{f}</li>
                    ))}
                  </ItemFeatures>
                  <ItemPrice>
                    <p css="margin:0; opacity: 0.5;">Initialkosten</p>
                    ab CHF 2&apos;900
                  </ItemPrice>
                </ItemBox>
                <ItemBox>
                  <h2>Mittelgewicht</h2>
                  <ItemDescription>
                    Komplexe Abläufe abarbeiten und Übergabe an Kundendienst
                  </ItemDescription>
                  <ItemFeatures>
                    {middleWeightFeatures.map(f => (
                      <li key={f}>{f}</li>
                    ))}
                  </ItemFeatures>
                  <ItemPrice>
                    <p css="margin:0; opacity: 0.5;">Initialkosten</p>
                    ab CHF 19&apos;900
                  </ItemPrice>
                </ItemBox>
                <ItemBox>
                  <h2>Schwergewicht</h2>
                  <ItemDescription>
                    Nahtlose Integration in ihre Geschäftsprozesse
                  </ItemDescription>
                  <ItemFeatures>
                    {heavyWeightFeatures.map(f => (
                      <li key={f}>{f}</li>
                    ))}
                  </ItemFeatures>
                  <ItemPrice>
                    <p css="margin:0; opacity: 0.5;">Initialkosten</p>ab CHF
                    39&apos;900
                  </ItemPrice>
                </ItemBox>
              </Cols>
              <br />
              <br />
              <p>
                Egal wie gross ihre Ambitionen sind, wir begleiten sie durch das
                gesamte Chatbot Projekt. Angefangen bei der Inhaltsaufbereitung
                und -strukturierung, über die Entwicklung und Integration in
                ihre Umgebung, bis hin zum Training und Betrieb des Chatbots.
                Gerne stellen wir ein Angebot zusammen, welches zu ihren
                Bedürfnissen passt.
              </p>
              <br />
              <br />
              <h3>Kontaktieren sie uns</h3>
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
                <Button type="submit">Botfabrik kontaktieren</Button>
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
