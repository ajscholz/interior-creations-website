import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { DesktopNavigation } from "./Navigation"
import Logo from "./Logo"

const Header = ({ siteTitle, openModal }) => (
  <StyledHeader>
    <Wrapper>
      <StyledLink
        to="/"
        // style={{
        //   width: "200px",
        // }}
      >
        <Logo />
        {/* {siteTitle} */}
      </StyledLink>
      <DesktopNavigation openModal={openModal} />
    </Wrapper>
  </StyledHeader>
)

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
  max-width: 900px;
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
