import React from "react"
import { graphql } from "gatsby"

import ProjectPageTemplate from "../../components/ProjectPageTemplate"

const homeOffices = props => {
  const { data } = props
  const { page } = data

  return (
    <>
      <ProjectPageTemplate page={page} />
    </>
  )
}

export default homeOffices

export const data = graphql`
  query {
    page: contentfulPage(title: { eq: "Home Offices" }) {
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
  }
`
