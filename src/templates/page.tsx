// Layout needs to be on the top for the css order to be correct
import Layout from '../components/Layout'

import { graphql, PageProps } from 'gatsby'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
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
  text-align: center;
`

const Header = ({ title }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
  </HeadArea>
)

const PageTemplate = ({ content, contentComponent, metaData }) => {
  const PostContent = contentComponent || Content
  const { title, description } = metaData

  const Description = styled.p`
    font-weight: 600;
  `
  return (
    <Layout callToActionDark>
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

const Page = ({ data }: PageProps<Queries.PageTemplateQuery>) => {
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

export default Page

export const Head = ({ data }: PageProps<Queries.PageTemplateQuery>) => {
  const { title, description, permalink } = data.page?.frontmatter ?? {}
  return <Seo title={title} description={description} slug={permalink} />
}

export const pageQuery = graphql`
  query PageTemplate($id: String!) {
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
