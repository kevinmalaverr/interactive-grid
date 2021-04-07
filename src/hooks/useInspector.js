import { useRef, useEffect, useState } from "react"
import setGridLines from "../utils/setGridLines"
import awaitEvent from "../utils/awaitEvent"

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
    let wasDeleted = false
    const deleteGridLines = setGridLines(ref.current)
    const removeEvent = awaitEvent("resize", {
      onStart: () => {
        wasDeleted = true
        deleteGridLines()
      },
      onEnd: reportWindowSize,
    })
    return () => {
      if (!wasDeleted) deleteGridLines()
      removeEvent()
    }
  }, [windowSize, ...deps])

  return ref
}
