import React from "react"
import styled from "styled-components"
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"

import SocialButtons from "./SocialButtons"
import IconList from "./IconList"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <Container>
        <StyledSocialButtons />
        <CompanyInformation>
          <h3>Interior Creations</h3>
          <IconList>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FiMapPin />}
            >
              8045 Tippet Rd.
              <br />
              New Albany, OH 43054
            </a>
            <a href="tel:+6149893503" icon={<FiPhone />}>
              614.989.3503
            </a>
            <a href="mailto:jeff@interiorcreationsco.com" icon={<FiMail />}>
              jeff@interiorcreationsco.com
            </a>
          </IconList>
        </CompanyInformation>
        <Copyright>
          <p>© {new Date().getFullYear()} Interior Creations Co.</p>
          <p>
            <a
              href="https://ajsolutions.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Designed & Developed by AJSolutions`}
            </a>
          </p>
        </Copyright>
      </Container>
    </footer>
  )
}

export default styled(Footer)`
  width: 100%;
  /* to deal with fab laying over copyright text on xxs screens */

  padding: 4rem 5vw 7rem;
  background: var(--secondary);
  @media (min-width: 400px) {
    padding: 2rem 5vw;
  }
  @media (min-width: 662px) {
    padding: 4rem;
  }
`

const Container = styled.div`
  margin-top: auto;
  color: var(--white);
  text-align: center;
  & a,
  p {
    color: var(--lightBlue);
    font-size: 0.8rem;
    margin: 0;
  }
  @media (min-width: 662px) {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    grid-template-areas:
      "info social"
      "info copyright";
  }
`

const StyledSocialButtons = styled(SocialButtons)`
  grid-area: social;
`

const Copyright = styled.div`
  margin-top: 2rem;
  text-align: center;
  grid-area: copyright;
  & > p,
  a {
    font-size: 0.65rem;
    @media (min-width: 360px) {
      font-size: 0.7rem;
    }
    @media (min-width: 425px) {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 662px) {
    margin: 0;
    text-align: right;
    align-self: end;
  }
`

const CompanyInformation = styled.div`
  grid-area: info;
  & > ${IconList} {
    color: var(--lightBlue);
  }
  & svg {
    stroke-width: 1;
  }
  @media (min-width: 662px) {
    text-align: left;
    & > h3 {
      margin-bottom: 12px;
    }
    & > ${IconList} > div {
      flex-wrap: no-wrap;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 0.35rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      & > svg {
        height: 12px;
        width: 12px;
        margin-bottom: 0;
        margin-right: 0.75rem;
        position: relative;
        top: 4px;
      }
    }
  }
`
