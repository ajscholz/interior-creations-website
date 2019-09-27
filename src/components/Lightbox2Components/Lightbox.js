import React from "react"
import styled, { css } from "styled-components"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import { useTransition, useSpring, a } from "react-spring"

import ProgressBubbles from "../ProgressBubbles"

import Img from "gatsby-image"

const Lightbox = ({ className, images, onClose, index, setIndex, open }) => {
  const handleClick = dir => {
    const next = index + dir
    if (next < 0 || next > images.length + 1) {
      return
    }
    setIndex(next)
  }

  const showModal = useSpring({
    to: async next => {
      await next(open ? { display: "flex" } : { opacity: 0 })
      await next(open ? { opacity: 1 } : { display: "none" })
    },
    from: { display: "none", opacity: 0 },
  })

  const transitions = useTransition(index, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const AnimatedImg = a(Img)

  return (
    <a.div className={className} style={showModal}>
      <div className="blanket" onClick={() => onClose(false)}></div>
      <CloseButton onClick={() => onClose(false)}>
        <FiX />
      </CloseButton>

      <LeftButton onClick={() => handleClick(-1)} disabled={index === 0}>
        <FaChevronLeft />
      </LeftButton>

      <Img fluid={images[index].fluid} />
      {transitions.map(({ item, key, props }) =>
        item ? (
          <AnimatedImg style={props} fluid={images[item].fluid} unique={true} />
        ) : (
          <AnimatedImg style={props} fluid={images[item].fluid} unique={true} />
        )
      )}

      <RightButton
        onClick={() => handleClick(1)}
        disabled={index === images.length - 1}
      >
        <FaChevronRight />
      </RightButton>

      <StyledProgressBubbles
        number={images.length}
        current={index}
        set={setIndex}
      />
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

  ${props =>
    props.disabled &&
    css`
      & svg {
        opacity: 0.2;
        cursor: default;
      }
    `}
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
