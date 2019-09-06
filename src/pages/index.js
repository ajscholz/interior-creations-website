import React, { useState } from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import IconCard from "../components/IconCard"
import GridGroup from "../components/GridGroup"

import { MdComputer } from "react-icons/md"
import { FaHammer, FaInfinity } from "react-icons/fa"

const IndexPage = props => {
  const [currentPanel, setCurrentPanel] = useState(1)

  const { data } = props
  return (
    <>
      <SEO title="Home" />
      <HeroBanner
        image={data.file.image.fluid}
        text="Quality,&nbsp;Custom Cabinets"
      />
      <section style={{ minHeight: "500px", padding: "2.5vw" }}>
        <StyledGridGroup center>
          <IconCard
            current={currentPanel === 1}
            icon={<MdComputer />}
            text={"Your Dream"}
            click={setCurrentPanel}
            cardNumber={1}
          />
          <IconCard
            current={currentPanel === 2}
            icon={<FaHammer />}
            text={"Handcrafted"}
            click={setCurrentPanel}
            cardNumber={2}
          />
          <IconCard
            current={currentPanel === 3}
            icon={<FaInfinity />}
            text={"Built To Last"}
            click={setCurrentPanel}
            cardNumber={3}
          />
        </StyledGridGroup>
      </section>
    </>
  )
}

const StyledGridGroup = styled(GridGroup)`
  grid-gap: 0.25rem;

  @media (min-width: 662px) {
    grid-gap: 4rem;
  }
`

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
