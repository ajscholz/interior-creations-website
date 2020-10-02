import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

import GlobalStyle from "./GlobalStyle"
import PopupInfo from "./PopupInfo"
import ModalController from "./ModalComponents/ModalController"

const Layout = ({ children, pageContext }) => {
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
        <GlobalStyle />
        <Main>{children}</Main>
      </>
    )
  }
  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>
      <Footer />
      {infoBoxActive && (
        <ModalController buttonStyle="none">
          <PopupInfo />
        </ModalController>
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
