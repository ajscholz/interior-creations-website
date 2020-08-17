import React from "react"
import SEO from "./seo"
import HeroBanner from "./HeroBanner"
import Section from "./Section"
import ProjectCard from "./ProjectCard"
import StartProjectSection from "./StartProjectSection"

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
      <StartProjectSection />
    </>
  )
}

export default ProjectPageTemplate
