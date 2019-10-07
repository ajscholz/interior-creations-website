import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import { graphql } from "gatsby"

import ModalController from "../components/ModalComponents/ModalController"
import ProjectForm from "../components/FormComponents/ProjectForm"
import { H1, P } from "../components/Typography"

import { animated, useSpring } from "react-spring"

import * as styles from "../utils/styles"
import Logo from "../components/Logo"
import SocialButtons from "../components/SocialButtons"

const IndexPage = props => {
  const { data } = props

  const width = window.innerWidth

  const infoBoxIn = useSpring({
    delay: 2000,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  const { page } = data

  return (
    <>
      <SEO title="Home">
        <meta
          name="description"
          content="this is a description I want to test"
        />
      </SEO>

      <StyledHeroBanner image={page.bannerImage.fluid}>
        <div className="content-wrapper">
          <animated.div className="content-box" style={infoBoxIn}>
            <div className="logo-wrapper">
              <Logo />
            </div>
            <H1>Pardon us. We're renovating.</H1>
            <P>
              In the meantime, let us know if there's a project you're
              interested in starting.
            </P>
            <ModalController
              buttonText={`Start My Project`}
              // buttonStyle="solid"
            >
              <ProjectForm />
            </ModalController>
            <StyledSocialButtons outline={true} />
          </animated.div>
        </div>
      </StyledHeroBanner>
    </>
  )
}

const StyledHeroBanner = styled(HeroBanner)`
  min-height: 100vh;
  min-width: 100vw;

  & .logo-wrapper {
    width: 125px;
    margin-bottom: auto;

    @media (min-width: 662px) {
      width: 200px;
      margin-bottom: 4rem;
    }
  }

  & .content-wrapper {
    z-index: 10;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;

    @media (min-width: 662px) {
      align-items: center;
    }
  }

  & .content-box {
    ${() => styles.flexCol}
    background: var(--white);
    padding: 2rem;
    height: 100%;
    width: 100%;
    ${() => styles.glassBkgd}

    @media (min-width: 662px) {
      height: auto;
      width: auto;
      padding: 4rem;
      border: 5px solid var(--secondary);
      box-shadow: var(--shadow2);
    }

    & p {
      margin-bottom: 2rem;
    }
  }
`

const StyledSocialButtons = styled(SocialButtons)`
  margin-top: auto;
  margin-bottom: -2rem;

  @media (min-width: 662px) {
    margin-top: 4rem;
  }
`

export default IndexPage

export const query = graphql`
  {
    page: contentfulPage(title: { eq: "Home" }) {
      contentful_id
      bannerText
      bannerImage {
        fluid(quality: 60) {
          ...GatsbyContentfulFluid_withWebp
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
  }
`
