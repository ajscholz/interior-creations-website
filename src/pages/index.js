import React, { useState } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import IconCard from "../components/IconCard"
import GridGroup from "../components/GridGroup"
import { P } from "../components/Typography"

import { MdComputer } from "react-icons/md"
import { FaHammer, FaInfinity } from "react-icons/fa"
import Section from "../components/Section"
import Title from "../components/Title"
import FlexContainer from "../components/FlexContainer"

const AnimatedP = animated(P)

const icons = [<MdComputer />, <FaHammer />, <FaInfinity />]

let text = []

const IndexPage = props => {
  const { data } = props

  const { page, section1, section2 } = data

  const [index, setIndex] = useState(0)
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(50%,0,0)" },
  })

  return (
    <>
      <SEO title="Home" />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <Section style={{ maxWidth: "700px" }}>
        <Title style={{ textAlign: "center" }}>{section1.title}</Title>
        <StyledFlexContainer>
          {section1.content.map((item, i) => {
            text[i] = ({ style }) => (
              <AnimatedP style={{ ...style }}>
                {item.information.information}
              </AnimatedP>
            )

            return (
              <IconCard
                current={index === i}
                icon={icons[i]}
                title={item.title}
                click={setIndex}
                cardNumber={i}
              />
            )
          })}
        </StyledFlexContainer>
        <TextWrapper>
          {transitions.map(({ item, props, key }) => {
            const Text = text[item]
            return <Text key={key} style={{ ...props, position: "absolute" }} />
          })}
        </TextWrapper>
      </Section>

      <Section>
        <Title>{section2.title}</Title>
      </Section>
    </>
  )
}

const StyledFlexContainer = styled(FlexContainer)`
  /* max-width: 0; */
  justify-content: space-evenly;

  @media (min-width: 662px) {
    justify-content: space-between;
  }
`

const StyledGridGroup = styled(GridGroup)`
  grid-gap: 0.25rem;

  @media (min-width: 662px) {
    grid-gap: 4rem;
  }
`

const TextWrapper = styled.div`
  position: relative;
  margin: 1rem auto 0;
  height: 90px;
  overflow: hidden;

  & > p {
    font-size: 0.8rem;
    margin-bottom: 0;
    text-align: center;
    @media (min-width: 576px) {
      font-size: 1rem;
      height: 80px;
    }
  }
`

export default IndexPage

export const query = graphql`
  {
    page: contentfulPage(title: { eq: "Home" }) {
      contentful_id
      bannerText
      bannerImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
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
    section1: contentfulPageSection(
      contentful_id: { eq: "phe9grYPyoLRJzY6IoY2d" }
    ) {
      title: sectionTitle
      content: contentReferences {
        ... on ContentfulInformationText {
          contentful_id
          title
          information {
            information
          }
        }
      }
    }
    section2: contentfulPageSection(
      contentful_id: { eq: "2uDsJfL05E53ZgLz9jN2fy" }
    ) {
      title: sectionTitle
      text: sectionText {
        text: sectionText
      }
      image: sectionImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
