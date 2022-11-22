import { graphql, useStaticQuery } from 'gatsby'
import { ReactNode } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import CallToAction from './CallToAction'
import Footer from './Footer'
import Header from './Header'

import 'normalize.css/normalize.css'
import '../styles/fonts.css'

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

export const Head = () => {
  const { title } =
    useStaticQuery<Queries.LayoutQueryQuery>(query)!.site!.siteMetadata!
  return (
    <>
      <title>{title}</title>
    </>
  )
}
