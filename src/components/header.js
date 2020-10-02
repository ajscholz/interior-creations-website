import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navigation, { MobileNavigation } from "./Navigation"
import Logo from "./Logo"
import OpenMenuButton from "./OpenMenuButton"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <StyledHeader>
      <Wrapper>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <Navigation />
        <MobileNavigation open={menuOpen} setMenuOpen={setMenuOpen} />
        <OpenMenuButton open={menuOpen} setMenuOpen={setMenuOpen} />
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
  position: fixed;
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
  justify-content: space-between;
  align-items: center;

  @media (min-width: 662px) {
    /* justify-content: space-between; */
    align-items: flex-end;
  }
`

const StyledLink = styled(Link)`
  width: 125px;

  @media (min-width: 662px) {
    width: 150px;
    margin-right: 3rem;
  }
  @media (min-width: 768px) {
    width: 200px;
    margin-right: 3rem;
  }
`
