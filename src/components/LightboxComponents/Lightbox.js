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
        // onClick={() => closeLightbox()}
        // role="button"
        // aria-label="close"
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

      {/* <StyledProgressBubbles number={len} current={index} set={setIndex} /> */}
      <StyledProgressCounter>{`${index + 1} / ${len}`}</StyledProgressCounter>
      <LockBody />
    </a.div>
  )
}

export default styled(Lightbox)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: var(--white);
  z-index: 2000;
  display: flex;
  padding-bottom: 4em;
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
    width: 100%;
    max-height: 85%;
    order: -1;

    @media (min-width: 662px) {
      width: 85%;
      margin-bottom: unset;
    }
  }
`

const Button = styled.button`
  outline: none;
  position: absolute;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: 1.25rem;
  width: 15%;

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }

  @media (min-width: 662px) {
    align-items: center;
    width: 7.5%;
  }
`

const RightButton = styled(Button)`
  right: 0;
`

const LeftButton = styled(Button)`
  left: 0;
`

const CloseButton = styled(Button)`
  bottom: 1.1rem;
  margin: 0 auto;
  height: auto;
  z-index: 10;

  & svg {
    font-size: 2.5rem;
    font-weight: 900;
  }

  @media (min-width: 662px) {
    /* align-self: flex-start; */
    top: 0;
    right: 0;
    left: unset;
    top: 1rem;
    bottom: unset;
    margin: unset;
  }
`

// const StyledProgressBubbles = styled(ProgressBubbles)`
//   /* display: none; */
//   display: block;
//   position: absolute;
//   bottom: 4rem;
//   & > svg {
//     color: var(--white);
//     height: 0.75rem;
//     width: 0.75rem;
//     cursor: pointer;
//   }

//   @media (min-width: 662px) {
//     bottom: 2%;
//     & > svg {
//       height: 1rem;
//       width: 1rem;
//     }
//   }
// `

const StyledProgressCounter = styled.div`
  /* display: none; */
  display: block;
  position: absolute;
  top: 0.8rem;
  color: var(--white);
  font-size: 0.9rem;

  @media (min-width: 662px) {
    top: unset;
    bottom: 1.5rem;
    font-size: 1.2rem;
  }
`
