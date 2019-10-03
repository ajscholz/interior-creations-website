import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
import Title from "../components/Title"
import { P } from "../components/Typography"
import TeamMember from "../components/TeamMember"
import LinkButton from "../components/LinkButton"
import MDX from "../components/MDX"

const AboutInteriorCreations = props => {
  const { data } = props
  const { page, section1, section3 } = data

  return (
    <>
      <SEO title="Who We Are" />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <Section>
        <Title>{section1.sectionTitle}</Title>
        <MDX>{section1.sectionText.childMdx.body}</MDX>
      </Section>

      <StyledSection>
        <Title style={{ textAlign: "center" }}>Our Awards</Title>
        <GridContainer>
          <img
            src="https://st.hzcdn.com/static/badge_44_8@2x.png"
            alt="Jeff Blevins in New Albany, OH on Houzz"
          />

          <img
            src="https://st.hzcdn.com/static/badge_47_8@2x.png"
            alt="Jeff Blevins in New Albany, OH on Houzz"
          />

          <img
            src="https://st.hzcdn.com/static/badge_41_8@2x.png"
            alt="Jeff Blevins in New Albany, OH on Houzz"
          />
        </GridContainer>
        <LinkButton
          style={{
            textAlign: "center",
            maxWidth: "300px",
            margin: "2rem auto 0",
          }}
          type="external"
          link="https://www.houzz.com/pro/jeff2413"
          target="_blank"
          rel="noopener noreferrer"
        >
          View us on Houzz
        </LinkButton>
      </StyledSection>

      <Section>
        <Title style={{ marginBottom: "3rem", textAlign: "center" }}>
          {section3.sectionTitle}
        </Title>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {section3.teamMembers.map(person => (
            <TeamMember person={person} key={person.contentful_id} />
          ))}
        </div>
      </Section>
    </>
  )
}

const StyledSection = styled(Section)`
  /* & ${LinkButton} {

  } */
`

const GridContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.75fr;
  grid-gap: 0.8rem;
  height: auto;
  max-height: 160px;
  margin: 0 auto;
  justify-content: center;
  & img {
    margin-bottom: 0;
  }
  @media (min-width: 576px) {
    grid-template-columns: 96px 128px 96px;
    grid-gap: 1rem;
  }

  @media (min-width: 662px) {
    grid-template-columns: 120px 160px 120px;
    grid-gap: 1.5rem;
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
    section3: contentfulPageSection(
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
  }
`
