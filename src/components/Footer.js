import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Container from './Container'

const Wrapper = styled.footer`
  grid-area: Footer;
`

const Footer = () => (
  <Wrapper>
    <Container>
      <h2>Footer</h2>
    </Container>
  </Wrapper>
)

export default Footer
