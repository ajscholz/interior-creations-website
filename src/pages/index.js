import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import IconCard from "../components/IconCard"
import GridGroup from "../components/GridGroup"

import { MdComputer } from "react-icons/md"
import { FaHammer, FaInfinity } from "react-icons/fa"
import Section from "../components/Section"
import Avatar from "../components/Avatar"
import TeamMember from "../components/TeamMember"

import avImg from "../images/avatarsquare.jpg"

const text = [
  ({ style }) => (
    <animated.p style={{ ...style }}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
      quisquam? Consectetur voluptates debitis harum quibusdam sunt, cumque
      provident magni culpa a, iusto placeat ex cum architecto, perferendis modi
      ipsam ullam.
    </animated.p>
  ),
  ({ style }) => (
    <animated.p style={{ ...style }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quae
      enim, voluptatibus illo deserunt quia, natus in sunt, harum aperiam alias!
      Eveniet, tenetur. Quos ea quas sapiente nihil facilis alias?
    </animated.p>
  ),
  ({ style }) => (
    <animated.p style={{ ...style }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
      molestiae sint quis doloremque perspiciatis odio facilis consequuntur eius
      facere voluptates quaerat rem officiis cumque temporibus, qui natus in,
      mollitia eligendi.
    </animated.p>
  ),
]

const IndexPage = props => {
  const [index, setIndex] = useState(0)
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(50%,0,0)" },
  })

  const { data } = props
  return (
    <>
      <SEO title="Home" />

      <HeroBanner
        image={data.file.image.fluid}
        text="Quality, Custom Cabinets"
      />

      <Section>
        <TeamMember name="Andrew Scholz" image={ avImg } text={ `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturimolestiae sint quis doloremque perspiciatis odio facilis consequuntur eius facere voluptates quaerat rem officiis cumque temporibus.`} />
      </Section>

      <Section>
        <FlexContainer>
          <IconCard
            current={index === 0}
            icon={<MdComputer />}
            text={"Your Dream"}
            click={setIndex}
            cardNumber={0}
          />
          <IconCard
            current={index === 1}
            icon={<FaHammer />}
            text={"Hand-crafted"}
            click={setIndex}
            cardNumber={1}
          />
          <IconCard
            current={index === 2}
            icon={<FaInfinity />}
            text={"Built To Last"}
            click={setIndex}
            cardNumber={2}
          />
        </FlexContainer>
        <TextWrapper>
          {transitions.map(({ item, props, key }) => {
            const Text = text[item]
            return <Text key={key} style={{ ...props, position: "absolute" }} />
          })}
        </TextWrapper>
      </Section>
    </>
  )
}

const StyledGridGroup = styled(GridGroup)`
  grid-gap: 0.25rem;

  @media (min-width: 662px) {
    grid-gap: 4rem;
  }
`

const TextWrapper = styled.div`
  position: relative;
  margin: 1rem auto 0;
  width: 500px;
  /* border: 1px solid black; */
  height: 120px;
  overflow: hidden;
  max-width: 100%;
  & > p {
    font-size: 0.8rem;
    margin-bottom: 0;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }
`

const FlexContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  & > ${IconCard} {
    &:nth-of-type(2) {
      margin: 0 0.5rem;
    }
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
