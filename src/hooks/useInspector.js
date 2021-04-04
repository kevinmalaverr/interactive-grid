import React, { useRef, useEffect, useState } from "react"
import setGridLines from "../utils/setGridLines"

/**
 *  generate an inspector for the ref Element
 * @param {React.DependencyList} deps
 * @returns React.Ref
 */
// eslint-disable-next-line import/prefer-default-export
export const useInspector = (deps = []) => {
  const [windowSize, setWindowSize] = useState()
  const ref = useRef()

  function reportWindowSize() {
    setWindowSize({ width: window.innerHeight, height: window.innerWidth })
  }

  useEffect(() => {
    const deleteGridLines = setGridLines(ref.current)
    window.addEventListener("resize", reportWindowSize)
    return () => {
      deleteGridLines()
      window.removeEventListener("resize", reportWindowSize)
    }
  }, [windowSize, ...deps])

  return ref
}
