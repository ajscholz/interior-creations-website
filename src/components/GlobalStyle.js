import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    overflow: ${props => props.lockScroll && "hidden"};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--white);
    height: 100%;
    font-family: "Prompt", sans-serif;
    font-weight: 200;
    line-height: 1.45;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: Prompt, Arial, Helvetica, sans-serif;
    font-weight: 200;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }

`

export default GlobalStyle
