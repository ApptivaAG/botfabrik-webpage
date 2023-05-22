import { graphql, Link, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import KnowHow from '../components/KnowHow'
import Layout from '../components/Layout'
import LinkItem from '../components/LinkItem'
import Seo from '../components/Seo'
import Testimonials from '../components/Testimonials'

import { Button, Cols, Container, DeemphasizedTitle, Section } from '../styles'

import arrowBottom from '../img/arrowBottom.svg'
import arrowLeft from '../img/arrowLeft.svg'
import pit from '../img/pit.svg'
import Customers from '../components/Customers'

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
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.darkBg};
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

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => (
  <IndexLayout>
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
            Sorgen Sie für echte <b>Entlastung</b> mit integrierten, passgenauen{' '}
            <b>Chatbots</b>, die Ihre Anwender begeistern.
          </ValueProposition>
        </div>
        <Pit>
          <img src={pit} alt="Pit" width="190" height="277" />
        </Pit>
        <div css="grid-area: services">
          <SpeechBubble>
            Wir unterstützen Sie bei Ihrem <b>Chatbot-Projekt</b> hinsichtlich
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
        <Customers />

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
              key={node.frontmatter?.permalink}
              to={`${node.frontmatter?.permalink}/`}
              css={`
                background: ${(p: any) => p.theme.white};
                border: 1px solid ${(p: any) => p.theme.primary};
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              `}
            >
              {node.frontmatter?.image?.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                  image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                  alt="Vorschau"
                />
              )}
              {node.frontmatter?.title}
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

export const Head = () => {
  return <Seo title="Passgenaue Chatbot-Lösungen" slug="/" />
}

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
