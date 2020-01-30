import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Section, Container, Button } from '../styles'

const Grid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid: 'title title title' ${props =>
        props.left
          ? '"pit content content" auto "pit . button" 1fr'
          : '"content content pit" auto ". button pit" 1fr'} / 10em 1fr 10em;
  }
  gap: 2em;
  margin: 2em 0;
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
    <Grid left={index % 2}>
      <h3 css="grid-area: title; margin: 0;">{title}</h3>
      <img
        css="grid-area: pit; max-width: 10em;"
        src={image.publicURL}
        alt={title}
      />
      <p css="grid-area: content; margin: 0;">{summary}</p>
      <Button
        as={Link}
        css="grid-area: button; justify-self: end; align-self: start;"
        to={permalink}
      >
        Mehr
      </Button>
    </Grid>
  )
}

const KnowHow = () => {
  const { list } = useStaticQuery(query)
  return (
    <Section>
      <Container>
        <h2>Unser Know How</h2>
        {list.nodes.map(KnowHowItem)}
      </Container>
    </Section>
  )
}

export default KnowHow
