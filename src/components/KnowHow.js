import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const query = graphql`
  query ListAllKnowHows {
    list: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { regex: "/know-how/" } } }
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
const KnowHowItem = ({ frontmatter: { title, summary, image, permalink } }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <img src={image.publicURL} alt={title} />
      <Link to={permalink}>Mehr</Link>
    </div>
  )
}

const KnowHow = () => {
  const { list } = useStaticQuery(query)
  return (
    <>
      <h2>Unser Know How</h2>
      {list.nodes.map(KnowHowItem)}
    </>
  )
}

export default KnowHow
