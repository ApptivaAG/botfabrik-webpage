import React from 'react'
import { Link } from 'gatsby'
import Container from './Container'
import styled from '../../node_modules/styled-components'
import logo from '../img/logo.svg'

const Wrapper = styled.header`
  position: sticky;
  top: 0;

  background-color: #f9f9f9;
  z-index: 90;
`
const Logo = styled.div`
  font-size: 0.8em;
  font-weight: 800;
  margin: 1em 0;
  * {
    margin: 0;
    line-height: 1;
  }
  h2 {
    font-size: 1em;
    font-weight: 200;
  }
  a {
    display: flex;
    align-items: center;
    color: ${p => p.theme.text};
    text-decoration: none;
  }
  img {
    height: 4em;
    width: 4em;
    margin-right: .6em;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Logo" />
          <div>
            <h1>Botfabrik</h1>
            <h2>Chatbots von A-Z</h2>
          </div>
        </Link>
      </Logo>
    </Container>
  </Wrapper>
)

export default Header
