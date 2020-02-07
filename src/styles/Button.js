import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 0.6em 1.4em 0.7em;
  border: 0 none;
  border-radius: 0.1em;
  font-weight: 500;
  color: white;
  background-color: ${props => props.theme.primary};
  transition: transform 100ms ease-out;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 380px) {
    width: 100%;
    text-align: center;
  }
`
export default Button
