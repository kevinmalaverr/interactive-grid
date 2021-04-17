import React from "react"
import { Link } from "gatsby"
import "./styles.css"

const index = ({ prev, next }) => (
  <div className="footer-nav text-gray-600">
    <Link to={prev}>← previous</Link>
    <Link to={next}>next →</Link>
  </div>
)

export default index
