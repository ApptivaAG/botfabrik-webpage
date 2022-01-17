import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import KnowHow from '../components/KnowHow'
import LinkItem from '../components/LinkItem'
import Testimonials from '../components/Testimonials'

import { Section, Container, Button, Cols, DeemphasizedTitle } from '../styles'

import pit from '../img/pit.svg'
import arrowBottom from '../img/arrowBottom.svg'
import arrowLeft from '../img/arrowLeft.svg'

import ringier from '../img/ringier-logo-3.svg'
import roche from '../img/roche.svg'
import allianz from '../img/allianz-cinema-logo.png'
import post from '../img/post-2.svg'
import energie360 from '../img/energie360.svg'
import maxonMotor from '../img/maxon-motor-2.svg'
import suva from '../img/suva.svg'
import luks from '../img/luzerner-kantonsspital.svg'
import kaio from '../img/kanton-bern.svg'
import stzhfd from '../img/stadt-zuerich-finanzdepartement.svg'
import akso from '../img/akso.svg'

const IndexLayout = styled(Layout)`
  h2 {
    font-size: 2em;
  }
`

const Grid = styled(Container)`
  grid: 'value-prop' 'services' 'pit' 'c2a';
  display: grid;
  gap: 2em;
  @media (min-width: 640px) and (max-width: 1380px) {
    grid: 'value-prop value-prop' 'pit services' 'c2a c2a' / 190px 320px;
  }
  @media (min-width: 1381px) {
    grid: 'value-prop pit services' auto 'c2a c2a c2a' / 1fr 190px 320px;
  }
`

const ValueProposition = styled.p`
  font-size: 1.5em;
  font-weight: 200;
  line-height: 1.1;
  margin-top: 0;
  b {
    font-weight: 600;
  }
`

const SpeechBubble = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1em;
  font-weight: 200;
  padding: 1em 1em;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.darkBg};
  margin-left: 1em;

  b {
    font-weight: 600;
  }

  @media (min-width: 641px) {
    ::after {
      display: block;
      position: absolute;
      content: url('${arrowLeft}');
      left: -1.3em;
      top: 1.4em;
      height: 3em;
      width: 1.4em;
    }
  }
  @media (max-width: 640px) {
    margin-left: 0;
    ::after {
      display: block;
      position: absolute;
      content: url('${arrowBottom}');
      right: 2em;
      bottom: -2em;
      height: 2em;
      width: 3em;
    }
  }
`

const List = styled.ul`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  li {
    margin-bottom: 0.1em;
  }
`

const Customers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 -0.5rem;

  & > img {
    flex: 0 1 8rem;
    width: 100%;
    margin: 1em 2em;
    max-width: 8em;
  }
`

const ButtonList = styled.div`
  grid-area: c2a;
  justify-self: center;
  margin: 0 0.5em 0 -0.5em;
`

const Pit = styled.div`
  grid-area: pit;
  img {
    max-width: 300px;
  }
  @media (max-width: 640px) {
    text-align: right;
    img {
      max-width: 150px;
    }
  }
`

