import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Header from './Header'
import Footer from './Footer'
import fontFace from './font-face'

const theme = {
  primary: '#008FD7',
  white: 'white',
}

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${styledNormalize}
  ${fontFace}

  html, body, #___gatsby {
    height: 100%;
  }
  #___gatsby > div {
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
  grid: auto 1fr auto / auto;
  min-height: 100%;
`
const Content = styled.div``

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            url
            about
          }
        }
      }
    `}
    render={data => {
      const { about, title, url } = data.site.siteMetadata
      return (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Helmet
              titleTemplate={`%s | ${title} | ${url}`}
              defaultTitle={title}
            />
            <Header siteTitle={title} />
            <Content>{children}</Content>
            <Footer about={about} />
          </Wrapper>
        </ThemeProvider>
      )
    }}
  />
)
