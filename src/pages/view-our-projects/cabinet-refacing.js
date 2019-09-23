import React from "react"
import { graphql } from "gatsby"
import ProjectPageTemplate from "../../components/ProjectPageTemplate"

const cabinetRefacing = props => {
  const { data } = props
  const { page, projects } = data

  return (
    <>
      <ProjectPageTemplate page={page} projects={projects.projects} />
    </>
  )
}

export default cabinetRefacing

export const data = graphql`
  query {
    page: contentfulPage(title: { eq: "Cabinet Refacing" }) {
      contentful_id
      bannerText
      bannerImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
        file {
          details {
            image {
              height
              width
            }
          }
        }
      }
    }
    projects: allContentfulProject(
      filter: { projectType: { eq: "Cabinet Refacing" } }
      sort: { fields: createdAt, order: DESC }
    ) {
      projects: edges {
        project: node {
          contentful_id
          title
          projectType
          cabinetType
          style
          color
          location {
            lat
            lon
          }
          gallery {
            fluid {
              ...GatsbyContentfulFluid
            }
            image: file {
              url
            }
          }
        }
      }
    }
  }
`