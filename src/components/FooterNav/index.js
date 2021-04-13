import React from "react"
import { Link } from "gatsby"
import "./styles.css"

const index = ({ prev, next }) => (
  <div className="footer-nav">
    <Link to={prev}>← prev</Link>
    <Link to={next}>next →</Link>
  </div>
)

export default index
