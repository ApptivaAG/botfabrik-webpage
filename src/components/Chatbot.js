import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: Chatbot;
  border: 2px solid #ccc;
  border-radius: 2em;
  padding: 2em 0.8em 3em;
  background-color: #eee;
  box-shadow: 4px 10px 40px -7px #ddd;

  iframe {
    border: 1px solid #ccc;
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
