import React from "react"

import SEO from "../components/seo"
import Logo from "../components/Logo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"

const IndexPage = props => {
  const { data } = props
  return (
    <>
      <SEO title="Home" />
      <HeroBanner
        image={data.file.image.fluid}
        text="Quality,&nbsp;Custom Cabinets"
      />
      <section style={{ minHeight: "500px" }}>Hi from section</section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    file(name: { eq: "01" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
