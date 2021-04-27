import React from "react"
import Edit from "../icons/Edit"

const EditPageButton = ({ message, url }) => (
  <a
    href={`https://github.com/kevinmalaverr/interactive-grid/tree/main/src/markdown/${url}`}
    target="_blank"
    rel="noreferrer"
    className="flex items-center my-6 text-md text-gray-500"
  >
    <Edit size="1em" className="mr-2" />
    {message}
  </a>
)

export default EditPageButton
