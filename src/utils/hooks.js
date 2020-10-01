import { useLayoutEffect, useRef, useState, useEffect } from "react"
import ResizeObserver from "resize-observer-polyfill"
import { useSpring, config } from "react-spring"

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

export const useHocus = () => {
  // const [hocusing, setHocusing] = useState(false)
  const ref = useRef(null)

  const [animation, set] = useSpring(() => ({
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    transform: "scale(1)",
    config: { ...config.wobbly, clamp: true },
  }))

  useEffect(() => {
    const el = ref.current
    // el = ref.current
    const hocus = () =>
      set({
        boxShadow:
          "0 8px 14px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        transform: "scale(1.1)",
      })
    const blur = () =>
      set({
        boxShadow:
          "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        transform: "scale(1)",
      })

    el.addEventListener("focusin", hocus)
    el.addEventListener("mouseover", hocus)
    el.addEventListener("blur", blur)
    el.addEventListener("mouseout", blur)
    return () => {
      el.removeEventListener("focusin", hocus)
      el.removeEventListener("mouseover", hocus)
      el.removeEventListener("blur", blur)
      el.removeEventListener("mouseout", blur)
    }
  })

  return [{ ref }, animation]
}
