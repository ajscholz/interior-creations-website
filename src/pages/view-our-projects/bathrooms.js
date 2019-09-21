import React from "react"
import { graphql } from "gatsby"

import ProjectPageTemplate from "../../components/ProjectPageTemplate"

const Bathrooms = props => {
  const { data } = props
  const { page, projects } = data

  return (
    <>
      <ProjectPageTemplate page={page} projects={projects.projects} />
    </>
  )
}

export default Bathrooms

export const query = graphql`
  query {
    page: contentfulPage(title: { eq: "Bathrooms" }) {
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
      filter: { projectType: { eq: "Bathrooms" } }
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
              src
            }
          }
        }
      }
    }
  }
`
