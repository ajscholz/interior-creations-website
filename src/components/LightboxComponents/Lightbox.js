import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import { useTransition, useSpring, a } from "react-spring"

import ProgressBubbles from "../ProgressBubbles"

import Img from "gatsby-image"
import LockBody from "./LockBody"

const Lightbox = ({
  className,
  images,
  close,
  index,
  setIndex,
  open: shouldOpen,
}) => {
  const [open, setOpen] = useState(shouldOpen)
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    return () => window.removeEventListener("keydown", downHandler)
  })

  const closeLightbox = () => setOpen(false)

  const len = images.length

  const downHandler = e => {
    if (e.which === 39) {
      handleClick(1)
    }
    if (e.which === 37) {
      handleClick(-1)
    }
    if (e.which === 27) {
      closeLightbox()
    }
  }
  const handleClick = dir => {
    let next = index + dir

    // this routes the index to the beginning if at end, end if at beginning, etc.
    setIndex(next < 0 ? len - 1 : next > len - 1 ? 0 : next)
  }

  const showModal = useSpring({
    to: async next => {
      await next(open ? { display: "flex" } : { opacity: 0 })
      await next(open ? { opacity: 1 } : { display: "none" })
    },
    from: { display: "none", opacity: 0 },
    onRest: () => {
      if (!open) close()
    },
  })

  const transitions = useTransition(index, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const AnimatedImg = a(Img)

  return (
    <a.div className={className} style={showModal}>
      <div
        className="blanket"
        onClick={() => closeLightbox()}
        role="button"
        aria-label="close"
      />
      <CloseButton onClick={() => closeLightbox()} aria-label="close">
        <FiX />
      </CloseButton>

      <LeftButton
        onClick={() => handleClick(-1)}
        // disabled={index === 0}
      >
        <FaChevronLeft />
      </LeftButton>

      {/* <Img fluid={images[index].fluid} /> */}
      {transitions.map(({ item, key, props }) =>
        item ? (
          <AnimatedImg
            style={props}
            fluid={images[item].fluid}
            unique={true}
            key={key}
          />
        ) : (
          <AnimatedImg
            style={props}
            fluid={images[item].fluid}
            unique={true}
            key={key}
          />
        )
      )}

      <RightButton
        onClick={() => handleClick(1)}
        // disabled={index === len - 1}
      >
        <FaChevronRight />
      </RightButton>

      <StyledProgressBubbles number={len} current={index} set={setIndex} />
      <LockBody />
    </a.div>
  )
}

export default styled(Lightbox)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: var(--white);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;

  & .blanket {
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  & .gatsby-image-wrapper {
    /* height: 80%; */
    width: 85%;
    max-height: 85%;
  }
`

const Button = styled.button`
  outline: none;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5%;

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }
`

const RightButton = styled(Button)`
  right: 0;
`

const LeftButton = styled(Button)`
  left: 0;
`

const CloseButton = styled(Button)`
  top: 0;
  right: 0;
  top: 1rem;
  height: auto;
  z-index: 10;
`

const StyledProgressBubbles = styled(ProgressBubbles)`
  position: absolute;
  bottom: 2%;
  & > svg {
    color: var(--white);
    height: 1rem;
    width: 1rem;
    cursor: pointer;
  }
`
