import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: Chatbot;

  iframe {
    width: 100%;
    height: 100%;
  }
`

export default () => (
  <Wrapper>
    <iframe
      title="Chatbot"
      src="https://pit.botfabrik.ch/webclient"
      frameBorder="0"
    />
  </Wrapper>
)
