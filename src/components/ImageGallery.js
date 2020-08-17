import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "./Button"

const ImageGallery = ({ className, images, open }) => {
  return (
    <div className={className}>
      {images.map((image, index) => {
        return (
          <Button
            className="image-btn"
            onClick={() => open(index)}
            key={image.id}
          >
            <Img fluid={image.fluid} />
          </Button>
        )
      })}
    </div>
  )
}

export const query = graphql`
  fragment ImageGalleryFragment on ContentfulProjectType {
    otherImages {
      id: contentful_id
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export default styled(ImageGallery)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  @media (min-width: 476px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 662px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

  & button .gatsby-image-wrapper {
    position: unset !important;
  }

  & button {
    padding: 0;
    border: none;
  }
`
