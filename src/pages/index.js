import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import ContainerDefault from '../components/Container'
import Seo from '../components/Seo'
import Chatbot from '../components/Chatbot'

import bubbleArrow from '../img/bubblearrow.svg'

import ringier from '../img/ringier-logo-3.svg'
import sanagate from '../img/sanagate.svg'
import allianz from '../img/allianz-cinema-logo.png'

const Container = styled(ContainerDefault)`
  display: grid;
  grid-template:
    'Content'
    'Chatbot' 640px;
  @media (min-width: 800px) {
    grid-template: 'Content Chatbot' auto / 1fr 320px;
  }
`
const Thin = styled.span`
  font-weight: 200;
`
const Title = styled.h1`
  line-height: 0.9;
  margin: -0.2em 0 0 0;
`
const SpeachBubble = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1.5em;
  padding: 1em 1em;
  margin: 1em 0;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};

  ::after {
    display: block;
    position: absolute;
    content: url("${bubbleArrow}");
    right: 2em;
    bottom: -2em;
    height: 2em;
    width: 3em;
  }
`
const Section = styled.section`
  padding: 3em 0;
  background-color: ${p => (p.dark ? '#f8f8f8' : p.theme.white)};
`
const List = styled.ul`
  font-weight: 300;
  line-height: 1.4;
  font-size: 1.3em;
  margin-left: 0.6em;
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
      <Container>
        <Chatbot />
        <div>
          <SpeachBubble>
            <Title>
              <Thin>Individuelle</Thin> <br />
              Chatbots
              <br /> <Thin>von A-Z</Thin>
            </Title>
          </SpeachBubble>
          <List>
            <li>Strategie</li>
            <li>Konzept & Inhalte</li>
            <li>Implementierung</li>
            <li>Integration</li>
            <li>Training & Betrieb</li>
          </List>
          <button>Mehr erfahren</button>
        </div>
      </Container>
    </Section>
    <Section dark>
      <ContainerDefault>
        <CustomerTitle>Auswahl unserer Kunden</CustomerTitle>
        <Customers>
          <img src={ringier} alt="Ringier Logo" />
          <img src={sanagate} alt="Sanagate Logo" />
          <img src={allianz} alt="Allianz Cinema Logo" />
        </Customers>
      </ContainerDefault>
    </Section>
    <Section>
      <ContainerDefault>
        <h2>Leistungen</h2>
        Illu und Beschreibung pro Punkt
        <ul>
          <li>Strategie</li>
          <li>Konzept & Inhalte</li>
          <li>Implementierung</li>
          <li>Integration</li>
          <li>Training</li>
        </ul>
      </ContainerDefault>
    </Section>
    <Section dark>
      <ContainerDefault>
        <h2>Referenzen</h2>
      </ContainerDefault>
    </Section>
    <Section>
      <ContainerDefault>
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
      </ContainerDefault>
    </Section>
    <Section dark>
      <ContainerDefault>
        <h2>Testimonials</h2>
      </ContainerDefault>
    </Section>
    <Section>
      <ContainerDefault>
        <h2>Blog</h2>
        <div>
          {data.blogs.edges.map(({ node }) => (
            <Link key={node.frontmatter.path} to={node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          ))}
        </div>
      </ContainerDefault>
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
            path
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
            date(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  }
`
