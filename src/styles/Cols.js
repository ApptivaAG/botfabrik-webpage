import styled from 'styled-components'

const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${p => p.minWidht || '12em'}, 1fr)
  );
  gap: 1em;
`

export default Cols
