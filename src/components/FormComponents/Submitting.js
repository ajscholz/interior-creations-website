import React from "react"
import styled from "styled-components"

import Spinner from "./Spinner"

const Submitting = props => {
  const { className } = props
  return (
    <div className={className}>
      <Spinner />
      Submitting
    </div>
  )
}

export default styled(Submitting)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;

  & svg {
    margin-right: 0.5rem;
    font-size: inherit;
  }
`
