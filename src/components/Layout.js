import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Header from '../components/Header'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${styledNormalize}

  h1 {
    color: red;
  }
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title} | ${
            data.site.siteMetadata.url
          }`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Fragment>
    )}
  />
)
