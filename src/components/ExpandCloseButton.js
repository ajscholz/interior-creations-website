import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import { onKeyPress } from "../utils/helpers"

const ExpandCloseButton = props => {
  const { open, click } = props
  const topChev = useSpring({ top: open ? "64%" : "40%" })
  const bottomChev = useSpring({ top: open ? "37%" : "60%" })

  const AnimatedChevUp = animated(ChevronUp)
  const AnimatedChevDown = animated(ChevronDown)

  return (
    <Button
      onClick={() => click(!open)}
      alt={`${open ? "close" : "open"} navigation menu`}
      aria-label={`${open ? "close" : "open"} navigation menu`}
      onKeyDown={e => onKeyPress(e, () => click(false))}
    >
      <AnimatedChevUp style={topChev} open={open} />
      <AnimatedChevDown style={bottomChev} open={open} />
    </Button>
  )
}

ExpandCloseButton.propTypes = {
  open: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
}

const Button = styled.button`
  z-index: 500;
  outline: none;
  height: 3rem;
  width: 3rem;
  background: var(--white);
  border: none;
  border-radius: 50%;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  box-shadow: var(--shadow3);

  @media (min-width: 662px) {
    display: none;
  }
`

const Chevron = styled.div`
  border-left: 1px solid var(--secondary);
  border-top: 1px solid var(--secondary);
  height: 10px;
  width: 10px;
  margin: 0;
  position: absolute;
  left: 50%;
`

const ChevronUp = styled(Chevron)`
  transform: translateY(-50%) translateX(-50%) rotate(45deg);
`

const ChevronDown = styled(Chevron)`
  transform: translateY(-50%) translateX(-50%) rotate(-135deg);
`

export default ExpandCloseButton
