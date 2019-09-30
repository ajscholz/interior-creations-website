import React from "react"
import styled from "styled-components"
import { a, useSpring } from "react-spring"

const focused = solid => {
  let styles = {
    color: "#fff",
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

const blurred = solid => {
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

  // try passing "solid" as an argment to "set" and adapting focused and blurred based on that argument

  return (
    <a.button
      className={className}
      style={{ ...style, ...hoverProps }}
      onClick={onClick}
      onMouseOver={() => set(() => focused(solid))}
      onFocus={() => set(() => focused(solid))}
      onMouseOut={() => set(() => blurred(solid))}
      onBlur={() => set(() => blurred(solid))}
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
