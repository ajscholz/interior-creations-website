import React from "react"
import Button, { hovering, blurred } from "./Button"
import { Link } from "gatsby"
// import styled from "styled-components"
import { a, useSpring } from "react-spring"

const LinkButton = props => {
  const { children, className, style, solid, link } = props
  const [hoverProps, set] = useSpring(() => blurred(solid))

  const AnimatedButton = a(Button)

  return (
    <AnimatedButton
      to={link}
      as={Link}
      className={className}
      style={{ ...style, ...hoverProps }}
      onMouseOver={() => set(() => hovering(solid))}
      onFocus={() => set(() => hovering(solid))}
      onMouseOut={() => set(() => blurred(solid))}
      onBlur={() => set(() => blurred(solid))}
    >
      {children}
    </AnimatedButton>
  )
}

export default LinkButton
