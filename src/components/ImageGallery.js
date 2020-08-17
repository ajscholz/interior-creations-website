import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Lightbox from "./LightboxComponents/Lightbox"
import Button from "./Button"
// import { useKeyPress } from "../utils/hooks"

const ImageGallery = ({ className, images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  // const [modalState, setModalState] = useState({ open: false, index: 0 })
  // const esc = useKeyPress("Escape")
  // const rtArrow = useKeyPress("ArrowRight")
  // const ltArrow = useKeyPress("ArrowLeft")

  // const key = useKeyDown()

  // console.log(key)

  const openModal = index => {
    // setModalState({ open: true, index: index })
    setIndex(index)
    setModalIsOpen(true)
  }

  // const setIndex = i => {
  //   setModalState({ ...modalState, index: i })
  // }

  return (
    <div className={className}>
      {images.map((image, index) => {
        return (
          <Button
            className="image-btn"
            onClick={() => openModal(index)}
            key={image.id}
          >
            <Img fluid={image.fluid} />
          </Button>
        )
      })}
      {/* <Lightbox
        images={images}
        onClose={() => setModalState({ ...modalState, open: false })}
        index={modalState.index}
        setIndex={setIndex}
        open={modalState.open}
      /> */}
      <Lightbox
        images={images}
        close={() => setModalIsOpen(false)}
        index={index}
        setIndex={setIndex}
        open={modalIsOpen}
      />
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
