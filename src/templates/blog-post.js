import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Seo from '../components/Seo'
import { Section, Container } from '../styles'
import { item } from '../pages/blog'

const HeadArea = styled.div``

const HeaderTitle = styled.h1`
  font-size: 2rem;
  @media (min-width: 400px) {
    font-size: 4rem;
  }
  font-weight: 800;
  line-height: 1;
  text-align: center;
  hyphens: auto;
`
const Header = ({ title, image }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
    {image && (
      <Img style={{ width: '100%' }} sizes={image.childImageSharp.fluid} />
    )}
  </HeadArea>
)

const Div = styled.div`
  margin-top: 2rem;
  color: #0009;
  font-size: 0.8rem;
`
const Author = styled.span`
  font-weight: 400;
  text-transform: capitalize;
`
const Date = styled.span`
  font-weight: 400;
`
const Published = ({ author, date }) => {
  return (
    <Div>
      Publiziert von <Author>{author.replace('-', ' ')}</Author> am{' '}
      <Date>{date}</Date>
    </Div>
  )
}

const LayoutNavigation = styled.div``

const Navigation = ({ next, prev }) => {
  return (
    <LayoutNavigation>
      {prev && item(prev.frontmatter, prev.excerpt)}
      {next && item(next.frontmatter, next.excerpt)}
    </LayoutNavigation>
  )
}

export const BlogPostTemplate = ({
  content,
  contentComponent,
  metaData,
  navigation,
}) => {
  const PostContent = contentComponent || Content
  const {
    title,
    image,
    description,
    author,
    date,
    isoDate,
    permalink,
  } = metaData

  const Description = styled.p`
    font-weight: 600;
  `
  return (
    <Layout calltoActionDark>
      <Seo
        title={title}
        description={description}
        image={image && image.childImageSharp.resize.src}
        author={author}
        date={isoDate}
        slug={permalink}
        isBlogPost
      />
      <Section>
        <Container>
          <Header title={title} image={image} />
          <Description>{description}</Description>
          {author && <Published author={author} date={date} />}
          <PostContent content={content} />
          <Navigation next={navigation.next} prev={navigation.prev} />
        </Container>
      </Section>
    </Layout>
  )
}

export default ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  post.frontmatter.excerpt = post.excerpt

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      metaData={post.frontmatter}
      navigation={pageContext}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        description
        author
        date(formatString: "DD.MM.YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
        permalink
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            resize(width: 1200, height: 630, cropFocus: ENTROPY) {
              src
            }
          }
        }
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