const IndexPage = ({ data }) => (
  <IndexLayout>
    <Seo title="Passgenaue Chatbot-Lösungen" />
    <Section css="@media (min-width: 1380px) {margin-top: 2em;}">
      <Grid>
        <div css="grid-area: value-prop">
          <h1 css="font-size: 3em; line-height: 0.4em; margin-top: 0.1em;">
            Botfabrik <br />
            <small css="font-size: 0.32em; font-weight: 200;">
              Passgenaue Chatbot-Lösungen
            </small>
          </h1>
          <ValueProposition>
            Sorgen sie für echte <b>Entlastung</b> mit integrierten, passgenauen{' '}
            <b>Chatbots</b>, die ihre Anwender begeistern.
          </ValueProposition>
        </div>
        <Pit>
          <img src={pit} alt="Pit" width="190" height="277" />
        </Pit>
        <div css="grid-area: services">
          <SpeechBubble left>
            Wir unterstützen sie bei ihrem <b>Chatbot-Projekt</b> hinsichtlich
            <List>
              <li>Strategie</li>
              <li>Konzept und Inhalte</li>
              <li>Entwicklung</li>
              <li>Integration</li>
              <li>Training und Pflege</li>
              <li>Betrieb</li>
            </List>
          </SpeechBubble>
        </div>
        <ButtonList>
          <Button as={Link} to="/dienstleistungen/" css="margin: 0.5em">
            Zu unseren Dienstleistungen
          </Button>
          <Button as={Link} to="/preisrechner/" css="margin: 0.5em">
            Zur Chatbot Preisgestaltung
          </Button>
        </ButtonList>
      </Grid>
    </Section>
    <Section dark>
      <Container>
        <DeemphasizedTitle>Auswahl unserer Kunden</DeemphasizedTitle>
        <Customers>
          <img
            className="lozad"
            data-src={ringier}
            loading="lazy"
            alt="Ringier Logo"
            width="160"
            height="50"
          />
          <img
            className="lozad"
            data-src={roche}
            loading="lazy"
            alt="Berufsbildung von F. Hoffmann-La Roche AG"
            width="160"
            height="50"
          />
          <img
            className="lozad"
            data-src={allianz}
            loading="lazy"
            alt="Allianz Cinema Logo"
            width="160"
            height="50"
          />
          <img
            className="lozad"
            data-src={energie360}
            loading="lazy"
            alt="Energie 360°"
            width="160"
            height="50"
          />
          <img
            className="lozad"
            data-src={maxonMotor}
            loading="lazy"
            alt="maxon motor"
            width="160"
            height="50"
          />
          <img
            className="lozad"
            data-src={post}
            loading="lazy"
            alt="Die Post"
            width="160"
            height="50"
          />
          <img
            className="lozad"
            css="height: 1.2em;"
            data-src={suva}
            loading="lazy"
            alt="Suva"
            width="160"
            height="50"
          />
          <img
            className="lozad"
            css="height: 2em;"
            data-src={luks}
            loading="lazy"
            alt="Luzerner Kantonsspital"
            height="24"
            width="160"
          />
          <img
            className="lozad"
            css="height: 4em;"
            data-src={kaio}
            loading="lazy"
            alt="Amt für Informatik und Organisation des Kantons Bern (KAIO)"
            height="50"
            width="160"
          />
          <img
            className="lozad"
            css="height: 4em;"
            data-src={stzhfd}
            loading="lazy"
            alt="Stadt Zürich Finanzdepartement"
            height="60"
            width="160"
          />
          <img
            className="lozad"
            css="height: 4em;"
            data-src={akso}
            loading="lazy"
            alt="Ausgleichskasse Solothurn"
            height="80"
            width="160"
          />
        </Customers>
        <DeemphasizedTitle css="margin-top: 3em;">
          Testimonials
        </DeemphasizedTitle>

        <Testimonials />
      </Container>
    </Section>
    <KnowHow />
    <Section dark>
      <Container>
        <h2>Blog</h2>
        <Cols css="margin-bottom: 2em;">
          {data.blogs.edges.map(({ node }) => (
            <LinkItem
              key={node.frontmatter.permalink}
              to={`${node.frontmatter.permalink}/`}
              css={`
                background: ${p => p.theme.white};
                border: 1px solid ${p => p.theme.primary};
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              `}
            >
              {node.frontmatter.image && (
                <GatsbyImage
                  image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                  alt="Vorschau"
                />
              )}
              {node.frontmatter.title}
            </LinkItem>
          ))}
        </Cols>
        <Button as={Link} to="/blog/">
          Zum Botfabrik Blog
        </Button>
      </Container>
    </Section>
  </IndexLayout>
)

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage {
    blogs: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          frontmatter {
            title
            permalink
            date(formatString: "DD.MM.YYYY")
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
