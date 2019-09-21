import React from "react"
import { graphql } from "gatsby"

import ProjectPageTemplate from "../../components/ProjectPageTemplate"

const mudrooms = props => {
  const { data } = props
  const { page } = data

  return (
    <>
      <ProjectPageTemplate page={page} />
    </>
  )
}

export default mudrooms

export const data = graphql`
  query {
    page: contentfulPage(title: { eq: "Mudrooms" }) {
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
