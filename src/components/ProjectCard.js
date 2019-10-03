import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { H2 } from "./Typography"
import Button from "./Button"
import Lightbox from "./LightboxComponents/Lightbox"

const ProjectCard = props => {
  const { data, className } = props

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

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

      <Lightbox
        images={data.gallery}
        onClose={setModalIsOpen}
        index={index}
        setIndex={setIndex}
        open={modalIsOpen}
      />
    </div>
  )
}

ProjectCard.propTypes = {}

export default styled(ProjectCard)`
  width: 100%;
  margin-bottom: 2rem;

  & .header {
    padding-bottom: 0.5rem;
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
