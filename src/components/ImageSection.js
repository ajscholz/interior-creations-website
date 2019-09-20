import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Section from "./Section"
import Title from "./Title"
import { P } from "./Typography"
import Img from "gatsby-image"
import Button from "./Button"
import { Link } from "gatsby"

const ImageSection = props => {
  const { data, link, buttonText, className } = props
  const { sectionTitle: title, sectionText: text, sectionImage: image } = data

  const handleClick = e => {
    e.preventDefault()
    link(true)
  }

  return (
    <Section className={className}>
      <div className="wrapper">
        <Title>{title}</Title>
        <P>{text.sectionText}</P>
        <Img fluid={image.fluid} />
        {typeof link === "function" ? (
          <Button
            onClick={typeof link === "function" ? e => handleClick(e) : null}
          >
            {buttonText}
          </Button>
        ) : (
          <Button>
            <Link to={link}>{buttonText}</Link>
          </Button>
        )}
      </div>
    </Section>
  )
}

ImageSection.propTypes = {
  data: PropTypes.shape({
    sectionImage: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
    sectionTitle: PropTypes.string.isRequired,
    sectionText: PropTypes.shape({
      sectionText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default styled(ImageSection)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & .gatsby-image-wrapper {
    max-height: 350px;
  }

  & ${Button} {
    margin-top: 1.25rem;
    width: 100%;
  }

  /* @media (min-width: 900px) {
    & ${Button} {
      width: unset;
    }
  } */

  @media (min-width: 900px) {
    position: relative;
    padding: 6rem calc(50% + 4rem) 6rem 4rem;
    background: var(--lightestgray);

    & .wrapper {
      align-self: flex-end;
      max-width: 500px;
    }

    & .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      max-height: unset;
    }

    & ${Button} {
      margin-top: 0;
      width: unset;
    }

    ${props =>
      props.reverse &&
      css`
        padding: 6rem 4rem 6rem calc(50% + 4rem);
        text-align: right;

        & .wrapper {
          align-self: flex-start;
        }

        & .gatsby-image-wrapper {
          left: 0;
          right: unset;
        }
        & ${Button} {
          margin-left: auto;
        }
      `}
    
  }

  @media (min-width: 1000px) {
    padding-top: 8rem !important;
    padding-bottom: 8rem !important;
  }
`
