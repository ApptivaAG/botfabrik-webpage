import styled from 'styled-components'

type ButtonList = { readonly justify?: 'left' | 'center' | 'right' }
const ButtonList = styled.p<ButtonList>`
  text-align: right;
  display: flex;
  justify-content: ${({ justify = 'center' }) => justify};
  & > * {
    margin-left: 5px;
    margin-right: 5px;
  }
`

export default ButtonList
