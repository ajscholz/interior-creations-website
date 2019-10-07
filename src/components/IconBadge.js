import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const IconBadge = props => {
  const { icon, size, url, color, iColor, className } = props
  return (
    <a
      size={size}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
      iColor={iColor}
      className={className}
    >
      {icon}
    </a>
  )
}

IconBadge.propTypes = {
  icon: PropTypes.element.isRequired,
  // size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

export default styled(IconBadge)`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: 50%;
  background: ${props => props.color || "var(--white)"};
  display: flex;
  justify-content: center;
  align-items: center;
  /* outline: none; */
  cursor: pointer;

  & > svg {
    color: ${props => props.iColor || "var(--secondary)"};
    height: 50%;
    width: 50%;
  }
`
