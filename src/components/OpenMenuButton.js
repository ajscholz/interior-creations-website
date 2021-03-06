import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import { useSpring, animated } from "react-spring"
import { FiMenu } from "react-icons/fi"

import { onKeyPress } from "../utils/helpers"

const OpenMenuButton = ({ open, setMenuOpen }) => {
  // const topChev = useSpring({ top: open ? "64%" : "40%" })
  // const bottomChev = useSpring({ top: open ? "37%" : "60%" })

  // const AnimatedChevUp = animated(ChevronUp)
  // const AnimatedChevDown = animated(ChevronDown)

  return (
    <Button
      onClick={() => setMenuOpen(!open)}
      alt="open navigation menu"
      aria-label="open navigation menu"
      // alt={`${open ? "close" : "open"} navigation menu`}
      // aria-label={`${open ? "close" : "open"} navigation menu`}
      onKeyDown={e => onKeyPress(e, () => setMenuOpen(false))}
    >
      {/* <AnimatedChevUp style={topChev} open={open} />
      <AnimatedChevDown style={bottomChev} open={open} /> */}
      Menu
      <span alt="menu icon">
        <FiMenu size={20} />
      </span>
    </Button>
  )
}

OpenMenuButton.propTypes = {
  open: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
}

const Button = styled.button`
  display: flex;
  margin-top: 3px;
  align-items: center;
  /* z-index: 500; */
  /* outline: none; */
  /* height: 3rem;
  width: 3rem; */
  /* background: var(--white); */
  border: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-family: "Cinzel";
  color: var(--primary);
  /* font-weight: 600; */
  /* border-radius: 50%; */
  /* position: fixed; */
  /* bottom: 2rem;
  right: 2rem; */
  /* box-shadow: var(--shadow3); */

  & span {
    /* display: flex;
    align-items: center; */
    margin-bottom: -2px;
    margin-left: 0.2rem;
    & svg {
      stroke-width: 1;
    }
  }
  @media (min-width: 662px) {
    display: none;
  }
`

// const Chevron = styled.div`
//   border-left: 1px solid var(--secondary);
//   border-top: 1px solid var(--secondary);
//   height: 10px;
//   width: 10px;
//   margin: 0;
//   position: absolute;
//   left: 50%;
// `

// const ChevronUp = styled(Chevron)`
//   transform: translateY(-50%) translateX(-50%) rotate(45deg);
// `

// const ChevronDown = styled(Chevron)`
//   transform: translateY(-50%) translateX(-50%) rotate(-135deg);
// `

export default OpenMenuButton
