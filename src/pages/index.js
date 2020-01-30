import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import pit from '../img/pit.svg'
import bubbleArrow from '../img/bubblearrow.svg'
import arrowLeft from '../img/arrowLeft.svg'

import ringier from '../img/ringier-logo-3.svg'
import sanagate from '../img/sanagate.svg'
import allianz from '../img/allianz-cinema-logo.png'
import Testimonials from '../components/Testimonials'
import { Section, Container, Button } from '../styles'
import KnowHow from '../components/KnowHow'

const Grid = styled(Container)`
  grid: 'value-prop value-prop' 'pit services' / 190px 320px;
  display: grid;
  gap: 2em;
  @media (min-width: 1240px) {
    grid: 'value-prop pit services' auto / 1fr 190px 320px;
  }
`

const SpeachBubble = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  padding: 1em 1em;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};

  ${p =>
    p.left
      ? css`
        margin-left: 1em;
        
        ::after {
          display: block;
          position: absolute;
          content: url("${arrowLeft}");
          left: -1.3em;
          top: 1.4em;
          height: 3em;
          width: 1.4em;
        }
      `
      : css`
        ::after {
          display: block;
          position: absolute;
          content: url("${bubbleArrow}");
          right: 2em;
          bottom: -2em;
          height: 2em;
          width: 3em;
        }
      `}
`

const List = styled.ul`
  line-height: 1.4;
`
const CustomerTitle = styled.h1`
  font-size: 1.7em;
  color: #cbcbcb;
  text-align: center;
`
const Customers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 -0.5rem;

  & > img {
    flex: 1 1 6rem;
    width: 100%;
    margin: 1em 2em;
    text-align: center;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo />

    <Section>
      <Grid>
        <div css="grid-area: value-prop">
          <h2 css="font-weight: 200; margin-top: 0">
            Sorge für echte Entlastung mit passgenauen{' '}
            <b css="font-weight: 600">Chatbots</b> in dein Unternehmen
            integriert.
          </h2>
          <Button type="button">Mehr erfahren</Button>
        </div>
        <div css="grid-area: pit">
          <img src={pit} alt="Pit" />
        </div>
        <div css="grid-area: services">
          <SpeachBubble left>
            Wir untersützen bei Chatbot
            <List>
              <li>Strategie</li>
              <li>Konzept und Inhalte</li>
              <li>Entwicklung </li>
              <li>Integration (tech & org) </li>
              <li>Training und Pflege</li>
              <li>Betrieb</li>
            </List>
          </SpeachBubble>
        </div>
      </Grid>
    </Section>
    <Section dark>
      <Container>
        <CustomerTitle>Auswahl unserer Kunden</CustomerTitle>
        <Customers>
          <img src={ringier} alt="Ringier Logo" />
          <img src={sanagate} alt="Sanagate Logo" />
          <img src={allianz} alt="Allianz Cinema Logo" />
        </Customers>
      </Container>
    </Section>
    <KnowHow />
    <Section>
      <Container>
        <h2>Leistungen</h2>
        Illu und Beschreibung pro Punkt
        <ul>
          <li>Strategie</li>
          <li>Konzept & Inhalte</li>
          <li>Implementierung</li>
          <li>Integration</li>
          <li>Training</li>
        </ul>
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>Technologien</h2>
        <h3>Messaging Plattformen</h3>
        <ul>
          <li>Web </li>
          <li>Facebook Messenger</li>
          <li>Skype</li>
          <li>Skype for Business</li>
          <li>Telegram</li>
          <li>Slack</li>
        </ul>
        <h3>Sprachverarbeitung</h3>
        <ul>
          <li>Dialogflow</li>
          <li>Wit.ai</li>
          <li>RASA</li>
          <li>LUIS</li>
        </ul>
      </Container>
    </Section>
    <Section dark>
      <Container>
        <h2>Testimonials</h2>
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>Blog</h2>
        <div>
          {data.blogs.edges.map(({ node }) => (
            <div>
              <Link
                key={node.frontmatter.permalink}
                to={node.frontmatter.permalink}
              >
                {node.frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
        <Button as={Link} to="blog">
          Zum Botfabrik Blog
        </Button>
      </Container>
    </Section>
    <Section>
      <Container>
        <h2>Chatbot-FAQ</h2>
        <div>
          {data.pages.nodes.map(({ frontmatter }) => (
            <div>
              <Link key={frontmatter.permalink} to={frontmatter.permalink}>
                {frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  </Layout>
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
                fixed(height: 150, width: 300) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
                # sqip(numberOfPrimitives: 8, blur: 6) {
                #   dataURI
                # }
              }
            }
          }
        }
      }
    }
    pages: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "page" } } }
    ) {
      nodes {
        excerpt(pruneLength: 140)
        id
        frontmatter {
          title
          permalink
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`
