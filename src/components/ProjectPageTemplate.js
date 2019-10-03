import React from "react"
import styled from "styled-components"

import SEO from "./seo"
import HeroBanner from "./HeroBanner"
import ProjectForm from "./FormComponents/ProjectForm"
import Section from "./Section"
import ProjectCard from "./ProjectCard"
import ModalController from "./ModalComponents/ModalController"

const ProjectPageTemplate = props => {
  const { page, projects } = props

  return (
    <>
      <SEO title="Our Projects" />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />
      <Section>
        {projects.map(({ project }) => (
          <ProjectCard key={project.contentful_id} data={project}>
            {project.title}
          </ProjectCard>
        ))}
      </Section>
      <StyledSection>
        <ModalController
          buttonText="Start Your Project Now"
          buttonStyle="solid"
        >
          <ProjectForm />
        </ModalController>
      </StyledSection>
    </>
  )
}

const StyledSection = styled(Section)`
  & button {
    margin: 0 auto;
  }
`

export default ProjectPageTemplate
