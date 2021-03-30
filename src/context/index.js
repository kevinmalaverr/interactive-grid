import React, { useContext, useReducer } from "react"

const GlobalContext = React.createContext()
const initialState = {}

export const useGetContext = () => useContext(GlobalContext)

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SECTION_NAME":
      return { ...state, sectionName: action.payload }
    default:
      throw new Error(`action type ${action.type} doesn't exist`)
  }
}

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
