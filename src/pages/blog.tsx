import { graphql, PageProps } from 'gatsby'
import BlogLinkItem, { BlogLinkItemProps } from '../components/BlogLinkItem'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, Section } from '../styles'
import { mapBlogLinkItemData } from '../templates/blog-post'

const BlogPage = ({ data, location }: PageProps<Queries.BlogPageQuery>) => {
  const blogs = data.blogs.nodes.map(
    mapBlogLinkItemData
  ) as (BlogLinkItemProps & { update: string | null })[]
  return (
    <Layout callToActionDark>
      <Section>
        <Container>
          <h1>Botfabrik Blog</h1>
          <p>Im Botfabrik Blog teilen wir unsere Erfahrung rund um Chatbots.</p>
          {blogs.map((blogPost) => (
            <BlogLinkItem
              key={blogPost.excerpt}
              title={blogPost.title}
              excerpt={blogPost.excerpt}
              permalink={blogPost.permalink}
              date={blogPost.update ?? blogPost.date}
              image={blogPost.image}
            />
          ))}
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogPage

export const Head = ({ location }: PageProps) => {
  return (
    <Seo
      title="Blog"
      description="Im Botfabrik Blog teilen wir unsere Erfahrung rund um Chatbots."
      slug={location.pathname}
    />
  )
}

export const blogPageQuery = graphql`
  query BlogPage {
    blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      nodes {
        excerpt(pruneLength: 140)
        id
        frontmatter {
          title
          permalink
          date(formatString: "DD.MM.YYYY")
          update(formatString: "DD.MM.YYYY")
          image {
            childImageSharp {
              gatsbyImageData(width: 260, layout: FIXED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
