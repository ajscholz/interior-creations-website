import React from "react"
import { graphql } from "gatsby"

import ProjectPageTemplate from "../../components/ProjectPageTemplate"

const kitchens = props => {
  const { data } = props
  const { page, projects } = data

  return (
    <>
      <ProjectPageTemplate page={page} projects={projects.projects} />
    </>
  )
}

export default kitchens

export const data = graphql`
  query {
    page: contentfulPage(title: { eq: "Kitchens" }) {
      contentful_id
      bannerText
      bannerImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
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
      filter: { projectType: { eq: "Kitchens" } }
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
              ...GatsbyContentfulFluid_withWebp
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
