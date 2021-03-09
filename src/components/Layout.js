import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { ThemeProvider, css } from 'styled-components'
import 'normalize.css/normalize.css'

import Header from './Header'
import Footer from './Footer'
import { GlobalStyle, theme } from '../styles'
import '../styles/fonts.css'
import CallToAction from './CallToAction'

const Grid = styled.div`
  display: grid;
  grid: auto 1fr auto / auto;
  min-height: 100%;
`
const Content = styled.main`
  display: block;
  ${p =>
    p.callToAction === false &&
    css`
      section:last-child {
        padding-bottom: 6em;
      }
    `}
`

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        about
      }
    }
  }
`

export default ({
  children,
  className,
  callToAction = true,
  calltoActionDark,
}) => {
  const { about, title } = useStaticQuery(query).site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Helmet titleTemplate={`%s | ${title}`} defaultTitle={title}>
          <link
            rel="prefetch"
            href="https://www.googletagmanager.com/gtag/js?id=UA-66015649-4"
          />
        </Helmet>
        <Header siteTitle={title} />
        <Content className={className} callToAction={callToAction}>
          {children}
        </Content>
        {callToAction && <CallToAction dark={calltoActionDark} />}
        <Footer about={about} />
      </Grid>
    </ThemeProvider>
  )
}
