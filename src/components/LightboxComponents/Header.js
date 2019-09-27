import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { IoIosClose } from "react-icons/io"
import Color from "color"
import ButtonControl from "./ButtonControl"

const LightboxHeader = ({ onClose }) => (
  <TopHeaderBar>
    <CloseButton onClick={onClose} type="button">
      <IoIosClose size={60} />
    </CloseButton>
  </TopHeaderBar>
)

LightboxHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  galleryTitle: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default LightboxHeader

const CloseButton = styled(ButtonControl)`
  /* height: 100%; */
  color: inherit;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const TopHeaderBar = styled.header`
  z-index: 10;
  /* display: flex; */
  /* justify-content: flex-end; */
  height: 5rem;
  color: var(--white);
`
