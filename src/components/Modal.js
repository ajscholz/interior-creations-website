import React, { useState, useContext } from "react"
import styled from "styled-components"

import { ModalContext } from "../context/ModalContext"
import { useSpring, animated } from "react-spring"
import ContactForm from "./ContactForm"
import ImageModal from "./ImageModal"

const Modal = props => {
  const [modalOpen, setModalOpen] = useContext(ModalContext)

  console.log(modalOpen)

  const showModal = useSpring({
    to: async next => {
      await next(modalOpen ? { display: "flex" } : { opacity: 0 })
      await next(modalOpen ? { opacity: 1 } : { display: "none" })
    },
    from: { display: "none", opacity: 0 },
  })

  const { className } = props
  return (
    <animated.div className={className} style={showModal}>
      <Overlay onClick={() => setModalOpen(false)} />
      {modalOpen === "form" ? (
        <ContactForm />
      ) : modalOpen === "image" ? (
        <ImageModal />
      ) : null}
    </animated.div>
  )
}

Modal.propTypes = {}

export default styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 750;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`
