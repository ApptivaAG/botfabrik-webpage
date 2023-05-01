import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Container, Section } from '../styles'

type Grid = { readonly left?: boolean }
const Grid = styled(Container)<Grid>`
  div {
    display: grid;
    grid: 'title' 'pit' 'content';
    @media (min-width: 1024px) {
      grid: ${(props) =>
          props.left
            ? '"pit title title" "pit content content" auto "pit . button" 1fr'
            : '"title title pit" "content content pit" auto ". button pit" 1fr'} / 14em 1fr 14em;
    }
    gap: 1em 2em;
    margin: 2em 0;
    padding: 1.5em;
    background: ${(p) => p.theme.lightBg};
  }
`

const KnowHowCard = styled.div`
  color: black;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
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
  { frontmatter }: Queries.ListAllKnowHowsQuery['list']['nodes'][number],
  index: number
) => {
  const { title, summary, image, permalink } = frontmatter ?? {}
  return (
    <Grid left={Boolean(index % 2)} key={permalink}>
      <Link
        key={frontmatter?.permalink}
        to={`../dienstleistungen/${frontmatter?.permalink}/`}
      >
        <KnowHowCard>
          <h3 css="grid-area: title; margin: 0;">{title}</h3>
          <img
            css="grid-area: pit; max-width: 16em; max-height: 8em;"
            data-src={image?.publicURL}
            className="lozad"
            loading="lazy"
            alt={title ?? 'Keine Beschreibung'}
            width="240"
            height="140"
          />
          <p css="grid-area: content; margin: 0;">{summary}</p>
        </KnowHowCard>
      </Link>
    </Grid>
  )
}

const KnowHow = () => {
  const { list } = useStaticQuery<Queries.ListAllKnowHowsQuery>(query)
  return (
    <Section>
      <Container>
        <h2>Unsere Kompetenzen</h2>
      </Container>
      {list.nodes.map(KnowHowItem)}
    </Section>
  )
}

export default KnowHow
