import React from 'react'
import { graphql } from 'gatsby'
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

const Header = ({ title }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
  </HeadArea>
)

export const FaqTemplate = ({ content, contentComponent, metaData }) => {
  const PostContent = contentComponent || Content
  const { title, seo } = metaData

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
          <Header title={title} />
          <Description>{seo}</Description>
          <PostContent content={content} />
        </Container>
      </Section>
    </Layout>
  )
}

export default ({ data }) => {
  const { faq } = data

  faq.frontmatter.excerpt = faq.excerpt

  return (
    <FaqTemplate
      content={faq.html}
      contentComponent={HTMLContent}
      metaData={faq.frontmatter}
    />
  )
}

export const faqQuery = graphql`
  query FaqByID($id: String!) {
    faq: markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        seo
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
