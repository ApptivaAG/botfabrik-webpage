import styled from 'styled-components'

export default styled.p`
  text-align: right;
  display: flex;
  justify-content: ${({ justify = 'center' }) => justify};
  & > * {
    margin-left: 5px;
    margin-right: 5px;
  }
`
