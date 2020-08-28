import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"

import { H3 } from "./Typography"

const IconCard = props => {
  const { className, current, icon, title, click, cardNumber } = props
  const highlight = useSpring({
    boxShadow: current
      ? "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
      : "0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0)",
    color: current ? "#0585b0" : "#707070",
  })

  return (
    <animated.button
      className={className}
      style={highlight}
      onClick={() => click(cardNumber)}
    >
      {icon}
      <H3>{title}</H3>
    </animated.button>
  )
}

IconCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
}

export default styled(IconCard)`
  height: 90px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  background: var(--white);
  border: none;
  /* outline: none;  */
  padding: 0.75rem 0.9rem;

  & svg {
    /* margin-top: 10%; */
    height: 50%;
    width: 50%;
    margin-bottom: 0.5rem;
  }

  & ${H3} {
    font-size: 0.8rem;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 576px) {
    height: 110px;
    width: 110px;
    & ${H3} {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 662px) {
    height: 130px;
    width: 130px;
    padding: 0.75rem 1.7rem;

    & ${H3} {
      font-size: 1.05rem;
    }
  }
`
