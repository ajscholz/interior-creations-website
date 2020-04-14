import styled, { css } from "styled-components"
import { FiX, FiChevronLeft } from "react-icons/fi"

const base = css`
  /* display: block;
  position: absolute;
  top: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  opacity: 0.8;
  stroke-width: 1px;
  color: var(--lightgray);
  outline: none;
  border: none;
  cursor: pointer; */
  position: absolute;

  top: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: bold;
  line-height: 0;
`

export const CloseButton = styled(FiX)`
  ${base}
  right: 2rem;
`

export const PrevButton = styled(FiChevronLeft)`
  ${base}
  left: 2rem;
`
