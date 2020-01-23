import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Header from './Header'
import Footer from './Footer'
import fontFace from './font-face'

const theme = {
  primary: '#00A0DD',
  white: 'white',
  text: '#2e2e2e',
}

const GlobalStyle = createGlobalStyle`
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
    color: ${theme.text};
    font-family: Gentona, sans-serif;
    font-weight: 200;
  }

`

const Grid = styled.div`
  display: grid;
  grid: auto 1fr auto / auto;
  min-height: 100%;
`
const Content = styled.main`
  display: block;
`

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        url
        about
      }
    }
  }
`

export default ({ children }) => {
  const data = useStaticQuery(query)
  const { about, title, url } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Helmet titleTemplate={`%s | ${title} | ${url}`} defaultTitle={title} />
        <Header siteTitle={title} />
        <Content>{children}</Content>
        <Footer about={about} />
      </Grid>
    </ThemeProvider>
  )
}
