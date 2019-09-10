import styled from "styled-components"

export default styled.section`
  padding: 4rem 5vw;
  margin: 0 auto;

  &:nth-of-type(even) {
    background: var(--lightestgray);
  }

  @media (min-width: 662px) {
    padding: 4rem;
    width: 100%;
  }
`
