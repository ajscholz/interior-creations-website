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
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  })
  return [{ ref }, bounds]
}

export const useKeyPress = targetKey => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)
  // console.log(targetKey)
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    console.log(key)
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false
  // const upHandler = ({ key }) => {
  //   if (key === targetKey) {
  //     setKeyPressed(false)
  //   }
  // }

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    // window.addEventListener("keyup", upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler)
      // window.removeEventListener("keyup", upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}

export const useKeyDown = () => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState()
  // console.log(targetKey)
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    setKeyPressed(key)
  }

  // If released key is our target key then set to false
  // const upHandler = ({ key }) => {
  //   if (key === targetKey) {
  //     setKeyPressed(false)
  //   }
  // }

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    // window.addEventListener("keyup", upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler)
      // window.removeEventListener("keyup", upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}
