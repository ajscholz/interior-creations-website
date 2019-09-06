import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
// import { H1 } from "./Typography"

const HeroBanner = props => {
  const { image, text, className } = props
  console.log(props)
  return (
    // <ImageWrapper>
    <BackgroundImage fluid={image} className={className}>
      <Overlay>
        <Wrapper>
          <h1>{text}</h1>
        </Wrapper>
      </Overlay>
    </BackgroundImage>
    // </ImageWrapper>
  )
}

HeroBanner.propTypes = {
  // image: PropTypes.element.isRequired,
  // text: PropTypes.string.isRequired,
}

export default styled(HeroBanner)`
  width: 100%;
  height: 63vw;
  max-height: 100vh;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  z-index: 0;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
  z-index: 1;
  color: var(--white);
  & h1 {
    font-size: 2rem;
    margin: 0;
  }
  @media (min-width: 576px) {
    padding: 2rem;
  }
  @media (min-width: 662px) {
    height: 26%;
    & h1 {
      font-size: 2.75rem;
    }
  }
  @media (min-width: 776px) {
    & h1 {
      font-size: 3.25rem;
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`
