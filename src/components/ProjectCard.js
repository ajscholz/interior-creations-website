import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { H2 } from "./Typography"
import Img from "gatsby-image"

import Carousel, { Modal, ModalGateway } from "react-images"
import Button from "./Button"

import Lightbox from "react-spring-lightbox"
import CoolLightbox from "./CoolLightbox"

// const CustomView = ({ data }) => {
//   console.log(data)
//   return <Img fluid={data.src.fluid} />
// }

const ProjectCard = props => {
  const { data, className } = props

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const images = data.gallery.map(({ image }) => {
    return { src: image.url, alt: "image" }
  })

  const openModal = index => {
    setIndex(index)
    setModalIsOpen(true)
  }

  return (
    <div className={className}>
      <div className="header">
        <H2>{data.title}</H2>
      </div>
      <div className="body">
        <Button className="image-btn" onClick={() => openModal(0)}>
          <Img fluid={data.gallery[0].fluid} />
        </Button>
        <Button className="image-btn" onClick={() => openModal(1)}>
          <Img fluid={data.gallery[1].fluid} />
        </Button>
        <Button className="image-btn" onClick={() => openModal(2)}>
          <Img fluid={data.gallery[2].fluid} />
        </Button>
        <Button className="overlay" onClick={() => openModal(3)}>
          <Img fluid={data.gallery[3].fluid} />
        </Button>
      </div>

      <CoolLightbox
        isOpen={modalIsOpen}
        currentImageIndex={index}
        setCurrentIndex={setIndex}
        images={images}
        close={setModalIsOpen}
      />

      {/* <ModalGateway>
        {modalIsOpen ? (
          <Modal
            onClose={() => setModalIsOpen(false)}
            allowFullscreen={false}
            styles={{
              blanket: base => ({
                ...base,
                // backgroundColor: 'rgba(255,255,255,0.85)',
                zIndex: "500",
              }),
              positioner: base => ({
                ...base,
                // backgroundColor: 'rgba(255,255,255,0.85)',
                zIndex: "501",
              }),
            }}
          >
            <Carousel
              // components={{ View: CustomView }}
              views={images}
              currentIndex={index}
              trackProps={{ infinite: true }}
              styles={{
                navigationPrev: base => ({
                  ...base,
                  backgroundColor: "transparent",
                }),
                navigationNext: base => ({
                  ...base,
                  backgroundColor: "transparent",
                }),
                view: base => ({
                  ...base,
                  width: "82%",
                  margin: "0 auto",
                }),
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway> */}
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

    & .overlay,
    .image-btn {
      height: 100%;
      width: 24%;
      position: relative;
      cursor: pointer;
      outline: none;
      padding: 0;
      background: none;
      overflow: hidden;
      border: none;

      & .gatsby-image-wrapper {
        z-index: -1;
        width: 100%;
      }
    }

    & .overlay {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.6);
      }
      &::after {
        content: "view more";
        font-family: "Cinzel";
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
        left: 50%;
        color: white;
        font-weight: bold;
      }
    }
  }
`
