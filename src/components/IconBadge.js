import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// following props that are lighter in color are used in styled component defined in default export
// this syntax clears up a console error for custom attrs
const IconBadge = ({ icon, size, url, color, iColor, className, outline }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
    </a>
  )
}

IconBadge.propTypes = {
  icon: PropTypes.element.isRequired,
  outline: PropTypes.bool,
  url: PropTypes.string.isRequired,
}

export default styled(IconBadge)`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: 50%;
  background: ${props =>
    props.outline === true ? "transparent" : props.color || "var(--white)"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.outline === true && "2px solid var(--secondary)"};
  cursor: pointer;

  & > svg {
    color: ${props => props.icolor || "var(--secondary)"};
    height: 50%;
    width: 50%;
  }
`
