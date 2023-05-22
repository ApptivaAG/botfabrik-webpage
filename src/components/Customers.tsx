import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const CustomerList = () => (
  <>
    <li>
      <StaticImage
        src="../img/ringier-logo-3.svg"
        loading="eager"
        alt="Ringier Logo"
        height={30}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        src="../img/roche.svg"
        loading="eager"
        alt="Berufsbildung von F. Hoffmann-La Roche AG"
        height={45}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        src="../img/post-2.svg"
        loading="eager"
        alt="Die Post"
        height={60}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        src="../img/luzerner-kantonsspital.svg"
        loading="eager"
        alt="Luzerner Kantonsspital"
        height={45}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        style={{ marginTop: '.2em' }}
        src="../img/allianz-cinema-logo.png"
        loading="eager"
        alt="Allianz Cinema Logo"
        height={50}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        style={{ marginTop: '.5em' }}
        src="../img/suva.svg"
        loading="eager"
        alt="Suva"
        placeholder="none"
        height={50}
      />
    </li>
    <li>
      <StaticImage
        src="../img/maxon-motor-2.svg"
        loading="eager"
        alt="maxon motor"
        height={30}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        src="../img/kanton-bern.svg"
        loading="eager"
        alt="Amt für Informatik und Organisation des Kantons Bern (KAIO)"
        height={50}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        src="../img/stadt-zuerich-finanzdepartement.svg"
        loading="eager"
        alt="Stadt Zürich Finanzdepartement"
        height={30}
        placeholder="none"
      />
    </li>
    <li>
      <StaticImage
        src="../img/akso.svg"
        loading="eager"
        alt="Ausgleichskasse Solothurn"
        height={50}
        placeholder="none"
      />
    </li>
  </>
)

const Customers = () => (
  <MarqueeStyle>
    <div className="marquee">
      <ul>
        <CustomerList />
      </ul>
      <ul style={{ translate: '100%', position: 'absolute', inset: 0 }}>
        <CustomerList />
      </ul>
    </div>
  </MarqueeStyle>
)

const MarqueeStyle = styled.div`
  overflow: hidden;
  width: 100vw;
  max-width: 100%;

  .marquee {
    width: clamp(160rem, 300%, 240rem);
    margin-block: 1rem;
    position: relative;
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    animation: slide 60s linear infinite;
    margin: 0;
    padding: 1em 0;
  }

  li {
    list-style: none;
  }

  @keyframes slide {
    0% {
      transform: translate(0%);
    }

    100% {
      transform: translate(-100%);
    }
  }
`

export default Customers
