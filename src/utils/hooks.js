import { useLayoutEffect } from "react"

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    document.body.style.position = "fixed"

    return () => document.body.removeAttribute("style")
  }, [])
}
