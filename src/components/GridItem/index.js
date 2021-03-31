import React from "react"
import { navigate } from "gatsby"
import pageTransition from "../../utils/pageTransition"

const GridItem = ({ href, children, className }) => {
  const handleClick = (event) => {
    event.preventDefault()
    pageTransition({
      onMiddle: () => {
        navigate(href)
      },
    })(event)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`focus:outline-none focus:ring-4 focus:ring-indigo-300 navigation__section ${className}`}
    >
      <h2 className="text-xl">{children}</h2>
    </a>
  )
}

export default GridItem
