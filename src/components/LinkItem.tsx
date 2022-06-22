import { Link } from 'gatsby'
import { ReactNode } from 'react'
import styled from 'styled-components'

type Item = { readonly align?: string }
const Item = styled.div<Item>`
  box-sizing: border-box;
  height: 100%;
  padding: 1.5em 1em;
  background: ${(p) => p.theme.darkBg};
  color: black;
  text-align: ${(p) => (p.align ? p.align : 'center')};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
  h2,
  h3,
  p {
    margin: 0;
  }
`

type Props = {
  to: string
  children: ReactNode
  className?: string
  align?: string
}
const LinkItem = ({ to, children, className, align }: Props) => (
  <Link to={to}>
    <Item className={className} align={align}>
      {children}
    </Item>
  </Link>
)

export default LinkItem
