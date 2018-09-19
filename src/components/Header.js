import React from 'react'
import { Link } from 'gatsby'
import Container from './Container'
import styled from '../../node_modules/styled-components'

const Wrapper = styled.header`
  grid-area: Header;
`
const Logo = styled.div`
  font-size: 0.8em;
  margin: 0.5em 0;
  * {
    margin: 0;
  }
  h2 {
    font-size: 0.8em;
  }
  a {
    color: #666;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Logo>
        <Link to="/">
          <h1>Botfabrik</h1>
          <h2>Chatbots von A-Z</h2>
        </Link>
      </Logo>
    </Container>
  </Wrapper>
)

export default Header
