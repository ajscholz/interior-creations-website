import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import Section from "../components/Section"
// import StartProjectSection from "../components/StartProjectSection"
import ImageGallery from "../components/ImageGallery"
import Lightbox from "../components/LightboxComponents/Lightbox"

const ProjectPage = ({ data }) => {
  const [state, setState] = useState({ open: false, index: 0 })

  const { type, featuredImage, otherImages } = data.project
  const gallery = otherImages.concat(featuredImage)

  const open = i => setState({ open: true, index: i })
  const close = () => setState({ open: false, index: 0 })
  const setIndex = i => setState({ open: true, index: i })

  return (
    <>
      <SEO
        title={`${type} Projects`}
        description={`View what a custom ${type.toLowerCase()} from Interior Creations can do for your home.`}
        image={featuredImage.file.url}
      />

      <HeroBanner image={featuredImage.fluid} text={`${type} Projects`} />
      <Section>
        <ImageGallery images={gallery} open={open} />
      </Section>
      {/* <StartProjectSection /> */}
      {state.open && (
        <Lightbox
          images={gallery}
          close={close}
          index={state.index}
          setIndex={setIndex}
          open={state.open}
        />
      )}
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
