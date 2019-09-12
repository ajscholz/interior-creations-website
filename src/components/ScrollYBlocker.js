import { useEffect } from "react"

const ScrollYBlocker = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden"
    return () => {
      document.body.removeAttribute("style")
    }
  })

  return null
}

export default ScrollYBlocker
