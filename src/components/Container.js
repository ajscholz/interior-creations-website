import React from "react"
import styled from "styled-components"

const Container = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

export default styled(Container)`
  width: 100%;
  height: 100%;
  max-width: ${props =>
    props.size === "sm"
      ? "700px"
      : props.size === "lg"
      ? "1100px"
      : props.full === true
      ? "unset"
      : "1100px"};
  /* transform: skewY(2deg); */
  overflow: visible;
  position: relative;
  margin: 0 auto;
`
