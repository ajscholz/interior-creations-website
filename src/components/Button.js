import React from "react"
import styled from "styled-components"
import { a, useSpring } from "react-spring"

const focused = {
  color: "#fff",
  background: "rgba(5, 133, 176, 1)",
  transform: "scale(1.05)",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
}

const blurred = {
  color: "rgba(5, 133, 176, 1)",
  background: "rgba(5, 133, 176, 0)",
  transform: "scale(1)",
  boxShadow: "0 1px 1px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, 0)",
}

const Button = props => {
  const { children, className, style, onClick } = props
  const [hoverProps, set] = useSpring(() => blurred)

  return (
    <a.button
      className={className}
      style={{ ...style, ...hoverProps }}
      onClick={onClick}
      onMouseOver={() => set(focused)}
      onFocus={() => set(focused)}
      onMouseOut={() => set(blurred)}
      onBlur={() => set(blurred)}
    >
      {children}
    </a.button>
  )
}

export default styled(Button)`
  outline: none;
  display: block;
  border: 2px solid var(--primary);
  color: ${props => props.color || "var(--primary)"};
  text-transform: uppercase;
  font-size: ${props =>
    props.large ? "1rem" : props.small ? ".7rem" : ".85rem"};
  padding: 0.5rem 3rem;
  background: ${props => (props.solid ? "var(--primary)" : "transparent")};
  letter-spacing: 2px;
  font-weight: 400;
  margin: ${props => props.center && "0 auto"};
  cursor: pointer;
`

export const NavbarButton = styled(Button)`
  font-family: Cinzel;
  text-transform: capitalize;
  text-align: center;
  margin: 0;
  padding: 0.5rem 3rem;
  color: var(--primary);
  background: none;
  font-size: 1.5rem;

  @media (min-width: 662px) {
    padding: 0.35rem 0.8rem;
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.35rem 1.5rem;
  }
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`
