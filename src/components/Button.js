import styled from "styled-components"

export default styled.button`
  outline: none;
  border: 2px solid var(--primary);
  color: ${props => props.color || "var(--primary)"};
  text-transform: uppercase;
  font-size: ${props =>
    props.large ? "1rem" : props.small ? ".7rem" : ".85rem"};
  padding: 0.35rem 3rem;
  background: ${props => (props.solid ? "var(--primary)" : "transparent")};
  letter-spacing: 1.5px;
  font-weight: 400;
`
