import React, { useContext, useReducer } from "react"

const GlobalContext = React.createContext()
export const useGetContext = () => useContext(GlobalContext)

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STATE":
      return action.payload
    default:
      throw new Error(`action type ${action.type} doesn't exist`)
  }
}

export const Provider = ({ data, children }) => {
  const [state, dispatch] = useReducer(reducer, { data })

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
