import React from "react"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import PageSection from "../components/PageSection"
import Parallax from "../components/Parallax"
import Section from "../components/Section"
import Title from "../components/Title"
import Button from "../components/Button"

const HowWeWorkPage = ({ data }) => {
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

      <Section>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>Get Started Now</Title>
          <div>
            <p>
              Don't wait any longer. We're ready to get started making your
              dream reality with the highest quality custom cabinets and the
              best customer service you'll find.
            </p>
            <p>
              Just click the button below to give us a call and get the process
              started today!
            </p>
          </div>
          <Button
            as="a"
            href="tel:6149893503"
            large
            style={{ marginTop: "2rem", marginRight: "auto" }}
          >
            Call Us Now
          </Button>
        </div>
      </Section>
    </>
  )
}

export default HowWeWorkPage

export const query = graphql`
  {
    page: contentfulPage(title: { eq: "How We Work" }) {
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

          contentReferences {
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
