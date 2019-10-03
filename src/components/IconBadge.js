import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const IconBadge = props => {
  const { icon, size, url, color, iColor } = props
  return (
    <Badge
      size={size}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
      iColor={iColor}
    >
      {icon}
    </Badge>
  )
}

IconBadge.propTypes = {
  icon: PropTypes.element.isRequired,
  // size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

const Badge = styled.a`
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

export default IconBadge
