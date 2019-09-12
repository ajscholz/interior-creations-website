import React from "react"
import styled from "styled-components"

const ProgressBar = ({ className, length, current }) => {
  const progress = `${((current / length) * 100).toFixed(0)}%`
  return (
    <div className={className}>
      <StatusBar progress={progress} />
      <Percentage>{`${progress} Complete`}</Percentage>
    </div>
  )
}

export default styled(ProgressBar)`
  position: relative;
  width: 100%;
  height: 1rem;
  border: 1px solid var(--lightgray);
  background: white;
`

const StatusBar = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.progress};
  background: var(--lightgray);
  opacity: 0.75;
`

const Percentage = styled.div`
  position: absolute;
  top: 0;
  right: 0.5rem;
  height: 100%;
  font-size: 0.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  line-height: 0;
  color: var(--lightgray);
`
