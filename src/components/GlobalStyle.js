import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: ${props => (props.lockScroll ? "hidden" : "scroll")}
  }
`

export default GlobalStyle
