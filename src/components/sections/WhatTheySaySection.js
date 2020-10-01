import React from "react"
import Reviews from "../ReviewComponents/Reviews"
import Section from "../Section"
import Title from "../Title"

const WhatTheySaySection = ({ section }) => {
  return (
    <Section>
      <Title style={{ textAlign: "center" }}>{section.sectionTitle}</Title>
      <Reviews reviews={section.contentReferences} />
    </Section>
  )
}

export default WhatTheySaySection
