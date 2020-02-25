import styled from 'styled-components'

const Cols = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 1em;

  @media (min-width: calc(${p => p.minWidth || '240px'} + 40px)) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${p => p.minWidth || '240px'}, 1fr)
    );
  }
`

export default Cols
