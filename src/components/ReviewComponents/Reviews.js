import React, { useState } from "react"
import styled from "styled-components"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { useTransition, animated } from "react-spring"
import Quote from "./Quote"
import QuoteAuthor from "./QuoteAuthor"
import Stars from "./Stars"

const Reviews = props => {
  const { className, reviewData } = props
  const [review, setReview] = useState(0)

  const AnimatedDiv = styled(animated.div)`
    position: absolute;
    width: 80%;
    height: 100%;
    will-change: transform, opacity;
    left: 10%;
  `

  const reviews = reviewData.map(item => ({ style }) => {
    return (
      <AnimatedDiv style={{ ...style }}>
        <Stars />
        <Quote>{item.text.text}</Quote>
        <QuoteAuthor style={{ marginBottom: "0" }}>{item.person}</QuoteAuthor>
      </AnimatedDiv>
    )
  })

  const transitions = useTransition(review, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  })

  return (
    <div className={className}>
      <Left
        onClick={() =>
          review === 0
            ? setReview(reviewData.length - 1)
            : setReview(review - 1)
        }
        // onClick={onClick}
      >
        <FaChevronLeft />
      </Left>

      {transitions.map(({ item, props, key }) => {
        const SingleReview = reviews[item]
        return <SingleReview key={key} style={props} />
      })}

      <Right
        onClick={() =>
          review + 1 === reviewData.length
            ? setReview(0)
            : setReview(review + 1)
        }
      >
        <FaChevronRight />
      </Right>
    </div>
  )
}

export default styled(Reviews)`
  display: flex;
  height: 350px;
  width: 100%;
  width: 700px;
  max-width: 900px;
  margin: 0 auto;
  align-items: stretch;
  justify-content: space-between;
  position: relative;

  @media (min-width: 350px) {
    height: 300px;
  }
  @media (min-width: 400px) {
    height: 275px;
  }
  @media (min-width: 450px) {
    height: 250px;
  }
  @media (min-width: 500px) {
    height: 230px;
  }
  @media (min-width: 575px) {
    height: 220px;
  }
  @media (min-width: 662px) {
    height: 210px;
  }
  @media (min-width: 900px) {
    height: 150px;
  }
`

const DirectionalArrow = styled.button`
  outline: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  min-height: 100%;
  display: flex;
  align-items: center;
  color: var(--lightgray);
  &:hover {
    color: var(--secondary);
  }
`

const Left = styled(DirectionalArrow)`
  margin-right: 1rem;
  @media (min-width: 662px) {
    margin-right: 2rem;
  }
`

const Right = styled(DirectionalArrow)`
  margin-left: 1rem;
  @media (min-width: 662px) {
    margin-left: 2rem;
  }
`
