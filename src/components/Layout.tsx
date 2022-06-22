import { graphql, useStaticQuery } from 'gatsby'
import 'normalize.css/normalize.css'
import { ReactNode } from 'react'
import Helmet from 'react-helmet'
import styled, { css, ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../styles'
import '../styles/fonts.css'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Header from './Header'

const Grid = styled.div`
  display: grid;
  grid: auto 1fr auto / auto;
  min-height: 100%;
`
type Content = { readonly callToAction?: boolean }
const Content = styled.main<Content>`
  display: block;
  ${(p) =>
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
type Props = {
  children: ReactNode
  className?: string
  callToAction?: boolean
  callToActionDark?: boolean
}
const Layout = ({
  children,
  className,
  callToAction = true,
  callToActionDark = false,
}: Props) => {
  const { about, title } =
    useStaticQuery<Queries.LayoutQueryQuery>(query)!.site!.siteMetadata!

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Grid>
        <Helmet titleTemplate={`%s | ${title}`} defaultTitle={title!}>
          <link
            rel="prefetch"
            href="https://www.googletagmanager.com/gtag/js?id=UA-66015649-4"
          />
        </Helmet>
        <Header />
        <Content className={className} callToAction={callToAction}>
          {children}
        </Content>
        {callToAction && <CallToAction dark={callToActionDark} />}
        <Footer about={about!} />
      </Grid>
    </ThemeProvider>
  )
}
export default Layout
