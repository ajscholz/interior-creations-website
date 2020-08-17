import React from "react"
import styled from "styled-components"
import ModalController from "./ModalComponents/ModalController"
import Section from "./Section"
import ProjectForm from "./FormComponents/ProjectForm"
import { H2, P } from "./Typography"

const StartProjectSection = () => (
  <StyledSection>
    <H2>Ready To Get Started?</H2>
    <P style={{ marginBottom: "2em" }}>
      It takes <b>less than three minutes</b> to get started. Don't wait any
      longer!
    </P>
    <ModalController
      buttonText="Start Your Project Now"
      buttonStyle="solid"
      pushDown
      align="left"
    >
      <ProjectForm />
    </ModalController>
  </StyledSection>
)

const StyledSection = styled(Section)`
  & button {
    margin: 0 auto;
  }
`

export default StartProjectSection
