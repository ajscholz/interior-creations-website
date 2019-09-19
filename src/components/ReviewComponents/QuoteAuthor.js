import styled from "styled-components"

export default styled.h5`
  color: var(--primary);
  text-align: center;
  &::before {
    content: "- ";
  }
  @media (min-width: 662px) {
    text-align: right;
  }
`
