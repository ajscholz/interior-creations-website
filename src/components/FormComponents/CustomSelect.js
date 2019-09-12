import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import { MdArrowDropDown } from "react-icons/md"

const CustomSelect = ({
  className,
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
    // inputEl.current.selectedIndex = -1
  })

  return (
    <div className={className}>
      <StyledSelect
        {...field}
        {...props}
        ref={inputEl}
        placeholder="Please select one project type"
      />
      <div className="icon">
        <MdArrowDropDown style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  )
}

const StyledSelect = styled.select`
  appearance: none;
  height: 70%;
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
  font-size: 0.9rem;
  color: var(--black);
  padding-left: 0.75rem;
  z-index: 2;
  cursor: pointer;
`

export default styled(CustomSelect)`
  height: 100%;
  width: 100%;
  border: 1px solid var(--lightgray);
  border-right: none;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;

  & .icon {
    height: 20px;
    width: 20px;
    flex-grow: 0;
    flex-shrink: 0;
    /* border-left: 1px solid var(--lightgray); */
    /* padding: 0 10px; */
    position: absolute;
    right: 0.5rem;
    z-index: 1;
    & > svg {
      color: var(--lightgray);
    }
  }
`
