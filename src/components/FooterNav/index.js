import React from "react"
import "./styles.css"
import { Link } from "gatsby"
import { useGetContext } from "../../context"

const FooterNav = ({ prev, next }) => {
  const { state } = useGetContext()

  console.log(prev)
  return (
    <div className="footer-nav text-gray-600">
      <Link to={prev}>← {state.data.general.frontmatter.footerNav.prev}</Link>
      <Link to={next}>{state.data.general.frontmatter.footerNav.next} →</Link>
    </div>
  )
}
export default FooterNav
