import styled from "styled-components"

export default styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  margin-top: 0.2rem;
  background: white;

  @media (min-width: 662px) {
    height: 2.5rem;
    flex-direction: row;
    justify-content: stretch;
  }
`
