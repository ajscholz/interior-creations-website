import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Section from "./Section"
import Title from "./Title"
import { P } from "./Typography"
import Img from "gatsby-image"
import Button from "./Button"
import { Link } from "gatsby"

const ImageSection = props => {
  const { data, link, buttonText, className } = props
  const { sectionTitle: title, sectionText: text, sectionImage: image } = data

  return (
    <Section className={className}>
      <div className="wrapper">
        <Title>{title}</Title>
        <P>{text.sectionText}</P>
        <StyledImg fluid={image.fluid} />
        <Button>
          <Link to={link}>{buttonText}</Link>
        </Button>
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
  link: PropTypes.string.isRequired,
}

const StyledImg = styled(Img)``

export default styled(ImageSection)`
  & .gatsby-image-wrapper {
    max-height: 350px;
  }

  & ${Button} {
    margin-top: 1.25rem;
    width: 100%;
  }

  @media (min-width: 576px) {
    & ${Button} {
      width: unset;
    }
  }

  @media (min-width: 900px) {
    position: relative;
    padding: 6rem calc(50% + 4rem) 6rem 4rem;

    & .wrapper {
      margin: 0 auto;
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
    }
  }
`
