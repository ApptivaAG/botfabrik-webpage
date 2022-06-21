import { graphql } from 'gatsby'
import BlogLinkItem from '../components/BlogLinkItem'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { Container, Section } from '../styles'

const BlogPage = ({ data, location }) => {
  const { blogs } = data
  return (
    <Layout calltoActionDark>
      <Seo
        title="Blog"
        description="Im Botfabrik Blog teilen wir unsere Erfahrung rund um Chatbots."
        slug={location.pathname}
      />
      <Section>
        <Container>
          <h1>Botfabrik Blog</h1>
          <p>Im Botfabrik Blog teilen wir unsere Erfahrung rund um Chatbots.</p>
          {blogs.nodes.map(({ excerpt, frontmatter }) => (
            <BlogLinkItem
              key={excerpt}
              frontmatter={frontmatter}
              excerpt={excerpt}
            />
          ))}
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogPage

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
