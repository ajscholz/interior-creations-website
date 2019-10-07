import React from "react"
import styled from "styled-components"

import GridGroup from "./GridGroup"
import { FaFacebookF, FaHouzz } from "react-icons/fa"
import IconBadge from "./IconBadge"

const SocialButtons = props => {
  const { outline, className } = props
  return (
    <div className={className}>
      <StyledGridGroup gap={1} mb={2}>
        <StyledIconBadge
          icon={<FaFacebookF />}
          url={`https://www.facebook.com/interiorcreationsco/`}
        />
        <StyledIconBadge
          icon={<FaHouzz />}
          url={`https://www.houzz.com/pro/jeff2413`}
        />
      </StyledGridGroup>
    </div>
  )
}

export default styled(SocialButtons)``

const StyledGridGroup = styled(GridGroup)`
  margin: 0 auto 2rem auto;
  @media (min-width: 662px) {
    margin: 0;
    justify-self: end;
  }
`

const StyledIconBadge = styled(IconBadge)`
  height: 2.25rem;
  width: 2.25rem;
  border: 2px solid var(--secondary);
  background: transparent;
`
