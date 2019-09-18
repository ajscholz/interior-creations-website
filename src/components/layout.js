import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import ExpandCloseButton from "./ExpandCloseButton"
import { MobileNavigation } from "./Navigation"
import Footer from "./Footer"
import ScrollYBlocker from "./ScrollYBlocker"
import Modal from "./Modal"

import { ModalContext } from "../context/ModalContext"

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useContext(ModalContext)

  console.log("layout modalopen", modalOpen)

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
      <Header
        siteTitle={data.site.siteMetadata.title}
        openModal={setModalOpen}
      />
      <MobileNavigation
        open={menuOpen}
        click={setMenuOpen}
        openModal={setModalOpen}
      />
      <ExpandCloseButton open={menuOpen} click={setMenuOpen} />
      <Main>{children}</Main>
      <Footer />
      {menuOpen && <ScrollYBlocker />}
      {modalOpen && (
        <>
          <Modal setModalOpen={setModalOpen} />
          <ScrollYBlocker />
        </>
      )}
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
