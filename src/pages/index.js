import React, { useState } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import IconCard from "../components/IconCard"

import { BsCloud, BsPeople } from "react-icons/bs"
import { GiCircularSaw } from "react-icons/gi"
import Section from "../components/Section"
import Title from "../components/Title"
import FlexContainer from "../components/FlexContainer"
import ImageSection from "../components/ImageSection"
import Reviews from "../components/ReviewComponents/Reviews"

// import ModalController from "../components/ModalComponents/ModalController"
// import ProjectForm from "../components/FormComponents/ProjectForm"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Button from "../components/Button"

const icons = [<BsCloud />, <GiCircularSaw />, <BsPeople />]

let text = []

const IndexPage = ({ data }) => {
  const { page, section1, section2, section3, section4 } = data

  const [index, setIndex] = useState(0)

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  })

  return (
    <>
      <SEO
        title="Quality Custom Cabinetry In Columbus, Ohio"
        description="Since 2002 we have been providing the highest quality custom cabinetry to our clients all over Columbus and Central Ohio. "
        image={page.bannerImage.file.url}
      />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <Section>
        <Wrapper>
          <Title style={{ textAlign: "center" }}>{section1.title}</Title>

          <StyledFlexContainer>
            {section1.content.map((item, i) => {
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

      <ImageSection
        data={section2}
        button={`View Our Projects`}
        link={"/what-we-do/"}
      />

      <StyledSection>
        <Title style={{ textAlign: "center" }}>{section3.sectionTitle}</Title>
        <Reviews reviewData={section3.reviewData} />
      </StyledSection>

      <ImageSection
        data={section4}
        button={
          <Button as="a" href="tel:6149893503">
            Call Us Now
          </Button>
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

export default IndexPage

export const query = graphql`
  {
    page: contentfulPage(title: { eq: "Home" }) {
      contentful_id
      ...HeroBannerFragment
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
            childMdx {
              body
            }
          }
        }
      }
    }
    section2: contentfulPageSection(
      contentful_id: { eq: "2uDsJfL05E53ZgLz9jN2fy" }
    ) {
      ...ImageSectionFragment
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
      ...ImageSectionFragment
    }
  }
`
