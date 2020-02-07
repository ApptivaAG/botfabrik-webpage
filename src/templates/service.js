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
`

const Header = ({ title }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
  </HeadArea>
)

export const ServiceTemplate = ({ content, contentComponent, metaData }) => {
  const PostContent = contentComponent || Content
  const { title, seo } = metaData

  const Description = styled.p`
    font-weight: 600;
  `
  return (
    <Layout calltoActionDark>
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
  const { service } = data

  service.frontmatter.excerpt = service.excerpt

  return (
    <ServiceTemplate
      content={service.html}
      contentComponent={HTMLContent}
      metaData={service.frontmatter}
    />
  )
}

export const serviceQuery = graphql`
  query ServiceByID($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
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
