import styled from "styled-components"

export default styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: ${props => `${props.gap}rem` || 0};
  width: max-content;
  margin: ${props =>
    props.center
      ? "0 auto"
      : props.left
      ? "0 0 0 auto"
      : props.right
      ? "0 auto 0 0"
      : "0"};
  margin-bottom: ${props => `${props.mb}rem` || "1rem"};
`
