import React, { useState } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import Quote from "./Quote"
import QuoteAuthor from "./QuoteAuthor"
import Stars from "./Stars"
import ProgressBubbles from "../ProgressBubbles"
import Arrow from "../Arrow"

const Reviews = props => {
  const { className, reviews } = props
  const [reviewIndex, setReview] = useState(0)

  const transitions = useTransition(reviewIndex, null, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      // position: "relative",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
      // position: "relative",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)",
      position: "absolute",
    },
  })

  const AnimatedReview = animated(Review)

  return (
    <div className={className}>
      <div className="review-wrapper">
        <Arrow
          click={() =>
            reviewIndex === 0
              ? setReview(reviews.length - 1)
              : setReview(() => reviewIndex - 1)
          }
          direction="left"
          aria-label="View previous review"
        />

        {transitions.map(({ item, props, key }) => {
          return (
            // <div key={key}>
            <AnimatedReview style={{ ...props }} key={key}>
              <Stars />
              <Quote>{reviews[item].text.text}</Quote>
              <QuoteAuthor style={{ marginBottom: "0" }}>
                {reviews[item].person}
              </QuoteAuthor>
            </AnimatedReview>
            // </div>
          )
        })}

        <Arrow
          direction="right"
          aria-label="View next review"
          click={() =>
            reviewIndex + 1 === reviews.length
              ? setReview(0)
              : setReview(() => reviewIndex + 1)
          }
        />
      </div>
      <StyledProgressBubbles
        number={reviews.length}
        current={reviewIndex}
        set={setReview}
      />
    </div>
  )
}

export default styled(Reviews)`
  display: flex;
  flex-direction: column;
  /* height: 360px; */
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  align-items: stretch;

  & .review-wrapper {
    display: flex;
    flex-wrap: nowrap;
  }
`

const Review = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1em;
  will-change: transform, opacity;
  /* left: 10%; */
  z-index: -1;
`

const StyledProgressBubbles = styled(ProgressBubbles)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
