import React from 'react'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import KnowHow from '../components/KnowHow'
import LinkItem from '../components/LinkItem'

import { Section, Container, Button, Cols } from '../styles'

import pit from '../img/pit.svg'
import bubbleArrow from '../img/bubblearrow.svg'
import arrowLeft from '../img/arrowLeft.svg'

import ringier from '../img/ringier-logo-3.svg'
import sanagate from '../img/sanagate.svg'
import allianz from '../img/allianz-cinema-logo.png'
import post from '../img/post-2.svg'
import energie360 from '../img/energie360.svg'
import maxonMotor from '../img/maxon-motor-2.svg'
import suva from '../img/suva.svg'

const IndexLayout = styled(Layout)`
  h2 {
    font-size: 2em;
  }
`

const Grid = styled(Container)`
  grid: 'value-prop' 'pit' 'services' 'c2a';
  display: grid;
  gap: 2em;
  @media (min-width: 640px) and (max-width: 1240px) {
    grid: 'value-prop value-prop' 'pit services' 'c2a c2a' / 190px 320px;
  }
  @media (min-width: 1240px) {
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

const SpeachBubble = styled.div`
  position: relative;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  padding: 1em 1em;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.darkBg};

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
      `};
`

const List = styled.ul``
const CustomerTitle = styled.h1`
  font-size: 1.7em;
  color: #cbcbcb;
  text-align: center;
  margin-bottom: 1em;
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

const IndexPage = ({ data }) => (
  <IndexLayout>
    <Seo title="Home" />

    <Section css="margin-top: 4em;">
      <Grid>
        <div css="grid-area: value-prop">
          <ValueProposition>
            Sorge sie für echte <b>Entlastung</b> mit integrierten, passgenauen{' '}
            <b>Chatbots</b>, die ihre Anwender begeistern.
          </ValueProposition>
        </div>
        <div css="grid-area: pit">
          <img css="max-width: 300px;" src={pit} alt="Pit" />
        </div>
        <div css="grid-area: services">
          <SpeachBubble left>
            Wir untersützen bei Chatbot...
            <List>
              <li>Strategie</li>
              <li>Konzept und Inhalte</li>
              <li>Entwicklung</li>
              <li>Integration (tech & org)</li>
              <li>Training und Pflege</li>
              <li>Betrieb</li>
            </List>
          </SpeachBubble>
        </div>
        <div css="grid-area: c2a; justify-self: center; margin-top: 2em;">
          <Button as={Link} to="/dienstleistungen" css="margin: 1em em">
            Zu unseren Dienstleistungen
          </Button>
          <Button as={Link} to="/preisrechner" css="margin: 1em 1em">
            Zum Chatbot Preisrechner
          </Button>
        </div>
      </Grid>
    </Section>
    <Section dark>
      <Container>
        <CustomerTitle>Auswahl unserer Kunden</CustomerTitle>
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
            data-src={sanagate}
            loading="lazy"
            alt="Sanagate Logo"
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
        </Customers>
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
              to={node.frontmatter.permalink}
              css={`
                background: ${p => p.theme.white};
                border: 1px solid ${p => p.theme.primary};
              `}
            >
              {node.frontmatter.title}
            </LinkItem>
          ))}
        </Cols>
        <Button as={Link} to="blog">
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
  }
`
