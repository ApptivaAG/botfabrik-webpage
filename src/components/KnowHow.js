import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Section, Container } from '../styles'

const Grid = styled(Container)`
  padding: 0;
  div {
    display: grid;
    grid: 'title' 'pit' 'content';
    @media (min-width: 1024px) {
      grid: ${props =>
          props.left
            ? '"pit title title" "pit content content" auto "pit . button" 1fr'
            : '"title title pit" "content content pit" auto ". button pit" 1fr'} / 16em 1fr 16em;
    }
    gap: 1em 2em;
    margin: 2em 0;
    padding: 1.5em;
    background: ${p => p.theme.lightBg};
  }
`

const query = graphql`
  query ListAllKnowHows {
    list: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { regex: "/know-how/" } } }
      sort: { order: ASC, fields: frontmatter___id }
    ) {
      nodes {
        frontmatter {
          image {
            publicURL
          }
          title
          permalink
          summary
        }
      }
    }
  }
`

const KnowHowItem = (
  { frontmatter: { title, summary, image, permalink } },
  index
) => {
  return (
    <Grid left={index % 2} key={permalink}>
      <div>
        <h3 css="grid-area: title; margin: 0;">{title}</h3>
        <img
          css="grid-area: pit; max-width: 16em; max-height: 8em;"
          data-src={image.publicURL}
          className="lozad"
          loading="lazy"
          alt={title}
          width="300"
          height="160"
        />
        <p css="grid-area: content; margin: 0;">{summary}</p>
      </div>
    </Grid>
  )
}

const KnowHow = () => {
  const { list } = useStaticQuery(query)
  return (
    <Section>
      <Container>
        <h2>Unsere Kompetenzen</h2>
      </Container>

      {list.nodes.map(KnowHowItem)}
      <Container>
        <h3 css="margin-top: 3em;">Weitere Kompetenzen</h3>
        <ul>
          <li>Konzeption von Chatbots</li>
          <li>
            Optimierung von Intents und Entities (Absichten und Entitäten)
          </li>
          <li>Chatbot-Architektur und -Entwicklung</li>
          <li>Verwaltung von Chatbot-Inhalten</li>
          <li>hohe Usability und ansprechendes Design</li>
        </ul>
      </Container>
    </Section>
  )
}

export default KnowHow
