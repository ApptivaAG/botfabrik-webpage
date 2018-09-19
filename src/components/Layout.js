import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Header from './Header'
import fontFace from './font-face'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${styledNormalize}
  ${fontFace}

  html, body, #___gatsby {
    height: 100%;
  }

  html {
    font-size: 20px;
    font-family: Gentona, sans-serif;
    font-weight: 200;
  }

`

const Wrapper = styled.div`
  display: grid;
  grid-template:
    'Header'
    'Content' 1fr
    'Footer';

  height: 100%;
`
const Content = styled.div`
  grid-area: Content;
  overflow: auto;
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
      <Wrapper>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title} | ${
            data.site.siteMetadata.url
          }`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
      </Wrapper>
    )}
  />
)
