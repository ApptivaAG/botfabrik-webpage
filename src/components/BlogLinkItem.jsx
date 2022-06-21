import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import LinkItemDefault from './LinkItem'

const LinkItem = styled(LinkItemDefault)`
  display: grid;
  gap: 1em 3em;
  margin-bottom: 1em;
  grid: 'title' 'excerpt' 'image' 'date';
  @media (min-width: 768px) {
    grid: 'title image' 'excerpt image' 1fr 'date image';
  }
  h2,
  p {
    margin: 0;
  }
`

const BlogLinkItem = ({ frontmatter, excerpt }) => (
  <LinkItem
    to={`${frontmatter.permalink}/`}
    key={frontmatter.permalink}
    align="left"
  >
    <h2
      css="grid-area: title"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: frontmatter.title }}
    />
    {frontmatter.image && (
      <GatsbyImage
        image={frontmatter.image.childImageSharp.gatsbyImageData}
        css="grid-area: image; justify-self: center;"
      />
    )}
    <p css="grid-area: excerpt">{excerpt}</p>
    <p
      css={`
        grid-area: date;
        @media (max-width: 768px) {
          justify-self: right;
        }
      `}
    >
      <small>{frontmatter.date}</small>
    </p>
  </LinkItem>
)

export default BlogLinkItem
