// Layout needs to be on the top for the css order to be correct
import Layout from '../components/Layout'

import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FC } from 'react'
import styled from 'styled-components'
import BlogLinkItem, { BlogLinkItemProps } from '../components/BlogLinkItem'
import Content, { HTMLContent } from '../components/Content'
import Seo from '../components/Seo'
import { Container, Section } from '../styles'

const HeadArea = styled.div``

const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
  font-weight: 800;
  line-height: 0.9em;
  text-align: center;
  hyphens: auto;
`
const Header = ({
  title,
  image,
}: {
  title: string
  image: IGatsbyImageData | null
}) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
    {image && <GatsbyImage alt={title} loading="eager" image={image} />}
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
const Published = ({
  author,
  date,
  update,
}: {
  author: string
  date: string
  update: string | null
}) => (
  <Div>
    Publiziert von <Author>{author.replace('-', ' ')}</Author> am{' '}
    <Date>{date}</Date>
    {update && (
      <span>
        , Update am <Date>{update}</Date>
      </span>
    )}
  </Div>
)

const LayoutNavigation = styled.div``

const Navigation = ({
  next,
  prev,
}: {
  next: BlogLinkItemProps | null
  prev: BlogLinkItemProps | null
}) => (
  <LayoutNavigation>
    {prev && (
      <BlogLinkItem
        title={prev.title}
        permalink={prev.permalink}
        date={prev.date}
        image={prev.image}
        excerpt={prev.excerpt}
      />
    )}
    {next && (
      <BlogLinkItem
        title={next.title}
        permalink={next.permalink}
        date={next.date}
        image={next.image}
        excerpt={next.excerpt}
      />
    )}
  </LayoutNavigation>
)

const Description = styled.p`
  margin-bottom: 0.4em;
  font-weight: 600;
`
type BlogPostTemplate = {
  post: {
    content: string
    title: string
    image: IGatsbyImageData | null
    imageUrl: string | null
    description: string | null
    author: string
    date: string
    isoDate: string
    update: string | null
    isoUpdate: string | null
    permalink: string
  }
  renderComponent: FC<{ content: string; className?: string }>
  prev: BlogLinkItemProps | null
  next: BlogLinkItemProps | null
}
const BlogPostTemplate = ({
  post,
  renderComponent,
  prev,
  next,
}: BlogPostTemplate) => {
  const PostContent = renderComponent || Content
  const { title, image, description, author, date, update, content } = post

  return (
    <Layout callToActionDark>
      <Section>
        <Container>
          <Header title={title} image={image} />
          <Description>{description}</Description>
          {author && <Published author={author} date={date} update={update} />}
          <PostContent content={content} />
          <Navigation next={next} prev={prev} />
        </Container>
      </Section>
    </Layout>
  )
}

const BlogPost = ({ data }: PageProps<Queries.BlogPostTemplateQuery>) => {
  return (
    <BlogPostTemplate
      post={mapBlogPostData(data.markdownRemark)}
      renderComponent={HTMLContent}
      prev={mapBlogLinkItemData(data.prev)}
      next={mapBlogLinkItemData(data.next)}
    />
  )
}
export const mapBlogLinkItemData = (
  blogLink: Queries.BlogPostTemplateQuery['next']
) => {
  if (blogLink == null) {
    return null
  }
  if (
    blogLink.excerpt == null ||
    blogLink.frontmatter?.title == null ||
    blogLink.frontmatter.permalink == null ||
    blogLink.frontmatter.date == null
  ) {
    throw Error(`Messing data in next/prev blog post: ${blogLink?.id}`)
  }
  const blogLinkData: BlogLinkItemProps = {
    title: blogLink.frontmatter?.title,
    excerpt: blogLink.excerpt,
    permalink: blogLink.frontmatter?.permalink,
    date: blogLink.frontmatter?.date,
    image: blogLink.frontmatter?.image?.childImageSharp?.gatsbyImageData,
  }
  return blogLinkData
}
export const mapBlogPostData = (
  blogPost: Queries.BlogPostTemplateQuery['markdownRemark']
) => {
  if (
    blogPost == null ||
    blogPost.html == null ||
    blogPost.frontmatter == null ||
    blogPost.frontmatter.title == null ||
    blogPost.frontmatter.permalink == null ||
    blogPost.frontmatter.date == null ||
    blogPost.frontmatter.isoDate == null ||
    blogPost.frontmatter.author == null
  ) {
    throw Error(
      `Missing data in blog post: ${blogPost?.id as string}. \n${JSON.stringify(
        blogPost,
        null,
        2
      )}`
    )
  }
  const blogPostTemplateData: BlogPostTemplate['post'] = {
    content: blogPost.html,
    permalink: blogPost.frontmatter.permalink,
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.description,
    date: blogPost.frontmatter.date,
    isoDate: blogPost.frontmatter.isoDate,
    update: blogPost.frontmatter.update,
    isoUpdate: blogPost.frontmatter.isoUpdate,
    author: blogPost.frontmatter.author,
    image: blogPost.frontmatter.image?.childImageSharp?.gatsbyImageData ?? null,
    imageUrl: blogPost.frontmatter.image?.childImageSharp?.resize?.src ?? null,
  }
  return blogPostTemplateData
}

export default BlogPost

export const Head = ({ data }: PageProps<Queries.BlogPostTemplateQuery>) => {
  const post = mapBlogPostData(data.markdownRemark)

  return (
    <Seo
      title={post.title}
      description={post.description}
      image={post.imageUrl ?? undefined}
      author={post.author}
      date={post.isoDate}
      update={post.isoUpdate}
      slug={post.permalink}
      isBlogPost
    />
  )
}

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!, $prevId: String, $nextId: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        description
        author
        date(formatString: "DD.MM.YYYY")
        update(formatString: "DD.MM.YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
        isoUpdate: update(formatString: "YYYY-MM-DD")
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
    next: markdownRemark(id: { eq: $nextId }) {
      id
      excerpt(pruneLength: 140)
      frontmatter {
        title
        permalink
        date(formatString: "DD.MM.YYYY")
        image {
          childImageSharp {
            gatsbyImageData(width: 240, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    }
    prev: markdownRemark(id: { eq: $prevId }) {
      id
      excerpt(pruneLength: 140)
      frontmatter {
        title
        permalink
        date(formatString: "DD.MM.YYYY")
        image {
          childImageSharp {
            gatsbyImageData(width: 240, placeholder: BLURRED, layout: FIXED)
          }
        }
      }
    }
  }
`
