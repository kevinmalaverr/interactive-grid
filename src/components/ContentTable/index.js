import React from "react"
import "./styles.css"

const ContentTable = ({ links }) => (
  <div className="content-table">
    <p className="text-xl font-bold my-4">Content table</p>
    <ul>
      {links.map((link) => (
        <li className="my-3">
          <a
            className="text-gray-700 content-table__link"
            href={`#target-${link.id}`}
            id={`anchor-${link.id}`}
            key={link.id}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default ContentTable
