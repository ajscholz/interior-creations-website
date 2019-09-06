import React from "react"
import styled from "styled-components"

const IconList = props => {
  const { children, className } = props
  return (
    <div className={className}>
      {children.map((child, i) => {
        return (
          <Item key={i}>
            {child.props.icon}
            <p>{child}</p>
          </Item>
        )
      })}
    </div>
  )
}

export default styled(IconList)`
  color: inherit;
`

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;

  & > svg {
    height: 24px;
    width: 100%;
    color: inherit;
    margin-bottom: 0.35rem;
  }
`
