import React, { useState } from "react"
import styled from "styled-components"
import IconCard from "../components/IconCard"
import Section from "../components/Section"
import Title from "../components/Title"
import FlexContainer from "../components/FlexContainer"
import ImageSection from "../components/ImageSection"
import Reviews from "../components/ReviewComponents/Reviews"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Button from "../components/Button"

import { BsCloud, BsPeople } from "react-icons/bs"
import { GiCircularSaw } from "react-icons/gi"
import { useTransition, animated } from "react-spring"
import { H4 } from "./Typography"

const icons = [<BsCloud />, <GiCircularSaw />, <BsPeople />]

let text = []

const PageSection = ({ section }) => {
  const [index, setIndex] = useState(0)

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  })

  switch (section.id) {
    // We Bring Your Dreams To Life
    case "phe9grYPyoLRJzY6IoY2d":
      return (
        <Section>
          <Wrapper>
            <Title style={{ textAlign: "center" }}>
              {section.sectionTitle}
            </Title>

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
          </Wrapper>
        </Section>
      )

    // Our Process
    case "2uDsJfL05E53ZgLz9jN2fy":
      console.log(section)
      return (
        <Section>
          <Title style={{ textAlign: "center" }}>{section.sectionTitle}</Title>
          {/* <div style={{ textAlign: "center" }}>
            <MDXRenderer>{section.sectionText.childMdx.body}</MDXRenderer>
          </div> */}
          {section.contentReferences.map(step => {
            return (
              <ProcessWrapper key={step.id}>
                <img
                  alt=""
                  src={step.illustration.file.url}
                  key={step.illustration.file.url}
                />
                <div>
                  <H4>
                    Step {step.step}: {step.title}
                  </H4>
                  <MDXRenderer>{step.description.childMdx.body}</MDXRenderer>
                </div>
              </ProcessWrapper>
            )
          })}
        </Section>
      )

    // What They Say
    case "6wpdhdbMpZnZw3558QnaT7":
      return (
        <StyledSection>
          <Title style={{ textAlign: "center" }}>{section.sectionTitle}</Title>
          <Reviews reviewData={section.contentReferences} />
        </StyledSection>
      )

    // Bring Your Dreams To Life
    case "33v3fTT7KSZgAD5KTmHCh":
      return (
        <ImageSection
          data={section}
          button={
            <Button as="a" href="tel:6149893503">
              Call Us Now
            </Button>
          }
          reverse
        />
      )
    default:
      return null
  }
}

export default PageSection

const StyledFlexContainer = styled(FlexContainer)`
  justify-content: space-around;

  @media (min-width: 662px) {
    justify-content: space-around;
  }
`

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

const ProcessWrapper = styled(Wrapper)`
  margin-top: 3rem;
  display: flex;
  align-items: center;

  & img {
    width: 30%;
    margin-right: 2rem;
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    div {
      text-align: right;
    }

    img {
      margin-right: 0;
      margin-left: 2rem;
    }
  }
`

const StyledSection = styled(Section)`
  /* margin-bottom: 28.8px; */
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
