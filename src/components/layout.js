import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import ExpandCloseButton from "./ExpandCloseButton"
import { MobileNavigation } from "./Navigation"
import Footer from "./Footer"

import { ModalContext } from "../context/ModalContext"
import GlobalStyle from "./GlobalStyle"
// import ModalController from "./ModalComponents/ModalController"
// import PopupInfo from "./PopupInfo"

const Layout = ({ children, pageContext }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const [modalOpen] = useContext(ModalContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const infoBoxActive = false

  if (pageContext.layout === "landing") {
    return (
      <>
        <GlobalStyle lockScroll={modalOpen || menuOpen} />
        <Main>{children}</Main>
      </>
    )
  }
  return (
    <>
      <GlobalStyle lockScroll={modalOpen || menuOpen} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MobileNavigation open={menuOpen} click={setMenuOpen} />
      <ExpandCloseButton open={menuOpen} click={setMenuOpen} />
      <Main>{children}</Main>
      <Footer />
      {/* {infoBoxActive && (
        <ModalController buttonStyle="none">
          <PopupInfo />
        </ModalController>
      )} */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Main = styled.main`
  margin: 0;
`

export default Layout
