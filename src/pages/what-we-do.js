import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
import Title from "../components/Title"
import ImageSection from "../components/ImageSection"

import ModalController from "../components/ModalComponents/ModalController"
import ProjectForm from "../components/FormComponents/ProjectForm"
import MDX from "../components/MDX"

const ViewOurProjects = ({ data: { page } }) => {
  const sections = page.sections.slice(0, -1)
  const buttonSection = page.sections[page.sections.length - 1]

  sections.forEach(section => {
    section.ref = section.contentReferences[0]
    section.sectionImage = section.ref.featuredImage
  })

  return (
    <>
      <SEO
        title="What We Do"
        description="A cabinet maker is only as good as their work. Take a look at some of our projects around the Columbus Ohio area to see the quality custom cabinets you could have in your home."
        image={page.bannerImage.file.url}
      />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      {sections.map((section, index) => {
        return (
          <ImageSection
            data={section}
            key={section.id}
            link={`/projects/${section.ref.slug}`}
            button={`View ${section.sectionTitle}`}
            reverse={index % 2 === 0 ? false : true}
          />
        )
      })}

      <StyledSection style={{ maxWidth: "1000px" }}>
        <Title style={{ textAlign: "center" }}>{buttonSection.title}</Title>
        <MDX style={{ textAlign: "center" }}>
          {buttonSection.sectionText.childMdx.body}
        </MDX>
        <ModalController buttonText="Start My Project">
          <ProjectForm />
        </ModalController>
      </StyledSection>
    </>
  )
}

const StyledSection = styled(Section)`
  background: var(--lightestgray) !important;
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

  @media (min-width: 900px) {
    background: var(--white) !important;
  }
`

export default ViewOurProjects

export const data = graphql`
  fragment sectionFields on ContentfulPageSection {
    id: contentful_id
    ...ImageSectionFragment
  }

  query {
    page: contentfulPage(title: { eq: "View Projects" }) {
      contentful_id
      ...HeroBannerFragment

      sections {
        id: contentful_id
        ...ImageSectionFragment
        contentReferences {
          ... on ContentfulProjectType {
            type
            slug
            featuredImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
