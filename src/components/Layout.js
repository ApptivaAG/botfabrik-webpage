import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'
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
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Fragment>
    )}
  />
)
