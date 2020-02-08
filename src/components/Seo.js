import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

export default () => (
  <StaticQuery
    query={graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `}
    render={({ site: { siteMetadata: data } }) => (
      <Helmet htmlAttributes={{ lang: 'de-CH' }}>
        {/* General tags */}
        <meta name="description" content={data.title} />
        <meta name="image" content={data.url} />
      </Helmet>
    )}
  />
)
