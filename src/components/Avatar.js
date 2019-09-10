import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Img from "gatsby-image"

const Avatar = props => {
  const { className, image } = props
  return <Img fluid={image.fluid} alt={props.alt} className={className} />
}

Avatar.propTypes = {
  image: PropTypes.shape({
    fluid: PropTypes.any.isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
}

export default styled(Avatar)`
  border-radius: 50%;
`
