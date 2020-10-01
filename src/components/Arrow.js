import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useHocus } from "../utils/hooks"
import { animated } from "react-spring"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Arrow = ({ direction, click, ...rest }) => {
  const [bind, styles] = useHocus()

  const AnimatedRight = animated(Right)
  const AnimatedLeft = animated(Left)

  return direction === "left" ? (
    <AnimatedLeft {...bind} style={styles} {...rest} onClick={() => click()}>
      <FaChevronLeft />
    </AnimatedLeft>
  ) : (
    <AnimatedRight {...bind} style={styles} {...rest} onClick={() => click()}>
      <FaChevronRight />
    </AnimatedRight>
  )
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  click: PropTypes.func.isRequired,
}

export default Arrow

const DirectionalArrow = styled.button`
  /* outline: none; */
  border-radius: 100%;
  box-shadow: var(--shadow2);
  background: var(--white);
  padding: 1em;
  margin: auto 0;
  cursor: pointer;
  min-height: 100%;
  display: flex;
  align-items: center;
  color: var(--lightgray);

  &:focus,
  &:active {
    outline: none;
  }
`

const Left = styled(DirectionalArrow)`
  margin-right: 1rem;
  @media (min-width: 662px) {
    margin-right: 2rem;
  }
`

const Right = styled(DirectionalArrow)`
  margin-left: 1rem;
  @media (min-width: 662px) {
    margin-left: 2rem;
  }
`
