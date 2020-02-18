import styled from 'styled-components'

const Cols = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  gap: 1em;

  @media (min-width: ${p => p.minWidth || '12em'}) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${p => p.minWidth || '12em'}, 1fr)
    );
  }
`

export default Cols
