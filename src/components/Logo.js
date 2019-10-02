import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Logo = () => {
  const { image } = useStaticQuery(logo)
  return <Img fluid={image.fluid} />
}

export default Logo

export const logo = graphql`
  {
    image: contentfulAsset(title: { eq: "Interior Creations Logo" }) {
      fluid(maxWidth: 150) {
        ...GatsbyContentfulFluid
      }
    }
  }
`
