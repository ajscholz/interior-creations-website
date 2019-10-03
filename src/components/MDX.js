import React from "react"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MDX = props => {
  const { children } = props

  return <MDXRenderer>{children}</MDXRenderer>
}

MDX.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MDX
