import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import { H1 } from "./Typography"

const HeroBanner = props => {
  const { image, text, className, children } = props
  return (
    // <ImageWrapper>
    <BackgroundImage fluid={image} className={className}>
      <Overlay>
        <Wrapper>
          <H1 style={{ margin: "0" }}>{text}</H1>
        </Wrapper>
      </Overlay>
      {children}
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
  min-height: 50vh;
  max-height: 80vh;
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
  padding: 5vw 5vw;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
  z-index: 1;
  color: var(--white);

  @media (min-width: 662px) {
    padding: 2rem 4rem;
    width: 100%;
    height: 26%;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`

export const query = graphql`
  fragment HeroBannerFragment on ContentfulPage {
    bannerText
    bannerImage {
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyContentfulFluid_withWebp
      }
      file {
        details {
          image {
            height
            width
          }
        }
      }
    }
  }
`
