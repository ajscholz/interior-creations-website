import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { H2 } from "./Typography"
import Img from "gatsby-image"

import Carousel, { Modal, ModalGateway } from "react-images"

const ProjectCard = props => {
  const { data, className } = props

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const images = data.gallery.map(image => {
    return { src: image.fluid.src }
  })

  return (
    <div className={className}>
      <div className="header">
        <H2>{data.title}</H2>
      </div>
      <div className="body">
        <div className="overlay" onClick={() => setModalIsOpen(true)}>
          {/* <Img fluid={images[3].fluid} /> */}
        </div>
        <div className="overlay" onClick={() => setModalIsOpen(true)}>
          {/* <Img fluid={images[3].fluid} /> */}
        </div>
        <div className="overlay" onClick={() => setModalIsOpen(true)}>
          {/* <Img fluid={images[3].fluid} /> */}
        </div>
        <div className="overlay" onClick={() => setModalIsOpen(true)}>
          {/* <Img fluid={images[3].fluid} /> */}
        </div>
      </div>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal
            onClose={() => setModalIsOpen(false)}
            styles={{
              blanket: base => ({
                ...base,
                // backgroundColor: 'rgba(255,255,255,0.85)',
                zIndex: "2000",
              }),
              dialog: base => ({
                ...base,
                zIndex: "2005 !important",
              }),
            }}
          >
            <Carousel
              views={images}
              styles={{
                container: base => ({
                  ...base,
                  zIndex: "2005 !important",
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

ProjectCard.propTypes = {}

export default styled(ProjectCard)`
  width: 100%;
  /* box-shadow: var(--shadow2); */
  margin-bottom: 2rem;

  & .header {
    /* border-bottom: 1px solid red; */
    padding-bottom: 0.5rem;
    /* display: flex; */
    /* justify-content: center; */
    & ${H2} {
      margin-bottom: 0;
      font-size: 1.5rem;
    }
  }

  & .body {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;

    & .gatsby-image-wrapper {
      height: 100%;
      width: 24%;
    }

    & .overlay {
      height: 100%;
      width: 24%;
      background: rgba(0, 0, 0, 0.6);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &::after {
        content: "view more";
        font-family: "Cinzel";
        position: absolute;
        color: white;
        font-weight: bold;
      }

      & .gatsby-image-wrapper {
        z-index: -1;
        width: 100%;
      }
    }
  }
`
