import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Modal from "./Modal"
import Button from "../Button"

const ModalController = props => {
  const { buttonText, children } = props
  const [open, setOpen] = useState(false)

  const buttonRef = useRef()

  return (
    <>
      {/* Controller button */}
      <Button onClick={() => setOpen(true)}>{buttonText}</Button>

      {/* Modal logic */}
      {open && (
        <Modal setOpen={setOpen} open={open} sourceRef={buttonRef}>
          {/* <Modal setOpen={setOpen} open={open} sourceRef={buttonRef.current}> */}
          {children}
        </Modal>
      )}
    </>
  )
}

ModalController.propTypes = {
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

ModalController.defaultProps = {
  buttonText: "Modal Button",
  children: "Modal content",
}

export default styled(ModalController)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
