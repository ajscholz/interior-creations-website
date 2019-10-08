import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { H4, P } from "./Typography"
import MDX from "./MDX"

const Quote = props => {
  const { author, quote, className } = props
  return (
    <div className={className}>
      <MDX>{quote}</MDX>
      <H4>{author}</H4>
    </div>
  )
}

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}

Quote.defaultProps = {
  author: "Author",
  quote: "Quote",
}

export default styled(Quote)`
  text-align: center;

  & ${P} {
    margin-left: 0;
    margin-right: 0;
    font-size: 1.5rem;
    font-style: italic;
    color: var(--lightgray);
    font-weight: 400;

    &::before {
      content: '"';
    }
    &::after {
      content: '"';
    }

    @media (min-width: 662px) {
      font-size: 1.75rem;
    }

    @media (min-width: 992px) {
      font-size: 2rem;
    }
  }

  & ${H4} {
    color: var(--primary);
    /* font-size: 1.25rem; */
    margin-bottom: 0;
    &::before {
      content: "- ";
    }

    @media (min-width: 662px) {
      /* font-size: 1.5rem; */
      text-align: right;
    }
  }
`
