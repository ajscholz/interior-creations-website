import React from "react"
import styled from "styled-components"
import ProgressBubbles from "../ProgressBubbles"

const Footer = ({ number, current, set }) => (
  <StyledFooter>
    <StyledProgressBubbles
      number={number}
      current={current}
      set={set}
      style={{}}
    />
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 1.1rem;
  left: 50%;
  transform: translateX(-50%);
`

const StyledProgressBubbles = styled(ProgressBubbles)`
  & > svg {
    color: var(--white);
    height: 1rem;
    width: 1rem;
    cursor: pointer;
  }
`
