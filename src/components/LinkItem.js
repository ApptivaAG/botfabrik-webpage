import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Item = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1em;
  background: ${p => p.theme.lightBg};
  color: black;
  text-align: ${p => (p.align ? p.align : 'center')};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`

const LinkItem = ({ to, children, className, align }) => (
  <Link to={to}>
    <Item className={className} align={align}>
      {children}
    </Item>
  </Link>
)

export default LinkItem
