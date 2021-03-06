import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"

import Title from "./Title"
import Img from "gatsby-image"
import Button from "./Button"
import LinkButton from "./LinkButton"
import MDX from "./MDX"

const ImageSection = props => {
  const { data, link, className, button } = props

  const {
    sectionTitle: title,
    sectionText: {
      childMdx: { body },
    },
    sectionImage: image,
  } = data

  return (
    <section className={className}>
      <div className="wrapper">
        <Title>{title}</Title>
        <MDX>{body}</MDX>
        {/* <P>{text.sectionText}</P> */}
        <Img fluid={image.fluid} />
        {typeof button === "string" ? (
          <LinkButton link={link}>{button}</LinkButton>
        ) : typeof button === "string" ? null : (
          button
        )}
      </div>
    </section>
  )
}

ImageSection.propTypes = {
  data: PropTypes.shape({
    sectionImage: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionText: PropTypes.shape({
      childMdx: PropTypes.shape({
        body: PropTypes.string.isRequired,
      }),
    }),
  }),
  // button: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
}

export default styled(ImageSection)`
  padding: 4rem 5vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
    &:nth-of-type(even) {
    background: var(--lightestgray);
  }

  & .gatsby-image-wrapper {
    max-height: 350px;
  }

  & a, button {
    margin-top: 1.25rem;
    width: 100%;
    text-align: center;
  }

  /* @media (min-width: 900px) {
    & ${Button} {
      width: unset;
    }
  } */

  @media (min-width: 662px) {
    padding: 4rem;
    width: 100%;
  }

  @media (min-width: 900px) {
    position: relative;
    padding: 6rem calc(50% + 1rem) 6rem 4rem;
    background: var(--lightestgray);

    & .wrapper {
      align-self: flex-end;
      max-width: calc(550px - 3rem);
      margin-right: 3rem
    }

    & .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      max-height: unset;
    }

    & a, button {
      margin-top: 0;
      width: unset;
      display: inline-block;
      text-align: unset;
      margin-right: auto;
    }

    ${props =>
      props.reverse &&
      css`
        padding: 6rem 4rem 6rem calc(50% + 1rem);
        text-align: right;

        & .wrapper {
          align-self: flex-start;
          margin-left: 3rem;
        }

        & .gatsby-image-wrapper {
          left: 0;
          right: unset;
        }
        & a,
        button {
          margin-left: auto;
        }
      `}
    
  }

  @media (min-width: 1000px) {
    padding-top: 8rem !important;
    padding-bottom: 8rem !important;
  }
`
export const query = graphql`
  fragment ImageSectionFragment on ContentfulPageSection {
    sectionTitle
    sectionText {
      childMdx {
        body
      }
    }
    sectionImage {
      fluid(quality: 80) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
