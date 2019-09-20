import styled from "styled-components"
import Button from "../Button"

export default styled(Button)`
  padding: 0 2rem;
  height: 50%;
  color: var(--white);
  flex-grow: 0;
  flex-shrink: 0;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  opacity: ${props => props.disabled && ".6"};

  @media (min-width: 662px) {
    height: 100%;
  }
`
