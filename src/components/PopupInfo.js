import React from "react"
import styled from "styled-components"

import { H2, P } from "./Typography"
import ModalController from "./ModalComponents/ModalController"
import ProjectForm from "./FormComponents/ProjectForm"
import SocialButtons from "./SocialButtons"
import * as styles from "../utils/styles"
import CloseButton from "./ModalComponents/CloseButton"

const PopupInfo = props => {
  const { className, handleClose } = props

  return (
    <div className={className}>
      <CloseButton handleClose={handleClose} />
      <div className="content">
        <H2>Pardon us. We're renovating.</H2>
        <P>
          In the meantime, let us know if there's a project you'd like to start,
          check out our Facebook or Houzz pages for more pictures of recent
          projects, or just browse around a bit.
        </P>
        <P>
          If you do decide to look around, just know you might find some odd
          stuff here and there. We'll get it cleaned up soon, we promise!{" "}
          <span role="img" aria-label="laughing">
            😂
          </span>
        </P>
        <ModalController
          buttonText={`Start My Project`}
          // buttonStyle="solid"
        >
          <ProjectForm />
        </ModalController>
      </div>
      <StyledSocialButtons outline={true} />
    </div>
  )
}

PopupInfo.propTypes = {}

export default styled(PopupInfo)`
  position: relative;
  ${() => styles.flexCol}
  background: var(--white);
  padding: 2rem;
  height: 100%;
  width: 100%;

  .content {
    margin-top: auto;
    ${() => styles.flexCol}
  }

  @media (min-width: 662px) {
    height: auto;
    width: 80%;
    max-width: 800px;
    padding: 4rem 4rem 2rem 4rem;
  }

  & p {
    font-size: 0.9rem;
    :last-of-type {
      margin-bottom: 2rem;
    }
  }
`

const StyledSocialButtons = styled(SocialButtons)`
  margin-top: auto;

  & > div {
    margin-bottom: 0;
  }

  @media (min-width: 662px) {
    margin-top: 4rem;
  }
`
