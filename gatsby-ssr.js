import React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element, props }) => (
  <>
    <Layout {...props}>{element}</Layout>
  </>
)

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div key="animations" id="animation-portal" style={{ zIndex: 100 }} />,
    <div key="modal-portal" id="modal-portal" style={{ zIndex: 50 }} />,
    <svg key="sprites" className="sprites">
      <symbol id="select-arrow-down" viewBox="0 0 10 6">
        <polyline points="1 1 5 5 9 1" />
      </symbol>
    </svg>,
  ])
}
