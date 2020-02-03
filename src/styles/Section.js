import styled, { css } from 'styled-components'

const Section = styled.section`
  position: relative;
  padding-top: 3em;
  padding-bottom: 4em;

  ${props =>
    props.dark &&
    css`
      background-color: ${props.theme.lightBg};
    `};
`
export default Section
