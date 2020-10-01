import { useLayoutEffect, useRef, useState, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // document.body.style.position = "fixed"
    document.body.style.overflow = "hidden"

    return () => document.body.removeAttribute("style")
  }, [])
}

export const useMeasure = () => {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )

  useEffect(() => {
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ro])

  return [{ ref }, bounds]
}
