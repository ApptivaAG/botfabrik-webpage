import React from 'react'
import { Link } from 'gatsby'
import Container from './Container'

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </header>
)

export default Header
