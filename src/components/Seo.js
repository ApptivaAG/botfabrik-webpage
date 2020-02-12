import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

const query = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        description
        url
        logo
        twitter
        fbAppId
      }
    }
  }
`
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
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
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
        },
      ]
    : schemaOrgJSONLD
}

const Seo = ({
  title: titleCurrent,
  description: descriptionCurrent,
  image: imageCurrent,
  url: urlCurrent,
  author,
  date,
  isBlogPost,
}) => {
  const {
    title: titleDefault,
    description: descriptionDefault,
    url: urlDefault,
    logo: imageDefault,
    twitter,
    fbAppId,
  } = useStaticQuery(query).site.siteMetadata

  const title = titleCurrent || titleDefault
  const description = descriptionCurrent || descriptionDefault
  const url = urlCurrent || urlDefault
  const image = urlDefault + (imageCurrent || imageDefault)

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isBlogPost,
    title,
    titleDefault,
    image,
    imageDefault,
    description,
    author,
    date,
  })

  return (
    <Helmet htmlAttributes={{ lang: 'de-CH' }}>
      <title>{title}</title>
      {/* General tags */}
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content={fbAppId} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default Seo
