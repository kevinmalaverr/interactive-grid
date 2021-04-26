import React from "react"
import { Provider } from "../../context"

const PageWrapper = ({ data, children }) => (
  <Provider data={data}>{children}</Provider>
)

export default PageWrapper
