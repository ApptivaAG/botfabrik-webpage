import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import { GlobalStyle, theme } from '../styles'

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
