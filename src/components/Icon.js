import React from "react"
import PropTypes from "prop-types"

const Icon = props => {
  const { icon } = props
  return <>{icon}</>
}

Icon.propTypes = {
  icon: PropTypes.element.isRequired,
}

export default Icon
