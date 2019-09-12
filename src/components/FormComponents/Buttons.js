import styled, { css } from "styled-components"
import { FiX, FiChevronLeft } from "react-icons/fi"

const base = css`
  display: block;
  position: absolute;
  top: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  opacity: 0.8;
  stroke-width: 1px;
  color: var(--lightgray);
  outline: none;
  border: none;
  cursor: pointer;
`

export const CloseButton = styled(FiX)`
  ${base}
  right: 1rem;
`

export const PrevButton = styled(FiChevronLeft)`
  ${base}
  left: 1rem;
`
