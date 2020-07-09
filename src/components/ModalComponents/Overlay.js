import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Overlay = props => {
  const { className, onClick, onKeyDown } = props
  const overlayRef = useRef()
  useEffect(() => {
    overlayRef.current.focus()
  })

  return (
    <div
      ref={overlayRef}
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    />
  )
}

export default styled(Overlay)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
`

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
}
