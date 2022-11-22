import { Link, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled, { css } from 'styled-components'
import ButtonList from '../components/ButtonList'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import toolbox from '../img/bubble-chat-toolbox.svg'
import checkmark from '../img/checkmark.svg'
import { Button, Container, Section } from '../styles'

const basicFeatures = [
  'Einfache und übersichtliche Verwaltung von Inhalten',
  'Einsatz von KI (Künstliche Intelligenz)',
  'Einsatz von NLP (Natural Language Processing)',
  'Vordefinierte Smalltalk-Fähigkeiten',
  'Sprach- und Texteingabe',
  'Analytics und Chatbot KPIs',
  'Mitverfolgung von Konversationen',
  'Handover an Live-Chat',
  'Integration in Webseite',
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
          content: url('${checkmark}');
        `
      : css`
          width: 0.3em !important;
          height: 0.3em !important;
          outline: 2px solid #009fdc;
          box-shadow: none;
          font-size: 2em;
        `}
`

const ToolboxImage = styled.img`
  max-width: 300px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 20px;
  flex: 1;
`

const BubbleChatImageFigure = styled.figure`
  width: 100%;
  max-width: 36em;
  margin: 2em auto;
  text-align: center;

  .imageStyle {
    width: 100%;
    border: 1px solid #722ed1;
    border-radius: 0.3em;
    box-shadow: 0em 1em 4em 0em #0001;
  }
`

const BubbleChat = ({ location }: PageProps) => (
  <Layout callToAction={false}>
    <Section>
      <Container>
        <h1>Bubble Chat</h1>
        <p>
          Dank einer Vielzahl an Projekten konnten wir in den vergangenen Jahren
          eine Menge Erfahrungen bei der Entwicklung von Chatbots sammeln. Zu
          diesen Erfahrungen gehört auch ein Tooling, welches wir laufend
          verbessert haben. Aus einem Teil dieses Toolings ist inzwischen ein
          Produkt entstanden:&nbsp;
          <a href="https://www.bubble-chat.ch" rel="noreferrer" target="_blank">
            Bubble Chat
          </a>
        </p>
        <p>
          Mit Bubble Chat ist ein Chatbot im Handumdrehen aufgesetzt. Von Anfang
          an haben wir bei der Entwicklung der Benutzeroberfläche auf
          Einfachheit geachtet. Daher ist Bubble Chat simpel zu bedienen und
          setzt kein grosses technisches Fachwissen voraus. Sofort kann man sich
          mit Bubble Chat darauf konzentrieren, den Kundendialog effizienter zu
          gestalten.
        </p>

        <BubbleChatImageFigure>
          <StaticImage
            alt="Bubble Chat - Absichten verwalten"
            src="../img/bubble-chat-intents.png"
            className="imageStyle"
          />
          <figcaption>Bubble Chat - Absichten verwalten</figcaption>
        </BubbleChatImageFigure>

        <div css="display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center;">
          <div css="min-width:300px;margin-top:20px">
            <h2>Funktionen</h2>
            <FieldSet>
              {basicFeatures.map((f) => (
                <Feature key={f}>
                  <label htmlFor={f}>
                    <FeatureInput checked readOnly type="checkbox" name={f} />
                    &nbsp; {f}
                  </label>
                </Feature>
              ))}
            </FieldSet>
          </div>
          <ToolboxImage src={toolbox} />
        </div>

        <h2 css="margin-top:20px">Bubble Chat klingt interessant?</h2>
        <ButtonList justify="left">
          <Button as={Link} to="/bubblechat-bestellen/" css="margin: 0.5em">
            Jetzt bestellen
          </Button>
          <Button as={Link} to="/bubblechat-ausprobieren/" css="margin: 0.5em">
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
        <Button as={Link} to="/kontakt/">
          Jetzt Kontakt aufnehmen
        </Button>
      </Container>
    </Section>
  </Layout>
)

export default BubbleChat

export const Head = ({ location }: PageProps) => {
  return (
    <Seo
      title="Bubble Chat - Schnell und einfach zum eigenen Chatbot"
      description={`Bubble Chat erlaubt es, schnell und einfach 
        mit einem Chatbot häufig gestellte Fragen auf der eigenen Webseite zu beantworten.`}
      slug={location.pathname}
    />
  )
}
