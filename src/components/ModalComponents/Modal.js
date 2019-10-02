import React, { useEffect, useState, useRef, useContext } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import FocusTrapReact from "focus-trap-react"
import { useTransition, a, config } from "react-spring"
import { FiX } from "react-icons/fi"

import Overlay from "./Overlay"
import CloseButton from "./CloseButton"

import { ModalContext } from "../../context/ModalContext"

const Modal = props => {
  const { className, children, setOpen, sourceRef } = props

  // local state to help with animations
  const [show, setShow] = useState(true)

  // spring settings -- note "clamp: true" and "onDestroyed"
  const transitions = useTransition(show, null, {
    from: { position: "fixed", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onDestroyed: () => setOpen(false),
    config: { ...config.gentle, clamp: true },
  })

  // animate close which then unmounts the component in the onDestroyed() method of "transitions"
  const handleClose = () => {
    setShow(false)
  }

  // dummy function to handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    alert("submitted")
    handleClose()
  }

  // handle escape keypress to exit modal
  const onKeyDown = e => {
    if (e.keyCode === 27) {
      handleClose()
    }
  }

  // clone children to pass props from parent
  // https://medium.com/better-programming/passing-data-to-props-children-in-react-5399baea0356
  const clonedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      handleClose: handleClose,
    })
  })

  return ReactDOM.createPortal(
    transitions.map(
      ({ item, key, props }) =>
        item && (
          <FocusTrapReact key={key}>
            <a.aside
              className={className}
              style={props}
              aria-modal="true"
              role="dialog"
              tabIndex="-1"
              onKeyDown={e => onKeyDown(e)}
            >
              <Overlay onClick={handleClose} />
              {clonedChildren}

              <CloseButton handleClose={handleClose} />
            </a.aside>
          </FocusTrapReact>
        )
    ),
    document.body
  )
}

export default styled(Modal)`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
