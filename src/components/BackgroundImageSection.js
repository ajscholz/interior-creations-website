import React from "react"
import styled from "styled-components"
import Container from "./Container"
import Parallax from "./Parallax"
import Section from "./Section"

const BackgroundImageSection = ({ section, className }) => {
  return (
    <Section className={className} fluid key={section.id}>
      <Container full>
        <Parallax image={section.image} />
      </Container>
    </Section>
  )
}

export default styled(BackgroundImageSection)`
  height: 80vh;
  overflow: hidden;
  padding: 0;

  @media (min-width: 662px) {
    height: 30rem;
  }
`
