import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import ExpandCloseButton from "./ExpandCloseButton"
import { MobileNavigation } from "./Navigation"
import Footer from "./Footer"
import Modal from "./Modal"

import { ModalContext } from "../context/ModalContext"
import GlobalStyle from "./GlobalStyle"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useContext(ModalContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle lockScroll={modalOpen} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MobileNavigation
        open={menuOpen}
        click={setMenuOpen}
        openModal={setModalOpen}
      />
      <ExpandCloseButton open={menuOpen} click={setMenuOpen} />
      <Main>{children}</Main>
      <Footer />
      <Modal />
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
