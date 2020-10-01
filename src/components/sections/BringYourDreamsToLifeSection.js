import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { useState } from "react"
import { BsCloud, BsPeople } from "react-icons/bs"
import { GiCircularSaw } from "react-icons/gi"
import { useTransition, animated } from "react-spring"
import styled from "styled-components"
import Container from "../Container"
import FlexContainer from "../FlexContainer"
import IconCard from "../IconCard"
import Section from "../Section"
import Title from "../Title"

const icons = [<BsCloud />, <GiCircularSaw />, <BsPeople />]

let text = []

const BringYourDreamsToLifeSection = ({ section }) => {
  const [index, setIndex] = useState(0)

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  })

  return (
    <Section>
      <Container size="sm">
        <Title style={{ textAlign: "center" }}>{section.sectionTitle}</Title>

        <StyledFlexContainer>
          {section.contentReferences.map((item, i) => {
            text[i] = ({ style }) => (
              <animated.div style={style} key={i}>
                <MDXRenderer>{item.information.childMdx.body}</MDXRenderer>
              </animated.div>
            )

            return (
              <IconCard
                key={item.contentful_id}
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
            return <Text key={key} style={props} />
          })}
        </TextWrapper>
      </Container>
    </Section>
  )
}

export default BringYourDreamsToLifeSection

const StyledFlexContainer = styled(FlexContainer)`
  justify-content: space-around;

  @media (min-width: 662px) {
    justify-content: space-around;
  }
`
const TextWrapper = styled.div`
  position: relative;
  /* display: flex; */
  margin: 1rem auto 0;
  height: 230px;
  overflow: hidden;

  & > div {
    position: absolute;

    & > p {
      /* font-size: 0.8rem; */
      margin-bottom: 0;
      text-align: center;

      & a {
        color: var(--primary);
        font-weight: bold;
      }
      @media (min-width: 576px) {
        font-size: 1rem;
      }
    }
  }

  /* MEDIA QUERIES FOR TEXT BLOCK WITH ABSOLUTE POSITIONING */
  @media (min-width: 343px) {
    height: 207px;
  }
  @media (min-width: 383px) {
    height: 184px;
  }
  @media (min-width: 445px) {
    height: 161px;
  }
  @media (min-width: 515px) {
    height: 138px;
  }
  @media (min-width: 625px) {
    height: 115px;
  }
  @media (min-width: 668px) {
    height: 138px;
  }
  @media (min-width: 691px) {
    height: 115px;
  }
  @media (min-width: 800px) {
    height: 90px;
  }
`
