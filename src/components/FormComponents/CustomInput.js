import React, { useRef, useEffect } from "react"
import styled from "styled-components"

const CustomInput = ({
  className,
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <div className={className}>
      <StyledInput
        type={props.type || "text"}
        {...field}
        {...props}
        ref={inputEl}
      />
    </div>
  )
}

const StyledInput = styled.input`
  height: 60%;
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
  font-size: 0.9rem;
  color: var(--black);
  padding-left: 0.75rem;
`

export default styled(CustomInput)`
  height: 100%;
  width: 100%;
  border: 1px solid var(--lightgray);
  border-right: none;
  display: flex;
  align-items: center;
`
