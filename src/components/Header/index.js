import { navigate } from "gatsby"
import React from "react"
import ArrowLeft from "../icons/ArrowLeft"
import Search from "../icons/Search"

const index = ({ name }) => (
  <header className="flex justify-between items-center p-4 mb-4">
    <button
      type="button"
      className="focus:outline-none focus:ring focus:border-indigo-300"
      onClick={() => navigate(-1)}
      aria-label="back"
    >
      <ArrowLeft />
    </button>
    <h1 className="text-2xl text-indigo-900 font-bold">{name}</h1>

    <button type="button" aria-label="Search" data-tooltip-pos="left">
      <Search />
    </button>
  </header>
)

export default index
