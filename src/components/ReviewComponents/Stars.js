import React from "react"
import styled from "styled-components"
import { MdStar } from "react-icons/md"

const Stars = props => {
  const { className } = props

  return (
    <div className={className}>
      <MdStar />
      <MdStar />
      <MdStar />
      <MdStar />
      <MdStar />
    </div>
  )
}

export default styled(Stars)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  & > svg {
    color: goldenrod;
    margin: 0.1rem;
    font-size: 2rem;
    @media (min-width: 662px) {
      font-size: 2.5rem;
    }
  }
`
