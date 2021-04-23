import React from "react"
import "./styles.css"
import { useStaticQuery, graphql } from "gatsby"
import SelectLang from "../SelectLang"
import useLanguage from "../../hooks/useLanguage"
import { useGetContext } from "../../context"

const Banner = (props) => {
  const [lang] = useLanguage()
  const d = useGetContext()
  console.log(d)
  return (
    <aside className="banner flex items-center justify-end text-gray-600 text-sm">
      <a
        className="mr-4"
        href="https://github.com/kevinmalaverr/interactive-grid"
        target="_blank"
        rel="noreferrer"
      >
        col
      </a>
      <span className="mr-1">lang:</span>
      <div>
        <SelectLang />
      </div>
    </aside>
  )
}

export default Banner
