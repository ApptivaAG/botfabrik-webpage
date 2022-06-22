import { graphql, PageProps } from 'gatsby'
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
  text-align: center;
`

const Header = ({ title }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
  </HeadArea>
)

const FaqTemplate = ({ content, contentComponent, metaData }) => {
  const PostContent = contentComponent || Content
  const { title, description, permalink } = metaData

  const Description = styled.p`
    font-weight: 600;
  `
  return (
    <Layout callToActionDark>
      <Seo title={title} description={description} slug={permalink} />
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

const FAQ = ({ data }: PageProps<Queries.FaqTemplateQuery>) => {
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

export default FAQ

export const faqQuery = graphql`
  query FaqTemplate($id: String!) {
    faq: markdownRemark(id: { eq: $id }) {
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
