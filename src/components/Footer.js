import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Center } from '../styles'

const Wrapper = styled.footer`
  font-size: 0.8em;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};

  h2 {
    margin: 2em 0 1em;
  }
`
const Grid = styled.div`
  display: grid;
  gap: 0 4em;
  @media (min-width: 1024px) {
    grid: auto / auto-flow 1fr;
  }
`
const CopyWrite = styled(Center)`
  font-size: 0.8em;
  margin: 2em 0;
`

const Footer = ({ about }) => (
  <Wrapper>
    <Container>
      <Grid>
        <div>
          <h2>Über die Botfabrik</h2>
          <p>{about}</p>
        </div>
        <div>
          <h2>Kontakt</h2>
          <p>
            Botfabrik <br />
            by Apptiva AG
          </p>
          <p>
            Neuenkirchstrasse 19 <br />
            6203 Sempach Station
          </p>
          <p>+41 79 407 00 83</p>
          <p>mensch@botfabrik.ch</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <p>Apptiva AG</p>
          <p>Twitter</p>
        </div>
      </Grid>
      <CopyWrite>
        <p>
          <span role="img" aria-label="copywrite">
            ©
          </span>{' '}
          2018 Botfabrik - eine Initiative der Apptiva AG
        </p>
      </CopyWrite>
    </Container>
  </Wrapper>
)

export default Footer
