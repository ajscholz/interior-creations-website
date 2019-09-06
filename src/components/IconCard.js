import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"

const IconCard = props => {
  const { className, current, icon, text, click, cardNumber } = props
  const highlight = useSpring({
    boxShadow: current
      ? "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
      : "0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0)",
    color: current ? "#0585b0" : "#222526",
    // opacity: current ? "1" : "0",
  })

  return (
    <animated.div
      className={className}
      style={highlight}
      onClick={() => click(cardNumber)}
    >
      {icon}
      <h5>{text}</h5>
    </animated.div>
  )
}

IconCard.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
}

export default styled(IconCard)`
  height: 100px;
  width: 100px;
  /* box-shadow: ${props => (props.current ? "var(--shadow2)" : "none")}; */
  /* color: ${props => (props.current ? "var(--primary)" : "var(--black)")}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  & svg {
    margin-top: 20%;
    height: 30%;
    width: 30%;
    /* color: ${props =>
      props.current ? "var(--primary)" : "var(--black)"}; */
    margin-bottom: 0.75rem;
  }
  & h5 {
    font-size: 0.8rem;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 662px) {
    height: 160px;
    width: 160px;
    & svg {
      margin-bottom: 1rem;
    }
    & h5 {
      font-size: 1.5rem;
    }
  }
`
