import React, { useEffect } from "react"

const ScrollYBlocker = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => {
      console.log(document.body.removeAttribute("style"))
    }
  })

  return null
}

export default ScrollYBlocker
