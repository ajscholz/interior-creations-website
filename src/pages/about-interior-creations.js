import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
import Title from "../components/Title"
import { P } from "../components/Typography"
import TeamMember from "../components/TeamMember"

const AboutInteriorCreations = props => {
  const { data } = props
  const { page, section1, section2, section3 } = data

  return (
    <>
      <SEO title="Who We Are" />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <Section>
        <Title>{section1.sectionTitle}</Title>
        <P>{section1.sectionText.sectionText}</P>
      </Section>

      <Section>
        <Title style={{ marginBottom: "3rem", textAlign: "center" }}>
          {section2.sectionTitle}
        </Title>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {section2.teamMembers.map(person => (
            <TeamMember person={person} key={person.contentful_id} />
          ))}
        </div>
      </Section>

      <Section>
        <Title>{section3.sectionTitle}</Title>
        map goes here
      </Section>
    </>
  )
}

export default AboutInteriorCreations

export const data = graphql`
  {
    page: contentfulPage(title: { eq: "Get To Know Us" }) {
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
      contentful_id: { eq: "6yj2OKIzUNEXCaZnq1yPF5" }
    ) {
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
    section2: contentfulPageSection(
      contentful_id: { eq: "1YpQ8d5wL8XkhoCZsxXD5B" }
    ) {
      sectionTitle
      teamMembers: contentReferences {
        ... on ContentfulTeamMember {
          contentful_id
          name
          profile {
            profile
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    section3: contentfulPageSection(
      contentful_id: { eq: "4Nep2cQrOTN3DL9IQ4zs9m" }
    ) {
      sectionTitle
    }
  }
`
