import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

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

const Header = ({ title }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
  </HeadArea>
)

export const PageTemplate = ({ content, contentComponent, metaData }) => {
  const PostContent = contentComponent || Content
  const { title, description } = metaData

  const Description = styled.p`
    font-weight: 600;
  `
  return (
    <Layout calltoActionDark>
      <Seo title={title} description={description} />
      <Section>
        <Container>
          <Header title={title} />
          <Description>{description}</Description>
          <PostContent content={content} />
        </Container>
      </Section>
    </Layout>
  )
}

export default ({ data }) => {
  const { page } = data

  page.frontmatter.excerpt = page.excerpt

  return (
    <PageTemplate
      content={page.html}
      contentComponent={HTMLContent}
      metaData={page.frontmatter}
    />
  )
}

export const pageQuery = graphql`
  query PageByID($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        description
        author
        date(formatString: "DD.MM.YYYY")
        isoDate: date(formatString: "DD-MM-YYYY")
        permalink
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
