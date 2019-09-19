import React from "react"
import styled from "styled-components"
import Stars from "./Stars"
import Quote from "./Quote"
import QuoteAuthor from "./QuoteAuthor"

const Review = props => {
  const { className, review } = props
  return (
    <div className={className}>
      <Stars />
      <Quote>{review.text}</Quote>
      <QuoteAuthor>{review.person}</QuoteAuthor>
    </div>
  )
}

export default styled(Review)`
  & ${QuoteAuthor} {
    margin-bottom: 0;
  }
`
