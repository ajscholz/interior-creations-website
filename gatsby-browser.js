/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "typeface-cinzel"
import "typeface-prompt"

import React from "react"
import { ModalContextProvider } from "./src/context/ModalContext"
import { ScreenClassProvider } from "react-grid-system"

export const wrapRootElement = ({ element }) => (
  <ScreenClassProvider>
    <ModalContextProvider>{element}</ModalContextProvider>
  </ScreenClassProvider>
)
