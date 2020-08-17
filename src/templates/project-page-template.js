import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
import StartProjectSection from "../components/StartProjectSection"
import ImageGallery from "../components/ImageGallery"

const ProjectPage = ({ data }) => {
  const { type, featuredImage, otherImages } = data.project

  const gallery = otherImages.concat(featuredImage)

  return (
    <>
      <SEO
        title={`${type} Projects`}
        description={`View what a custom ${type.toLowerCase()} from Interior Creations can do for your home.`}
        image={featuredImage.file.url}
      />

      <HeroBanner image={featuredImage.fluid} text={`${type} Projects`} />
      <Section>
        <ImageGallery gallery={gallery} />
      </Section>
      <StartProjectSection />
    </>
  )
}

export default ProjectPage

export const query = graphql`
  query($slug: String!) {
    project: contentfulProjectType(slug: { eq: $slug }) {
      type
      slug
      ...FeaturedImageFragment
      ...ImageGalleryFragment
    }
  }
`
