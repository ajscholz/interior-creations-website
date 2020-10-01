import React from "react"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"
import PageSection from "../components/PageSection"
import Parallax from "../components/Parallax"

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

      {/* {page.sections.map(section => {
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
      })} */}
    </>
  )
}

export default HowWeWorkPage

export const query = graphql`
  {
    page: contentfulPage(title: { eq: "Home" }) {
      contentful_id
      ...HeroBannerFragment
    }
  }
`
