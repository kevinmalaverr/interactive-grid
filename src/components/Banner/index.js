import React from "react"
import "./styles.css"
import SelectLang from "../SelectLang"
import useLanguage from "../../hooks/useLanguage"
import { useGetContext } from "../../context"

const Banner = () => {
  const { state } = useGetContext()
  return (
    <aside className="banner flex items-center justify-end text-gray-600 text-sm">
      <a
        className="mr-4"
        href="https://github.com/kevinmalaverr/interactive-grid"
        target="_blank"
        rel="noreferrer"
      >
        {state.data.general.frontmatter.banner.collaborate}
      </a>
      <span className="mr-1">
        {state.data.general.frontmatter.banner.language}:{" "}
      </span>
      <div>
        <SelectLang />
      </div>
    </aside>
  )
}

export default Banner
