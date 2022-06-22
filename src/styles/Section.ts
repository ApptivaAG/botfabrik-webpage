import styled, { css } from 'styled-components'

type Section = { readonly dark?: boolean }
const Section = styled.section<Section>`
  position: relative;
  padding-top: 2em;
  padding-bottom: 4em;

  ${(props) =>
    props.dark &&
    css`
      background-color: ${props.theme.lightBg};
    `};
`
export default Section
