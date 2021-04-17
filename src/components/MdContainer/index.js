import React from "react"

const MdContainer = ({ html }) => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{ __html: html }} />
)

export default MdContainer
