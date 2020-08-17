import React from "react"
import styled from "styled-components"
import { a, useSpring } from "react-spring"

export const hovering = solid => {
  let styles = {
    color: "#FFF",
    background: "rgba(5, 133, 176, 1)",
    transform: "scale(1.05)",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  }
  if (solid) {
    styles.color = "rgba(5, 133, 176, 1)"
    styles.background = "rgba(5, 133, 176, 0)"
  }
  return styles
}

export const blurred = solid => {
  let styles = {
    color: "rgba(5, 133, 176, 1)",
    background: "rgba(5, 133, 176, 0)",
    transform: "scale(1)",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, 0)",
  }
  if (solid) {
    styles.color = "#fff"
    styles.background = "rgba(5, 133, 176, 1)"
  }
  return styles
}

const Button = props => {
  const { children, className, style, onClick, solid } = props
  const [hoverProps, set] = useSpring(() => blurred(solid))

  return (
    <a.button
      className={className}
      style={{ ...style, ...hoverProps }}
      onClick={onClick}
      onMouseOver={() => set(() => hovering(solid))}
      onFocus={() => set(() => hovering(solid))}
      onMouseOut={() => set(() => blurred(solid))}
      onBlur={() => set(() => blurred(solid))}
    >
      {children}
    </a.button>
  )
}

export default styled(Button)`
  outline: none;
  /* outline-color: var(--secondary); */
  display: block;
  border: 2px solid var(--primary);
  width: 100%;
  color: ${props => props.color || "var(--primary)"};
  text-transform: uppercase;
  font-size: ${props =>
    props.large ? "1rem" : props.small ? ".7rem" : ".85rem"};
  padding: 0.5rem 1rem;
  background: ${props => (props.solid ? "var(--primary)" : "transparent")};
  letter-spacing: 2px;
  font-weight: 400;
  margin: ${props =>
    props.left === true
      ? "2em auto 0 0 !important"
      : props.center && "2em auto"};
  margin-top: ${props => props.pushDown && "2.25em"};
  /* margin-right: auto; */
  cursor: pointer;

  @media (min-width: 662px) {
    width: auto;
    padding: 0.5rem 3rem;
  }
`
