import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Seo from '../components/Seo'
import { Section, Container } from '../styles'

const HeadArea = styled.div``

const HeaderTitle = styled.h1`
  font-size: 2rem;
  @media (min-width: 400px) {
    font-size: 4rem;
  }
  font-weight: 800;
  line-height: 1;
  text-align: center;
`

const Header = ({ title, image }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
    {image && <img css="width: 100%; height: 20em;" src={image.publicURL} />}
  </HeadArea>
)

export const KnowHowTemplate = ({ content, contentComponent, metaData }) => {
  const PostContent = contentComponent || Content
  const { title, image, summary } = metaData

  const Description = styled.p`
    font-weight: 400;
  `
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Seo />
      <Section>
        <Container>
          <Header title={title} image={image} />
          <Description>{summary}</Description>
          <PostContent content={content} />
        </Container>
      </Section>
    </Layout>
  )
}

export default ({ data }) => {
  const { post } = data

  post.frontmatter.excerpt = post.excerpt

  return (
    <KnowHowTemplate
      content={post.html}
      contentComponent={HTMLContent}
      metaData={post.frontmatter}
    />
  )
}

export const pageQuery = graphql`
  query KnowHowByID($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        permalink
        image {
          publicURL
        }
        summary
      }
    }
  }
`

// {
//   childImageSharp {
//     sizes {
//       ...GatsbyImageSharpSizes
//     }
//   }
// }
