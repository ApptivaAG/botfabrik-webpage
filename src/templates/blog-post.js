import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import BlogLinkItem from '../components/BlogLinkItem'
import Content, { HTMLContent } from '../components/Content'
import Seo from '../components/Seo'
import { Section, Container } from '../styles'

const HeadArea = styled.div``

const HeaderTitle = styled.h1`
  font-size: 2rem;
  @media (min-width: 640px) {
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
      <GatsbyImage
        loading="eager"
        image={image.childImageSharp.gatsbyImageData}
      />
    )}
  </HeadArea>
)

const Div = styled.div`
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
const Published = ({ author, date }) => (
  <Div>
    Publiziert von <Author>{author.replace('-', ' ')}</Author> am{' '}
    <Date>{date}</Date>
  </Div>
)

const LayoutNavigation = styled.div``

const Navigation = ({ next, prev }) => (
  <LayoutNavigation>
    {prev && (
      <BlogLinkItem frontmatter={prev.frontmatter} excerpt={prev.excerpt} />
    )}
    {next && (
      <BlogLinkItem frontmatter={next.frontmatter} excerpt={next.excerpt} />
    )}
  </LayoutNavigation>
)

const Description = styled.p`
  margin-bottom: 0.4em;
  font-weight: 600;
`

const BlogPostTemplate = ({
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

const BlogPost = ({ data, pageContext }) => {
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

export default BlogPost

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
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 960
            )
            resize(width: 1200, height: 630, cropFocus: ENTROPY) {
              src
            }
          }
        }
      }
    }
  }
`
