import React from "react"
// import PropTypes from "prop-types"

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
      <Section>
        <ModalController
          buttonText="Start Your Project Now"
          buttonStyle="solid"
        >
          <ProjectForm />
        </ModalController>
      </Section>
    </>
  )
}

ProjectPageTemplate.propTypes = {
  // page: PropTypes.isRequired,
}

export default ProjectPageTemplate
