import React from "react"
import PropTypes from "prop-types"
import Button, { hovering, blurred } from "./Button"
import { Link } from "gatsby"
import { a, useSpring } from "react-spring"

const LinkButton = props => {
  const { children, className, style, solid, link, type, ...rest } = props
  const [hoverProps, set] = useSpring(() => blurred(solid))

  const AnimatedButton = a(Button)

  return (
    <AnimatedButton
      href={link}
      to={link}
      as={type === "internal" ? Link : "a"}
      className={className}
      style={{ ...style, ...hoverProps }}
      onMouseOver={() => set(() => hovering(solid))}
      onFocus={() => set(() => hovering(solid))}
      onMouseOut={() => set(() => blurred(solid))}
      onBlur={() => set(() => blurred(solid))}
      {...rest}
    >
      {children}
    </AnimatedButton>
  )
}

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["internal", "external"]).isRequired,
}

LinkButton.defaultProps = {
  link: "generic button",
  type: "internal",
}

export default LinkButton
