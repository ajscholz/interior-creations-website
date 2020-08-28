import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
import Title from "../components/Title"
// import TeamMember from "../components/TeamMember"
import LinkButton from "../components/LinkButton"
import MDX from "../components/MDX"
import Quote from "../components/Quote"
// import ModalController from "../components/ModalComponents/ModalController"
// import ProjectForm from "../components/FormComponents/ProjectForm"
import Image from "gatsby-image"

const AboutInteriorCreations = props => {
  const { data } = props
  const { page, section1, section2 } = data

  return (
    <>
      <SEO
        title="Who We Are"
        description="Hiring someone to build custom cabinets is a big decision, but it doesn't have to be a scary one."
        image={page.bannerImage.file.url}
      />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      <Section1>
        <Title>{section1.sectionTitle}</Title>
        <MDX>{section1.sectionText.childMdx.body}</MDX>
        <div className="signature">
          <div className="name">- Jeff</div>
          <div className="title">{`Founder & Owner`}</div>
          <div className="avatar">
            <Image fixed={data.jeff.fixed} />
          </div>
        </div>
        {/* <ModalController buttonText="Discover the Difference">
          <ProjectForm />
        </ModalController> */}
      </Section1>

      <Section2>
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
      </Section2>

      <Section>
        <Quote
          author={section2.quotes[0].person}
          quote={section2.quotes[0].quote.childMdx.body}
        />
      </Section>

      {/* <Section>
        <Title style={{ marginBottom: "3rem", textAlign: "center" }}>
          {section3.sectionTitle}
        </Title>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {section3.teamMembers.map(person => (
            <TeamMember person={person} key={person.contentful_id} />
          ))}
        </div>
      </Section> */}
    </>
  )
}

const Section1 = styled(Section)`
  & p:last-of-type {
    /* text-align: right; */
    /* margin-bottom: 2rem; */
  }

  & .signature {
    margin-left: auto;
    width: max-content;
    display: grid;

    /* grid-template-rows: min-content 1fr; */
    grid-column-gap: 2rem;
    grid-template-areas:
      "name avatar"
      "title avatar";

    & .name {
      grid-area: name;
      align-self: end;
      text-align: right;
      font-size: 1.35rem;
    }
    & .title {
      grid-area: title;
      align-self: start;
      text-align: right;
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
      font-style: italic;
      color: var(--lightgray);
      opacity: 0.5;
    }

    & .avatar {
      grid-area: avatar;
    }
    & .gatsby-image-wrapper {
      border-radius: 50%;
      overflow: hidden;
    }
  }
`

const Section2 = styled(Section)`
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
      ...HeroBannerFragment
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
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    section2: contentfulPageSection(
      contentful_id: { eq: "2whyWCZKNViSd2aFV07fgL" }
    ) {
      quotes: contentReferences {
        ... on ContentfulQuote {
          person
          quote: childContentfulQuoteQuoteTextNode {
            childMdx {
              body
            }
          }
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
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }

    jeff: contentfulAsset(contentful_id: { eq: "2SIxKzzGqC9ETEgwGmA0me" }) {
      fixed(width: 100, quality: 100) {
        ...GatsbyContentfulFixed_withWebp
      }
    }
  }
`
