import React from "react"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import PageSection from "../components/PageSection"
import Parallax from "../components/Parallax"

// import ModalController from "../components/ModalComponents/ModalController"
// import ProjectForm from "../components/FormComponents/ProjectForm"

const IndexPage = ({ data }) => {
  const { page } = data

  return (
    <>
      <SEO
        title="Quality Custom Cabinetry In Columbus, Ohio"
        description="Since 2002 we have been providing the highest quality custom cabinetry to our clients all over Columbus and Central Ohio. "
        image={page.bannerImage.file.url}
      />

      <HeroBanner image={page.bannerImage.fluid} text={page.bannerText} />

      {page.sections.map(section => {
        switch (section.__typename) {
          case "ContentfulPhotoSection":
            return (
              <section
                style={{ maxHeight: "30rem", overflow: "hidden" }}
                key={section.id}
              >
                <Parallax image={section.image} />
              </section>
            )

          case "ContentfulPageSection":
          default:
            return <PageSection section={section} key={section.id} />
        }
      })}
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    page: contentfulPage(title: { eq: "Home" }) {
      contentful_id
      ...HeroBannerFragment
      sections {
        ... on ContentfulPageSection {
          id: contentful_id
          sectionTitle
          sectionText {
            childMdx {
              body
            }
          }
          sectionImage {
            fluid(maxWidth: 1280, quality: 80) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          contentReferences {
            ... on ContentfulReview {
              contentful_id
              person
              text {
                text
              }
            }
            ... on ContentfulInformationText {
              id: contentful_id
              title
              information {
                childMdx {
                  body
                }
              }
            }
            ... on ContentfulProcessStep {
              id: contentful_id
              internal {
                type
              }
              title
              step
              description {
                childMdx {
                  body
                }
              }
              illustration {
                file {
                  url
                }
              }
            }
          }
        }
        ... on ContentfulPhotoSection {
          id: contentful_id
          image {
            fluid(maxWidth: 1920, quality: 90) {
              src
              ...GatsbyContentfulFluid_withWebp
            }
          }
          internal {
            type
          }
        }
      }
    }
  }
`
