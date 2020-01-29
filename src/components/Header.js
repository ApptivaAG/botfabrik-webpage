import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container as DefaultContainer } from '../styles'
import logo from '../img/logo.svg'

const HeaderElement = styled.header`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.lightBg};
  z-index: 90;
`

const Container = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    margin-right: 0.6em;
  }
`
const Navigation = styled.nav`
  margin-right: -1em;
  @media (max-width: 839px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    top: 0;
    bottom: 0;
    right: -20rem;
    padding: 1em 1em 1em 0;
    color: ${props => props.theme.white};
    background-color: ${p => p.theme.primary};
    transition: all 200ms ease 200ms;
  }
`
const MenuButton = styled.div`
  padding: 0.5em;
  margin-right: -0.5em;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.text};
  font-weight: 600;
  cursor: pointer;

  @media (min-width: 840px) {
    display: none;
  }

  &:active ~ ${Navigation}, &:focus ~ ${Navigation} {
    transform: translate3d(-20rem, 0px, 0px);
  }
`
const NavItemsLink = styled(Link).attrs(props => ({
  activeClassName: 'active',
}))`
  display: inline-block;
  font-size: 1.1em;
  font-weight: 500;
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 0.3em 0.5em;
  color: inherit;

  &.active {
    color: ${props => props.theme.lightPrimary};
  }

  @media (min-width: 840px) {
    &.active {
      color: ${props => props.theme.primary};
    }
  }

  transition: transform 30ms ease-out;

  &:hover {
    transform: translateY(-1px);
  }
`

const Header = () => (
  <HeaderElement>
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

      <MenuButton tabIndex="0">Menu</MenuButton>
      <Navigation>
        <NavItemsLink to="/dienstleistungen">Dienstleistungen</NavItemsLink>
        <NavItemsLink to="/die-botfabrik">Die Botfabrik</NavItemsLink>
        <NavItemsLink to="/blog">Blog</NavItemsLink>
        <NavItemsLink to="/kontakt">Kontakt</NavItemsLink>
      </Navigation>
    </Container>
  </HeaderElement>
)

export default Header
