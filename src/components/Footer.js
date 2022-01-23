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

  a {
    color: ${p => p.theme.white};
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
const ListLinks = styled.ul`
  padding-left: 0;
  list-style-type: none;
  li {
    margin-bottom: 1.6em;
    @media (min-width: 720px) {
      margin-bottom: 0.8em;
    }
  }
  hr {
    border: none;
    border-top: 1px solid #fff3;
    margin: 1.6em 0;
    @media (min-width: 720px) {
      margin: 0.8em 0;
    }
  }
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
          <p>
            <a href="tel:+41413222626">041 322 26 26</a>
          </p>
          <p>
            <a href="mailto:mensch@botfabrik.ch">mensch@botfabrik.ch</a>
          </p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ListLinks>
            <li>
              <Link to="/dienstleistungen/">Dienstleistungen</Link>
            </li>
            <li>
              <Link to="/bubblechat/">Bubble Chat</Link>
            </li>
            <li>
              <Link to="/ueber-uns/">Über uns</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/kontakt/">Kontakt</Link>
            </li>
            <hr />
            <li>
              <Link to="/preisrechner/">Preisrechner</Link>
            </li>
            <li>
              <Link to="/faq/">Häufig gestellte Fragen</Link>
            </li>
            <hr />
            <li>
              <a
                href="https://apptiva.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apptiva AG
              </a>
            </li>
            <li>
              <a
                href="https://bubble-chat.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bubble Chat
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/BotfabrikTeam"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter @BotfabrikTeam
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCfjvBfWviimCo0IS8rEXvgA/featured"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
          </ListLinks>
        </div>
      </Grid>
      <CopyWrite>
        <p>
          <span role="img" aria-label="copywrite">
            ©
          </span>{' '}
          2016 - {new Date().getFullYear()} Botfabrik - eine Initiative der
          Apptiva AG
        </p>
      </CopyWrite>
    </Container>
  </Wrapper>
)

export default Footer
