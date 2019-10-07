import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const IconBadge = props => {
  const { icon, size, url, color, iColor, className, outline } = props
  return (
    <a
      size={size}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
      icolor={iColor}
      className={className}
      outline={outline}
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
    props.outline ? "transparent" : props.color || "var(--white)"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.outline && "2px solid var(--secondary)"};
  cursor: pointer;

  & > svg {
    color: ${props => props.icolor || "var(--secondary)"};
    height: 50%;
    width: 50%;
  }
`
