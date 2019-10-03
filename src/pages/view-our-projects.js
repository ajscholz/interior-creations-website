import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
import Title from "../components/Title"
import ImageSection from "../components/ImageSection"

import ModalController from "../components/ModalComponents/ModalController"
import ProjectForm from "../components/FormComponents/ProjectForm"
import MDX from "../components/MDX"

const ViewOurProjects = props => {
  const { data } = props
  const {
    page,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
  } = data

  const imageSections = [
    {
      data: section2,
      bText: `view ${section2.sectionTitle}`,
      link: `/view-our-projects/bathrooms/`,
    },
    {
      data: section3,
      bText: `view ${section3.sectionTitle}`,
      link: `/view-our-projects/kitchens/`,
    },
    {
      data: section4,
      bText: `view ${section4.sectionTitle}`,
      link: `/view-our-projects/mudrooms/`,
    },
    {
      data: section5,
      bText: `view ${section5.sectionTitle}`,
      link: `/view-our-projects/home-offices/`,
    },
    {
      data: section6,
      bText: `view cabinet refacing`,
      link: `/view-our-projects/cabinet-refacing/`,
    },
  ]

  return (
    <>
      <SEO title="Our Projects" />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <StyledSection style={{ maxWidth: "1000px" }}>
        <Title style={{ textAlign: "center" }}>{section1.title}</Title>
        <MDX style={{ textAlign: "center" }}>
          {section1.sectionText.childMdx.body}
        </MDX>
        <ModalController buttonText="Start My Project">
          <ProjectForm />
        </ModalController>
      </StyledSection>

      {imageSections.map((section, index) => {
        return (
          <ImageSection
            data={section.data}
            key={section.data.id}
            button={section.bText}
            link={section.link}
            reverse={index % 2 === 0 ? false : true}
          />
        )
      })}
    </>
  )
}

const StyledSection = styled(Section)`
  & button {
    width: 100%;

    @media (min-width: 662px) {
      width: auto;
      margin: 0 auto;
    }
  }

  & p {
    text-align: center;
  }
`

export default ViewOurProjects

export const data = graphql`
  fragment sectionFields on ContentfulPageSection {
    id: contentful_id
    sectionTitle
    sectionText {
      childMdx {
        body
      }
    }
    sectionImage {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
  }

  query {
    page: contentfulPage(title: { eq: "View Projects" }) {
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
      sections {
        contentful_id
        sectionTitle
      }
    }
    section1: contentfulPageSection(
      contentful_id: { eq: "6o3jtETVFN4sift2xvotta" }
    ) {
      title: sectionTitle
      sectionText {
        childMdx {
          body
        }
      }
    }
    section2: contentfulPageSection(
      contentful_id: { eq: "MaNeuszkTF2vsgMRSpEOs" }
    ) {
      ...sectionFields
    }
    section3: contentfulPageSection(
      contentful_id: { eq: "4UM7RxbnD4PEtainIYXiLX" }
    ) {
      ...sectionFields
    }
    section4: contentfulPageSection(
      contentful_id: { eq: "7EYPLR7j0Y44ysNKuMfnqj" }
    ) {
      ...sectionFields
    }
    section5: contentfulPageSection(
      contentful_id: { eq: "6sICkPcRtWJqveU52g6Tnv" }
    ) {
      ...sectionFields
    }
    section6: contentfulPageSection(
      contentful_id: { eq: "5cmTKA64ujwKa5DyCaAcF5" }
    ) {
      ...sectionFields
    }
  }
`
