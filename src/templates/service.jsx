import { graphql } from 'gatsby'
import styled from 'styled-components'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, Section } from '../styles'

const HeadArea = styled.div``

const HeaderTitle = styled.h1`
  font-size: 2rem;
  @media (min-width: 640px) {
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

const ServiceTemplate = ({ content, contentComponent, metaData }) => {
  const PostContent = contentComponent || Content
  const { title, subtitle, permalink } = metaData

  const Description = styled.p`
    font-weight: 600;
  `
  return (
    <Layout calltoActionDark>
      <Seo title={title} description={subtitle} slug={permalink} />
      <Section>
        <Container>
          <Header title={title} />
          <Description>{subtitle}</Description>
          <PostContent content={content} />
        </Container>
      </Section>
    </Layout>
  )
}

const Service = ({ data }) => {
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

export default Service

export const serviceQuery = graphql`
  query ServiceByID($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        subtitle
        author
        date(formatString: "DD.MM.YYYY")
        isoDate: date(formatString: "DD-MM-YYYY")
        permalink
      }
    }
  }
`
