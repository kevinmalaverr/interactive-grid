import React from "react"
import "./styles.css"
import { Provider } from "../../context"

const Layout = ({ children, ...props }) => (
  <Provider>
    <div className="main-container">{children}</div>;
  </Provider>
)

export default Layout
