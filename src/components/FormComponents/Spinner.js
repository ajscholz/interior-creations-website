import React, { useEffect, useState } from "react"

import { useSpring, animated, config } from "react-spring"
import { FaSpinner } from "react-icons/fa"

const Spinner = () => {
  const [spin, setSpin] = useState(1)
  const [rotate, set] = useSpring(() => ({
    transform: "rotate(0deg)",
    config: config.slow,
    onRest: () => handleRest(),
  }))

  const handleRest = () => {
    setSpin(spin => spin + 1)
  }

  useEffect(() => {
    set({ transform: `rotate(${spin * 360}deg)` })
  })

  const AnimatedSpinner = animated(FaSpinner)

  return <AnimatedSpinner style={rotate} />
}

export default Spinner
