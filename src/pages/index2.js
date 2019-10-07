import React, { useState } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import IconCard from "../components/IconCard"
import { P } from "../components/Typography"

import { MdComputer } from "react-icons/md"
import { FaHammer, FaInfinity } from "react-icons/fa"
import Section from "../components/Section"
import Title from "../components/Title"
import FlexContainer from "../components/FlexContainer"
import ImageSection from "../components/ImageSection"
import Reviews from "../components/ReviewComponents/Reviews"

import ModalController from "../components/ModalComponents/ModalController"
import ProjectForm from "../components/FormComponents/ProjectForm"

const AnimatedP = animated(P)

const icons = [<MdComputer />, <FaHammer />, <FaInfinity />]

let text = []

const IndexPage = props => {
  const { data } = props

  const { page, section1, section2, section3, section4 } = data

  const [index, setIndex] = useState(0)

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  })

  return (
    <>
      <SEO title="Home">
        <meta
          name="description"
          content="this is a description I want to test"
        />
      </SEO>

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <Section>
        <Wrapper>
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
              return (
                <Text key={key} style={{ ...props, position: "absolute" }} />
              )
            })}
          </TextWrapper>
        </Wrapper>
      </Section>

      <ImageSection
        data={section2}
        button={`View Our Projects`}
        link={"/view-our-projects/"}
      />

      <StyledSection>
        <Title style={{ textAlign: "center" }}>{section3.sectionTitle}</Title>
        <Reviews reviewData={section3.reviewData} />
      </StyledSection>

      <ImageSection
        data={section4}
        button={
          <ModalController buttonText={`Start the Process Now`}>
            <ProjectForm />
          </ModalController>
        }
        reverse
      />
    </>
  )
}

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

const StyledSection = styled(Section)`
  margin-bottom: 28.8px;
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
        fluid(quality: 60) {
          ...GatsbyContentfulFluid_withWebp
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
      sectionTitle
      sectionText {
        childMdx {
          body
        }
      }
      sectionImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    section3: contentfulPageSection(
      contentful_id: { eq: "6wpdhdbMpZnZw3558QnaT7" }
    ) {
      sectionTitle
      reviewData: contentReferences {
        ... on ContentfulReview {
          contentful_id
          person
          text {
            text
          }
        }
      }
    }
    section4: contentfulPageSection(
      contentful_id: { eq: "33v3fTT7KSZgAD5KTmHCh" }
    ) {
      sectionTitle
      sectionText {
        childMdx {
          body
        }
      }
      sectionImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`