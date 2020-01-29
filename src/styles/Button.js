import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  padding: 0.6em 1.4em 0.7em;
  border: 0 none;
  border-radius: 0.1em;
  font-weight: 500;
  color: white;
  background-color: ${props => props.theme.primary};
  transition: transform 30ms ease-out;
  transform: translate3d(0, 0, 0);
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transform: translate3d(0, -1px, 0);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 380px) {
    width: 100%;
    text-align: center;
  }
`
export default Button
