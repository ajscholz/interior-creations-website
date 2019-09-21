import React, { useContext } from "react"
import PropTypes from "prop-types"

import { ModalContext } from "../context/ModalContext"
import SEO from "./seo"
import HeroBanner from "./HeroBanner"
import Button from "./Button"
import Section from "./Section"
import ProjectCard from "./ProjectCard"

const ProjectPageTemplate = props => {
  const { page, projects } = props
  const [, setModalOpen] = useContext(ModalContext)

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
        <Button onClick={() => setModalOpen("image")}>Open Lightbox</Button>
      </Section>
    </>
  )
}

ProjectPageTemplate.propTypes = {
  // page: PropTypes.isRequired,
}

export default ProjectPageTemplate
