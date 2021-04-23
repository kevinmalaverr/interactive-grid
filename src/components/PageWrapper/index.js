import React, { useLayoutEffect } from "react"
import { useGetContext } from "../../context"

const PageWrapper = ({ data, children }) => {
  const { dispatch } = useGetContext()

  useLayoutEffect(() => {
    dispatch({ type: "SET_STATE", payload: data })
  }, [data])

  return children
}

export default PageWrapper
