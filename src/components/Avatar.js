import React from "react"
import styled from "styled-components"

const Avatar = props => {
  const { className, image } = props
  return <img src={image} alt="here's an image" className={className} />
}

export default styled(Avatar)`
  border-radius: 50%;
`
