import { useEffect } from "react"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"

const history = []

export const useBackNav = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    history.push(pathname)
  }, [])
  return () => {
    history.pop()
    navigate(history.pop() || "/")
  }
}

export default useBackNav
