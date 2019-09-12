import React from "react"
import styled from "styled-components"

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

      <SectionTwo>
        <Title>{section2.sectionTitle}</Title>
        <TeamWrapper>
          {section2.teamMembers.map(person => (
            <TeamMember person={person} key={person.contentful_id} />
          ))}
        </TeamWrapper>
      </SectionTwo>

      <Section>
        <Title>{section3.sectionTitle}</Title>
        map goes here
      </Section>
    </>
  )
}

const TeamWrapper = styled.div`
  max-width: 700px;
`

const SectionTwo = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & ${Title} {
    text-align: center;
    margin-bottom: 3rem;
  }
`

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
