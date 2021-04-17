import React from "react"
import "./styles.css"
import SelectLang from "../SelectLang"

const Banner = () => (
  <aside className="banner flex items-center justify-end text-gray-600 text-sm">
    <span className="mr-4">Colaborate</span>
    <span className="mr-1">Language:</span>
    <div>
      <SelectLang />
    </div>
  </aside>
)

export default Banner
