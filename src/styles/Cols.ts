import styled from 'styled-components'

type Cols = { readonly minWidth?: string }
const Cols = styled.div<Cols>`
  display: grid;
  gap: 1em;

  @media (min-width: calc(${(p) => p.minWidth || '240px'} + 40px)) {
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(
      auto-fill,
      minmax(${(p) => p.minWidth || '240px'}, 1fr)
    );
  }
`

export default Cols
