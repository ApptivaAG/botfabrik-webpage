import { graphql, useStaticQuery } from 'gatsby'
import { composeUrl } from '../util'
import { ReactNode } from 'react'

const query = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        logo
        twitter
        fbAppId
      }
    }
  }
`
type JSONSchema = {
  isBlogPost: boolean
  url: string | undefined
  urlDefault: string
  title: string | undefined
  titleDefault: string
  image: string | undefined
  imageDefault: string
  description: string
  author: string | undefined
  date: string | undefined
  update: string | undefined
}
const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  urlDefault,
  title,
  titleDefault,
  image,
  imageDefault,
  description,
  author,
  date,
  update,
}: JSONSchema) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title || titleDefault,
      alternateName: titleDefault,
    },
  ]

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: titleDefault,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            url: urlDefault,
            name: titleDefault,
            logo: {
              '@type': 'ImageObject',
              url: imageDefault,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': urlDefault,
          },
          datePublished: date,
          dateModified: update,
        },
      ]
    : schemaOrgJSONLD
}
type BlogPost = {
  title: string
  description: string | null
  image: string | undefined
  slug: string
  author: string
  date: string
  update: string | null
  isBlogPost: true
  children?: React.ReactNode
}
type Page = {
  title: string
  description?: string
  image?: string
  slug: string
  author?: undefined
  date?: undefined
  isBlogPost?: false
  children?: React.ReactNode
}
type Props = (BlogPost | Page) & { children?: ReactNode }

const Seo = (props: Props) => {
  const {
    title: titleDefault,
    description: descriptionDefault,
    siteUrl: urlDefault,
    logo: imageDefault,
    twitter,
    fbAppId,
  } = useStaticQuery<Queries.SeoQueryQuery>(query)!.site!.siteMetadata!

  const title = `${props.title} | ${titleDefault}` || titleDefault!
  const description = props.description || descriptionDefault!
  const url = composeUrl(urlDefault!, props.slug)
  const image = urlDefault! + (props.image || imageDefault!)

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost: props.isBlogPost ?? false,
    title,
    titleDefault: titleDefault!,
    image,
    imageDefault: imageDefault!,
    description,
    url,
    urlDefault: urlDefault!,
    author: props.author,
    date: props.date,
    update: props.isBlogPost ? props.update ?? undefined : undefined,
  })

  return (
    <>
      <title>{title}</title>

      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link
        rel="canonical"
        href={url}
        data-baseprotocol="https:"
        data-basehost="botfabrik.ch"
      />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {props.isBlogPost ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content={fbAppId!} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter!} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {props.children}
    </>
  )
}

export default Seo
