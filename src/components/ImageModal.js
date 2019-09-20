import React, { useContext } from "react"
import styled from "styled-components"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { ModalContext } from "../context/ModalContext"

const ImageModal = ({ className }) => {
  const [, setModalOpen] = useContext(ModalContext)

  const handleClick = (e, dir) => {
    e.preventDefault()
    alert(dir)
  }
  return (
    <div className={className} onClick={() => setModalOpen(false)}>
      <FaChevronLeft onClick={e => handleClick(e, "left")} />
      <h2 onClick={e => handleClick(e, "right")}>hello</h2>
      <FaChevronRight onClick={e => handleClick(e, "right")} />
    </div>
  )
}

export default styled(ImageModal)`
  color: white;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > svg {
    color: inherit;
    font-size: 2rem;
  }
`
