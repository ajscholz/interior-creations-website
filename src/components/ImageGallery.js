import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

const ImageGallery = () => {
  return <div>hello from image gallery</div>
}

export default ImageGallery

export const query = graphql`
  fragment ImageGalleryFragment on ContentfulProjectType {
    otherImages {
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
