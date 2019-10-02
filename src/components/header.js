import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { DesktopNavigation } from "./Navigation"
import Logo from "./Logo"
import Button from "./Button"
import ModalController from "./ModalComponents/ModalController"
import ProjectForm from "./FormComponents/ProjectForm"

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <NavContainer>
          <DesktopNavigation />
          <ModalController buttonText="Start Project">
            <ProjectForm />
          </ModalController>
        </NavContainer>
      </Wrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: var(--transWhite);
  padding: 1rem;
  @media (min-width: 662px) {
    padding: 2rem;
  }
`

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 662px) {
    justify-content: space-between;
    align-items: flex-end;
  }
`

const StyledLink = styled(Link)`
  width: 125px;

  @media (min-width: 662px) {
    width: 150px;
    margin-right: 3rem;
  }
`

const NavContainer = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 662px) {
    display: flex;
  }
`

export const NavbarButton = styled(Button)`
  font-family: Cinzel;
  padding: 0.5rem 3rem;
  color: var(--primary);
  font-size: 1.5rem;

  @media (min-width: 662px) {
    padding: 0.35rem 0.8rem;
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    font-size: 0.9rem;
    padding: 0.35rem 1.5rem;
  }
  @media (min-width: 992px) {
    font-size: 1rem;
  }
`
