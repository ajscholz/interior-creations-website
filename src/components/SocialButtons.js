import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GridGroup from "./GridGroup"
import { FaFacebookF, FaHouzz } from "react-icons/fa"
import IconBadge from "./IconBadge"

const SocialButtons = props => {
  const { outline, className } = props
  return (
    <div className={className}>
      <StyledGridGroup gap={1} mb={2}>
        <IconBadge
          outline={outline}
          icon={<FaFacebookF />}
          url={`https://www.facebook.com/interiorcreationsco/`}
          size="2.25rem"
        />
        <IconBadge
          outline={outline}
          icon={<FaHouzz />}
          url={`https://www.houzz.com/pro/jeff2413`}
          size="2.25rem"
        />
      </StyledGridGroup>
    </div>
  )
}

SocialButtons.propTypes = {
  outline: PropTypes.bool,
}

export default styled(SocialButtons)``

const StyledGridGroup = styled(GridGroup)`
  margin: 0 auto 2rem auto;
  @media (min-width: 662px) {
    margin: 0;
    justify-self: end;
  }
`
