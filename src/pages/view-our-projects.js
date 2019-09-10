import React from "react"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
import Title from "../components/Title"
import { P } from "../components/Typography"
import ImageSection from "../components/ImageSection"
import Button from "../components/Button"

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
      link: `/view-our-projects/bathrooms`,
    },
    {
      data: section3,
      bText: `view ${section3.sectionTitle}`,
      link: `/view-our-projects/kitchens`,
    },
    {
      data: section4,
      bText: `view ${section4.sectionTitle}`,
      link: `/view-our-projects/mudrooms`,
    },
    {
      data: section5,
      bText: `view ${section5.sectionTitle}`,
      link: `/view-our-projects/home-office`,
    },
    {
      data: section6,
      bText: `view cabinet refacing`,
      link: `/view-our-projects/cabinet-refacing`,
    },
  ]

  return (
    <>
      <SEO title="Our Projects" />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <Section style={{ maxWidth: "1000px" }}>
        <Title style={{ textAlign: "center" }}>{section1.title}</Title>
        <P style={{ textAlign: "center" }}>{section1.text.sectionText}</P>
        <Button center>Start My Project Now</Button>
      </Section>

      {imageSections.map(section => {
        return (
          <ImageSection
            data={section.data}
            key={section.data.id}
            buttonText={section.bText}
            link={section.link}
          />
        )
      })}
    </>
  )
}

export default ViewOurProjects

export const data = graphql`
  fragment sectionFields on ContentfulPageSection {
    id: contentful_id
    sectionTitle
    sectionText {
      sectionText
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
      text: sectionText {
        sectionText
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
