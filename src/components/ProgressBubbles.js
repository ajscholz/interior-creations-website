import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FaRegCircle, FaCircle } from "react-icons/fa"

const ProgressBubbles = props => {
  const { number, current, set, className } = props

  // const circles = new Array(number)

  const circles = Array(number).fill(number)

  return (
    <div className={className}>
      {circles.map((circle, index) => {
        return (
          <>
            {index === current ? (
              <FaCircle key={index} />
            ) : (
              <FaRegCircle onClick={() => set(index)} key={index} />
            )}
          </>
        )
      })}
    </div>
  )
}

ProgressBubbles.propTypes = {
  number: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  set: PropTypes.func.isRequired,
}

export default styled(ProgressBubbles)`
  & > svg {
    color: var(--lightgray);
    height: 0.7rem;
    width: 0.7rem;
    margin: 0 0.25rem;
  }
`
