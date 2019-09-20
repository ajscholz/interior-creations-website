import React from "react"
import styled from "styled-components"

const Section = props => {
  const { className, children } = props
  return (
    <section className={className}>
      <div className="content-wrapper">{children}</div>
    </section>
  )
}

export default styled(Section)`
  padding: 4rem 5vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  &:nth-of-type(even) {
    background: var(--lightestgray);
  }
  .content-wrapper {
    width: 100%;
    max-width: 1100px;
  }

  @media (min-width: 662px) {
    padding: 4rem;
    width: 100%;
  }

  @media (min-width: 900px) {
    padding: 6rem 4rem;
  }
`
