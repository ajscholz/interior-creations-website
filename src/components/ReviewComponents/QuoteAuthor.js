import styled from "styled-components"

export default styled.h5`
  color: var(--primary);
  text-align: right;
  &::before {
    content: "- ";
  }
`
