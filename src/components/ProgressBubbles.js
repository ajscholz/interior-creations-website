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
          <React.Fragment key={index}>
            {index === current ? (
              <FaCircle />
            ) : (
              <FaRegCircle onClick={() => set(index)} />
            )}
          </React.Fragment>
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
